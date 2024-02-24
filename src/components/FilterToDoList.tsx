function FilterToDoList({showActive, showAll, showCompleted}: any) {

  return (
    <ul className="flex gap-4 justify-center">
      <button
        onClick={showAll}
        className="dark:text-dark-darkGrayishBlue text-light-veryDarkGrayishBlue"
      >
        All
      </button>
      <button
        onClick={showActive}
        className=" dark:text-dark-darkGrayishBlue text-light-veryDarkGrayishBlue"
      >
        Active
      </button>
      <button
        onClick={showCompleted}
        className="dark:text-dark-darkGrayishBlue text-light-veryDarkGrayishBlue"
      >
        Completed
      </button>
    </ul>
  );
}

export default FilterToDoList