/** biome-ignore-all lint/suspicious/noConsole: <explanation> */

import { ArrowLeft, CirclePause, Voicemail } from 'lucide-react'
import { useRef, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Thears from '@/components/ui/Thears'

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

type RoomParams = {
  roomId: string
}

export function RecordRoomAudio() {
  const navigate = useNavigate()
  const params = useParams<RoomParams>()
  const [isRecording, setIsRecording] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)
  const intervalRef = useRef<NodeJS.Timeout>(null)

  function stopRecording() {
    setIsRecording(false)
    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current?.stop()
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData()
    formData.append('file', audio, 'audio.webm')
    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    )
    const result = await response.json()
    console.log(result)
  }

  function createRecorder(audio: MediaStream) {
    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    })

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data)
      }
    }

    recorder.current.onstart = () => {
      console.log('Gravação inciada')
    }
    recorder.current.onstop = () => {
      console.log('Gravação encerada/pausada')
    }
    recorder.current.start()
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('O seu navegador não suporta gravação...')
      return
    }
    setIsRecording(true)
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    createRecorder(audio)

    intervalRef.current = setInterval(() => {
      recorder.current?.stop()
      createRecorder(audio)
    }, 5000)
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="h-[calc(100vh-12rem)] max-w-screen ">
      <Thears amplitude={1} distance={0} enableMouseInteraction={true} />

      <div className=" -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex items-center justify-center gap-3 overflow-hidden">
        <Button onClick={() => navigate(-1)} variant="outline">
          <ArrowLeft className=" size-4" />
          Voltar ao Início
        </Button>

        {isRecording ? (
          <Button onClick={stopRecording} variant={'destructive'}>
            <CirclePause />
            Pausar Gravação
          </Button>
        ) : (
          <Button onClick={startRecording}>
            <Voicemail />
            Gravar áudio
          </Button>
        )}
      </div>
    </div>
  )
}
