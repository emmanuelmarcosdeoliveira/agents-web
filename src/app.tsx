import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateRoom } from '@/pages/create-room'
import Header from './components/ui/Header'
import { RecordRoomAudio } from './pages/record-room-audio'
import { Room } from './pages/room'
import { ThemeProvider } from './theme/theme-provider'
export function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <h1 className="py-10 text-center font-display text-6xl text-outline max-sm:text-4xl">
            Let Me Ask - Agent I.A
          </h1>
          <Header />
          <Routes>
            <Route element={<CreateRoom />} index />
            <Route element={<Room />} path="/room/:roomId" />
            <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
