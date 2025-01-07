import { useMemo, useState } from "react";
import { useTodoContext } from "./TodoContext";

export const TodoTableComponent = () => {
  const [todo, setTodo] = useState("");
  const { todoList, addTodo, removeTodo } = useTodoContext();

  const todosFilteredRenderMemo = useMemo(() => {
    console.log("TodoListComponentAways: rendering todo list");
    return todoList.map((todo, index) => (
      <tr key={todo.id} className="">
        <td className="text-start px-2">{todo.id}</td>
        <td className="text-start px-2">{todo.text}</td>
        <td className="text-start px-2">
          <button onClick={() => removeTodo(index)}> Remover</button>
        </td>
      </tr>
    ));
  }, [todoList, removeTodo]);

  return (
    <div className="flex flex-col gap-2 justify-between pr-10">
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Adicionar novo todo"
          className="border border-zinc-500 px-2 py-1 w-80"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={() => addTodo(todo)}>
          Add Todo
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="text-start px-2">Id</th>
            <th className="text-start px-2">Descrição</th>
            <th className="text-start px-2"></th>
          </tr>
        </thead>
        <tbody>{todosFilteredRenderMemo}</tbody>
      </table>
    </div>
  );
};
