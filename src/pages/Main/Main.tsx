import React from "react";
import Body from "./Body";
import Header from "pages/Main/Header";
import Input from "pages/components/Input";

const Main = () => {
  return (
    <div className="">
      <section>
        <Header />
        <Body />
      </section>
      <Input placeholder="New Note" />
    </div>
  );
};

export default Main;
