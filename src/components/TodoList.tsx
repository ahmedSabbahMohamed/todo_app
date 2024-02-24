import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import ToDoListCotrollers from "./ToDoListCotrollers";
import FilterToDoList from "./FilterToDoList";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem("todos");
    if (value == null) return [];
    return JSON.parse(value);
  });
  const [newTodoName, setNewTodoName] = useState<string>("");
  const [showActiveOnly, setShowActiveOnly] = useState<boolean>(false);
  const [showCompletedOnly, setShowCompletedOnly] = useState<boolean>(false);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos((prevTodos: []) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), name: newTodoName, completed: false },
      ];
    });
    setNewTodoName("");
  };

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos((prevTodos: []) => {
      return prevTodos.map((todo: { id: string }) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };

    const clearCompleted = () => {
      setTodos((prevTodos: []) =>
        prevTodos.filter((todo: { completed: boolean }) => !todo.completed)
      );
    };

        const todosToShow = showActiveOnly
          ? todos.filter((todo: { completed: boolean }) => !todo.completed)
          : showCompletedOnly
          ? todos.filter((todo: { completed: boolean }) => todo.completed)
          : todos;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosLeft = todos.filter(
    (todo: { completed: boolean }) => !todo.completed
  ).length;

  return (
    <div className="grid gap-4">
      <InputForm
        addTodo={addTodo}
        handleInputChange={handleInputChange}
        todoItem={newTodoName}
      />
      <div className="rounded-md overflow-hidden w-full bg-light-veryLightGray shadow-lg dark:bg-dark-veryDarkDesaturatedBlue relative z-50">
        <ul>
          {todosToShow.map((todo: any) => {
            return (
              <li
                key={todo.id}
                className="flex items-center justify-between p-5 border-b-[1px] border-b-light-lightGrayishBlue dark:border-b-dark-darkGrayishBlue"
              >
                <div className="flex items-center gap-2">
                  <label
                    htmlFor={todo.name}
                    className="relative cursor-pointer flex gap-2 to-do-item text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 opacity-1"
                      name="todo-item"
                      id={todo.name}
                      checked={todo.completed}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        toggleTodo(todo.id, e.target.checked)
                      }
                    />
                    {/* <span className="absolute left-0 top-0 w-6 h-6 rounded-full border"></span> */}
                    {todo.name}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
        {todos && (
          <ToDoListCotrollers
            left={todosLeft}
            handleClick={clearCompleted}
            showActive={() => setShowActiveOnly(true)}
            showAll={() => {
              setShowActiveOnly(false);
              setShowCompletedOnly(false);
            }}
            showCompleted={() => setShowCompletedOnly(true)}
          />
        )}
      </div>
      {todos && (
        <div className="md:hidden bg-light-veryLightGray shadow-lg dark:bg-dark-veryDarkDesaturatedBlue rounded-md p-5">
          <FilterToDoList
            showActive={() => setShowActiveOnly(true)}
            showAll={() => {
              setShowActiveOnly(false);
              setShowCompletedOnly(false);
            }}
            showCompleted={() => setShowCompletedOnly(true)}
          />
        </div>
      )}
    </div>
  );
}

export default TodoList;
