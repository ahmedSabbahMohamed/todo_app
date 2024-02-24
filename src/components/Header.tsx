import Logo from "./Logo"
import ThemeToggler from "./ThemeToggler"

function Header() {
  return (
    <header className="flex justify-between items-center">
        <Logo />
        <ThemeToggler />
    </header>
  )
}

export default Header