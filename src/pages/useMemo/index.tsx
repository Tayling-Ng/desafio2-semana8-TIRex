

import { TodoListComponentMemoRender } from "./TodoListComponentMemoRender";
import { todoListData } from "./todoListData";
import { useState } from "react";

export const UseMemoPage = () => {
  console.log('UseMemoPage: rendering')

  const [todo, setTodo] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-extrabold text-zinc-700 ">useMemo</h1>
      <div className="flex flex-col gap-10">
        <input
          type="text"
          placeholder="Adicionar novo todo"
          className="border border-zinc-500 px-2 py-1 w-80"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <div className="flex gap-10 justify-between pr-10">
            <TodoListComponentMemoRender todos={todoListData} status="pendente" />
        </div>
      </div>
    </div>
  );
};


