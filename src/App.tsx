import { useState } from "react";
import AddTodo from "./components/ui/AddTodo";
import TodoList from "./components/ui/TodoList";

interface Todo {
  id: string;
  text: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const OnAddTodos = (text: string) => {
    const id = Math.random().toString(); 
    setTodos((prevTodos) => [...prevTodos, { id, text }]);
  };

  return (
    <main>
      <AddTodo OnAddTodos={OnAddTodos} />
      <TodoList items={todos} />
    </main>
  );
};

export default App;
