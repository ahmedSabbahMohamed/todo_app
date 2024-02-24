function InputForm({addTodo, todoItem, handleInputChange}: any) {
  return (
    <form
      onSubmit={addTodo}
      className="flex items-center gap-1 px-5 bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue rounded-md overflow-hidden dark:text-dark-lightGrayishBlueHover relative z-50"
    >
      <label
        className="block w-5 h-5 rounded-full border dark:border-dark-veryDarkGrayishBlue"
        htmlFor="todo_item"
      ></label>
      <input
        className="w-full h-full p-4 bg-transparent border-0 outline-none"
        type="text"
        name="todo_item"
        placeholder="Create a new todo..."
        value={todoItem}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default InputForm