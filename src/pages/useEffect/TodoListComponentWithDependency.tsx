import { useEffect, useMemo, useState } from "react";
import { getTodoListDataAsync, Todo } from "./todoListData";

interface TodoListComponentWithDependencyProps {
  newsTodos: Todo[];
}

export const TodoListComponentWithDependency = ({ newsTodos }: TodoListComponentWithDependencyProps) => {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    console.log("TodoListComponentAways: exec useEffect");
    getTodoListDataAsync().then((data) => {
      const allTodos = [...newsTodos, ...data];
      setTodoList(allTodos);
    });
  }, [newsTodos]);





  const todosFilteredRenderMemo = useMemo(() => {
    console.log("TodoListComponentAways: rendering todo list");
    return todoList.map((todo, index) => (
      <tr key={index} className="">
        <td className="text-start px-2">{todo.text}</td>
        <td className="text-start px-2">{todo.status}</td>
      </tr>
    ));
  }, [todoList]);

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
