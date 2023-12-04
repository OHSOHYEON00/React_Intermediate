import React from "react";
import TodoList from "./TodoList";
import Header from "pages/components/Header";
import Input from "pages/components/Input";

const Main = () => {
  return (
    <section>
      <Header />
      <TodoList />
      <Input />
    </section>
  );
};

export default Main;
