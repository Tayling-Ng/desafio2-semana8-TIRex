import { useCallback, useState } from "react";
import { Todo } from "./todoListData";
import { TodoListComponentWithDependency } from "./TodoListComponentWithDependency";

export const UseEffectPage = () => {
  
  console.log("UseEffectPage: rendering");
  const [todo, setTodo] = useState("");
  const [newsTodos, setNewsTodos] = useState<Todo[]>([]);

  const addNewTodo = useCallback(() => {
    setNewsTodos((prevNewsTodos) => {
      const newTodo = {
        id: prevNewsTodos.length + 1,
        text: todo,
        status: "pendente",
      };
      return [...prevNewsTodos, newTodo];
    });
    setTodo("");
  }, [todo]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-extrabold text-zinc-700 ">useEffect</h1>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            className="border border-zinc-500 px-2 py-1 w-80"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="button" onClick={addNewTodo}>
            Add Todo
          </button>
        </div>
        <div className="flex gap-10 justify-between pr-10">
          <TodoListComponentWithDependency newsTodos={newsTodos} />
        </div>
      </div>
    </div>
  );
};
