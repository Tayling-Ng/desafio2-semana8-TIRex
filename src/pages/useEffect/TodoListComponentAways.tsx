import { useEffect, useMemo, useState } from "react";
import { Todo, getTodoListDataAsync } from "./todoListData";

interface TodoListComponentAways {
  newsTodos: Todo[];
  count: number;
}

export const TodoListComponentAways = ({
  newsTodos,
  count,
}: TodoListComponentAways) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    console.log("TodoListComponentAways: exec useEffect");

    getTodoListDataAsync().then((data) => {
      const allTodos = [...newsTodos, ...data];
      setTodoList(allTodos);
      setTodoList(data);
    });
  });

  const todosFilteredRenderMemo = useMemo(() => {
    console.log("TodoListComponentAways: rendering todo list");
    return todoList.map((todo) => (
      <tr key={todo.id} className="">
        <td className="text-start px-2">{todo.id}</td>
        <td className="text-start px-2">{todo.text}</td>
        <td className="text-start px-2">{todo.status}</td>
      </tr>
    ));
  }, [todoList]);

  return (
    <>
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
      <span>{count}</span>
    </>
  );
};
