import { useMemo } from "react";
import { Todo } from "./todoListData";

interface TodoListComponentProps {
  todos: Todo[];
  status: "pendente" | "fazendo" | "conluido";
}

export const TodoListComponentMemoRender = ({
  todos,
  status,
}: TodoListComponentProps) => {
  const todosFilteredRenderMemo = useMemo(() => {
    
    const todosFiltered = todos.filter((todo) => todo.status === status);


    console.log("TodoListComponentMemo: rendering todo list", status);

    
    return todosFiltered.map((todo) => (
      <tr key={todo.id} className="">
        <td className="text-start px-2">{todo.id}</td>
        <td className="text-start px-2">{todo.text}</td>
        <td className="text-start px-2">{todo.status}</td>
      </tr>
    ));
  }, [todos, status]);

  return (
    <table>
      <thead>
        <tr>
          <th className="text-start px-2">Id</th>
          <th className="text-start px-2">Descrição</th>
          <th className="text-start px-2">Status</th>
        </tr>
      </thead>
      <tbody>{todosFilteredRenderMemo}</tbody>
    </table>
  );
};
