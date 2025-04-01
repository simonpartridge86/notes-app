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
      <PlusIcon />
      <p>Add New Note</p>
    </div>
  );
};
