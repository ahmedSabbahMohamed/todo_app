import moon from "../assets/images/icon-moon.svg"
import sun from "../assets/images/icon-sun.svg"

function ThemeToggler() {

  const changeTheme = () => {
    const appElelment = document.getElementById("app")
    appElelment?.classList.toggle("dark")
    const currentTheme: string = appElelment?.classList?.value ?? "";
    localStorage.setItem("theme", currentTheme);
  }

  return (
    <button onClick={changeTheme}>
      <img className="dark:hidden" src={moon} alt="moon" />
      <img className="hidden dark:block" src={sun} alt="sun" />
    </button>
  );
}

export default ThemeToggler