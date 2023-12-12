import Button from "pages/components/Button";
import React from "react";
import NoEyeSvg from "assets/noeye.svg";

interface HideButtonProps {}

const HideButton = ({}: HideButtonProps) => {
  return (
    <Button className="flex items-center">
      <img src={NoEyeSvg} className="mr-3" />
      <p>Hide Completed</p>
    </Button>
  );
};

export default HideButton;
