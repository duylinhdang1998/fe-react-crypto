import { Button } from "antd";
import React from "react";

interface IVoteTypeButtonProps {
  iconSrc: React.ReactElement;
  color: string;
  text: string;
}

const VoteTypeButton = (props: IVoteTypeButtonProps): JSX.Element => {
  const { iconSrc, color, text } = props;

  return (
    <Button
      type="ghost"
      className="rounded-full"
      style={{
        color,
        borderColor: color,
        padding: "0 12px",
        height: 36,
      }}
    >
      <div className="flex items-center justify-center gap-1">
        {iconSrc}<span>{text}</span>
      </div>
    </Button>
  );
};

export default VoteTypeButton;
