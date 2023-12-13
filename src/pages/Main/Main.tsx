import React from "react";
import Body from "./Body";
import Header from "pages/Main/Header";
import NewNoteBox from "./NewNoteBox";

const Main = () => {
  return (
    <div className="">
      <section>
        <Header />
        <Body />
      </section>
      <NewNoteBox />
    </div>
  );
};

export default Main;
