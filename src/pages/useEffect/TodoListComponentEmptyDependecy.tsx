import { useEffect, useMemo, useState } from "react";
import { getTodoListDataAsync, Todo } from "./todoListData";

interface TodoListComponentEmptyDependecy {
  newsTodos: Todo[];
}




export const TodoListComponentEmptyDependecy = ({ newsTodos }: TodoListComponentEmptyDependecy) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  
  useEffect(() => {
    console.log("TodoListComponentAways: exec useEffect");
    getTodoListDataAsync().then((data) => {
      const allTodos = [...newsTodos, ...data];
      setTodoList(allTodos);
      setTodoList(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
