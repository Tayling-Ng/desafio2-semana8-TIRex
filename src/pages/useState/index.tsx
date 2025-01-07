import { useState } from "react";

export const UseStatePage = () => {
  const [todo, setTodo] = useState("");

  console.log("rendering UseStatePage");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-extrabold text-zinc-700 ">useState</h1>
      <div className="flex flex-col gap-10">
        <input
          type="text"
          placeholder="Adicionar novo todo"
          className="border border-zinc-500 px-2 py-1 w-80"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);

          }}
        />
      </div>
    </div>
  );
};
