import React from "react";

const List = () => {
  const todos = [
    { id: 1, text: "Drinking Water" },
    { id: 2, text: "Taking a break" },
    { id: 3, text: "Watching TV Show" },
    { id: 4, text: "Meeting" },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
};

export default List;
