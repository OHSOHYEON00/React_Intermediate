import React from "react";

interface CompletedProps {
  CompletedNum?: number;
}

const Completed = ({ CompletedNum = 0 }: CompletedProps) => {
  return (
    <p className="text-button-text text-s mt-5">{CompletedNum} Completed</p>
  );
};

export default Completed;
