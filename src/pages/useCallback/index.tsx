import { useCallback, useMemo, useState } from "react";

interface Todo {
  id: number;
  text: string;
}

export const UseCallbackPage = () => {
  const [todo, setTodo] = useState("");
  const [todoListData, setTodoListData] = useState<Todo[]>([]);



  const addNewTodo = useCallback(() => {
    setTodoListData((prevNewsTodos) => {
      const newTodo = {
        id: prevNewsTodos.length + 1,
        text: todo,
      };
      return [...prevNewsTodos, newTodo];
    });
    setTodo("");
  }, [todo]);

  const removeTodo = useCallback((index: number) => {
    setTodoListData((prevNewsTodos) => {
      const newTodoList = [...prevNewsTodos];
      newTodoList.splice(index, 1);
      return newTodoList;
    });
  }, []);

  const todosFilteredRenderMemo = useMemo(() => {
    console.log("TodoListComponentAways: rendering todo list");
    return todoListData.map((todo, index) => (
      <tr key={todo.id} className="">
        <td className="text-start px-2">{todo.id}</td>
        <td className="text-start px-2">{todo.text}</td>
        <td className="text-start px-2">
          <button onClick={() => removeTodo(index)}> Remover</button>
        </td>
      </tr>
    ));
  }, [todoListData, removeTodo]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-extrabold text-zinc-700 ">useCallback</h1>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            className="border border-zinc-500 px-2 py-1 w-80"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="button" onClick={addNewTodo}>
            Add Todo
          </button>
        </div>

        <div className="flex gap-10 justify-between pr-10">
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
      </div>
    </div>
  );
};
