import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className=" absolute top-0 right-0 flex justify-end p-4">
      <ModeToggle />
    </header>
  )
}
