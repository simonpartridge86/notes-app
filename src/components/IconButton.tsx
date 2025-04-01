import { JSX } from "react";

type IconButtonProps = {
  children: JSX.Element;
  onClick: () => void;
  label: string;
};

export const IconButton = ({ children, onClick, label }: IconButtonProps) => {
  return (
    <div
      className="icon-button"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }}
      aria-label={label}
    >
      {children}
    </div>
  );
};
