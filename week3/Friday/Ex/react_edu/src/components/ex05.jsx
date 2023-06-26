import React from "react";

const TodoList = (props) => {
  console.log(props);
  const todos = props.todos;
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
const Practice05 = () => {
  const todos = [
    { id: 1, text: "할 일 목록1" },
    { id: 2, text: "할 일 목록2" },
    { id: 3, text: "할 일 목록3" },
    { id: 4, text: "할 일 목록4" },
    { id: 5, text: "할 일 목록5" },
  ];
  //   const anotherTodos = [
  //     { id: 1, text: "할 일 목록1" },
  //     { id: 2, text: "할 일 목록2" },
  //     { id: 3, text: "할 일 목록3" },
  //     { id: 4, text: "할 일 목록4" },
  //     { id: 5, text: "할 일 목록5" },
  //   ];
  return <TodoList todos={todos} />;
};

export default Practice05;
