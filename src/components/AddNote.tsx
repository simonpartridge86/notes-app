import { PlusIcon } from "./icons/PlusIcon";

type AddNoteProps = {
  onClick: () => void;
};

export const AddNote = ({ onClick }: AddNoteProps) => {
  return (
    <div
      className="add-note"
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
      <span className="add-note-icon">
        <PlusIcon />
      </span>
      <h3>Add New Note</h3>
    </div>
  );
};
