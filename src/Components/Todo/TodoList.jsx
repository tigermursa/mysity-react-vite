import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa6";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodoChange = (index, text) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], text };
    setTodos(newTodos);
  };

  const handleToggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed,
    };
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([...todos, { text: "", completed: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2 className="text-center text-3xl mb-5 mt-20 font-bold">
        The Todo List ✔
      </h2>
      <div className="overflow-x-auto  me-2  md:me-10 lg:me-20">
        <table className="w-full lg:w-[700px]  table-fixed">
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td className="p-2 ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={todo.completed}
                      onChange={() => handleToggleCompletion(index)}
                    />
                    <input
                      onFocus={"none"}
                      type="text"
                      className={`w-full p-2 h-14 border rounded ${
                        todo.completed ? "line-through" : ""
                      } bg-blue-100 text-blue-900 font-bold text-xl font-mono focus:outline-none`}
                      value={todo.text}
                      onChange={(e) => handleTodoChange(index, e.target.value)}
                    />
                    <button
                      className="ml-2 text-red-600 hover:text-red-700 hover:rotate-12 transition-all duration-150"
                      onClick={() => removeTodo(index)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <button
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
