import React from "react";

//components
import TodoItem from "./TodoItem";

//interface
import { ITodo } from "../types/data";

interface ITodoList {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          removeTodo={props.removeTodo}
          toggleTodo={props.toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
