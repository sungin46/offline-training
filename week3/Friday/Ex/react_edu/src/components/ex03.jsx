import React from "react";

const Greeting = ({ name }) => {
  return <h1>안녕하세요, {name}</h1>;
};

export const Practice03 = () => {
  return <Greeting name="홍성인" />;
};
