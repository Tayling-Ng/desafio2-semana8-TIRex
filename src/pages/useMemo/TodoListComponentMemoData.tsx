import { useMemo } from "react";
import { Todo } from "./todoListData";

interface TodoListComponentProps {
  todos: Todo[];
  status: "pendente" | "fazendo" | "conluido";
}

export const TodoListComponentMemoData = ({
  todos,
  status,
}: TodoListComponentProps) => {
  const filterTodos = (todos: Todo[], status: string) => {
    const filteredTodos = todos.filter((todo) => todo.status === status);
    console.log("TodoListComponent: filtering todos by status", status);
    return filteredTodos;
  };
  

  const todosFiltered = useMemo(() => {
    return filterTodos(todos, status);
  }, [todos, status]);


  const render = () => {
    console.log('TodoListComponent: renderizando elemento')
    return todosFiltered.map((todo) => (
      <tr key={todo.id} className="">
        <td className="text-start px-2">{todo.id}</td>
        <td className="text-start px-2">{todo.text}</td>
        <td className="text-start px-2">{todo.status}</td>
      </tr>
    ))
  }


  return (
    <table>
      <thead>
        <tr>
          <th className="text-start px-2">Id</th>
          <th className="text-start px-2">Descrição</th>
          <th className="text-start px-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {render()}
      </tbody>
    </table>
  );
};
