import BackgroundDark from "./components/BackgroundDark";
import BackgroundLight from "./components/BackgroundLight";
import Header from "./components/Header";
import TodoList from "./components/TodoList"

function App() {

  const theme: string = localStorage.getItem("theme") ?? "";

  return (
    <div className={`${theme}`} id="app">
      <div className="min-h-screen bg-light-veryLightGrayishBlue dark:bg-dark-veryDarkBlue">
        <BackgroundDark />
        <BackgroundLight />
        <div className="w-full lg:w-[40%] px-3 mx-auto -mt-36 md:-mt-56 lg:-mt-48">
          <div className="mb-4">
            <Header />
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App
