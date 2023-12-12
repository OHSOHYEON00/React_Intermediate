import Completed from "pages/Main/Completed";
import React from "react";
import HideButton from "./HideButton";
import TodoList from "./TodoList";

const MainBody = () => {
  return (
    <section className="py-5 mt-5 mb-16">
      <section
        className="
        flex justify-between
        items-start 
        flex-col-reverse
        md:flex-row
        md:items-end 
        "
      >
        <Completed />
        <HideButton />
      </section>
      <TodoList />
    </section>
  );
};

export default MainBody;
