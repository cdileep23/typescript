import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Button } from "./button";

type AddTodoProps = {
  OnAddTodos: (text: string) => void;
};

const AddTodo :React.FC<AddTodoProps>= ({ OnAddTodos }) => {
  const [text, setText] = useState<string>("");

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim() === "") return; 
    OnAddTodos(text);
    setText("");
  };

  return (
    <form onSubmit={addTodo} className="flex items-center gap-2">
      <div className="w-full max-w-sm flex items-center gap-3">
        <Label htmlFor="todo">Todo</Label>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          id="todo"
          placeholder="Enter a task"
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default AddTodo;
