export type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoProp = {
  todo: Todos;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};
