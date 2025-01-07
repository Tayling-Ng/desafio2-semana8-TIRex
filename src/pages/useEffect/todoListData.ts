export interface Todo {
  id: number;
  text: string;
  status: string;
}

export const getTodoListDataAsync = async () => {
  console.log("getTodoListDataAsync: fetching todo list data");
  return [
    { id: 1, text: "Comprar mantimentos", status: "pendente" },
    { id: 2, text: "Limpar a casa", status: "fazendo" },
    { id: 3, text: "Estudar para o exame", status: "concluido" },
    { id: 4, text: "Pagar contas", status: "pendente" },
    { id: 5, text: "Fazer exercícios", status: "fazendo" },
  ];
};
