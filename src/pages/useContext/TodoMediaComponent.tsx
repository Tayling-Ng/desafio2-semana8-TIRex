import { useTodoContext } from "./TodoContext";

export const TodoMediaComponent = () => {
  const { todoList } = useTodoContext();

  const media = todoList.reduce((acc, todo) => acc + todo.id, 0) / todoList.length;

  return (
    <div className="border rounded-md border-zinc-700 p-2 w-fit">
      <h1>A média de todos é de {media}</h1>
    </div>
  );
};
