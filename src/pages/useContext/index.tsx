import { TodoCountComponent } from "./TodoCountComponent";
import { TodoProvider } from "./TodoContext";
import { TodoTableComponent } from "./TodoTableComponent";
import { TodoMediaComponent } from "./TodoMediaComponent";

export const UseContextPage = () => {
  return (
    <TodoProvider>
      <h1 className="text-2xl font-extrabold text-zinc-700 ">useContext</h1>
      <div className="flex flex-col gap-3">
        <TodoCountComponent />
        <TodoMediaComponent />
        <TodoTableComponent />
      </div>
    </TodoProvider>
  );
};
