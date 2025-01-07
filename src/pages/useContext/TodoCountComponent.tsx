import { useTodoContext } from "./TodoContext";

export const TodoCountComponent = () => {
  const { todoList } = useTodoContext();

  return (
    <div className="border rounded-md border-zinc-700 p-2 w-fit">
      <h1>Existem {todoList.length} todos na lista</h1>
    </div>
  );
};
