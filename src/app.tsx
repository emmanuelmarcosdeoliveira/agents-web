import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateRoom } from '@/pages/create-room'
import Header from './components/ui/Header'
import { Room } from './pages/room'
import { ThemeProvider } from './theme/theme-provider'
export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
