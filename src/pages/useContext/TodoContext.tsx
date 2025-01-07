import { createContext, useState, useCallback, useContext } from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoContextProps {
  todoList: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
}


// criação do contexto
const TodoContext = createContext<TodoContextProps | undefined>(undefined);


// utilização desses
// eslint-disable-next-line react-refresh/only-export-components
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};


// criação provedor

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {


  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    setTodoList((prevTodos) => {
      const newTodo: Todo = {
        id: prevTodos.length + 1,
        text,
      };

      return [...prevTodos, newTodo];
    });
  }, []);

  const removeTodo = useCallback((index: number) => {
    setTodoList((prevNewsTodos) => {
      const newTodoList = [...prevNewsTodos];
      newTodoList.splice(index, 1);
      return newTodoList;
    });
  }, []);

  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
