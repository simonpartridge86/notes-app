import classes from "./AddNoteButton.module.css";
import { PlusIcon } from "../icons/PlusIcon";

type AddNoteButtonProps = {
  onClick: () => void;
};

export const AddNoteButton = ({ onClick }: AddNoteButtonProps) => {
  return (
    <div
      className={classes["add-note-button"]}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }}
      aria-label="Add New Note"
    >
      <span className={classes["add-note-icon"]}>
        <PlusIcon />
      </span>
      <h3>Add New Note</h3>
    </div>
  );
};
