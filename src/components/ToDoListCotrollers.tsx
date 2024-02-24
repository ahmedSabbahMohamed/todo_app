import FilterToDoList from "./FilterToDoList";

function ToDoListCotrollers({
  left,
  handleClick,
  showActive,
  showAll,
  showCompleted,
}: any) {
  return (
    <>
      <div className="flex items-center justify-between px-5 py-4">
        <div className="dark:text-dark-darkGrayishBlue text-light-veryDarkGrayishBlue">
          {left} items left
        </div>
        <div className="hidden md:block">
          <FilterToDoList showActive={showActive} showAll={showAll} showCompleted={showCompleted} />
        </div>
        <button
          onClick={handleClick}
          className="dark:text-dark-darkGrayishBlue text-light-veryDarkGrayishBlue"
        >
          Clear Completed
        </button>
      </div>
    </>
  );
}

export default ToDoListCotrollers