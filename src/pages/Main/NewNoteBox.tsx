import Input from "pages/components/Input";
import Textarea from "pages/components/Textarea";
import React from "react";

const NewNoteBox = () => {
  const createNewNote = () => {
    console.log("create new to do");
    // clear input boxs
    // focus out
    //
  };

  const onHandleKeyDown = (
    _e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (_e.code) {
      case "Enter":
        createNewNote();
        break;

      default:
        break;
    }
  };

  return (
    <section className="flex flex-col py-4 px-8 bg-button-bg rounded-lg">
      <Input
        className="bg-button-bg leading-6 text-base font-bold mb-2"
        defaultDesign={false}
        placeholder="New Note"
        onKeyDown={onHandleKeyDown}
      />
      <Textarea
        placeholder="contents.."
        className="max-h-44 overflow-auto scroll-m-4"
        role="textbox"
        contentEditable
        onKeyDown={onHandleKeyDown}
      />
    </section>
  );
};

export default NewNoteBox;
