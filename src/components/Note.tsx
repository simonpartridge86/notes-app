import { IconButton } from "./IconButton";
import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";

type NoteProps = {
  title: string;
  content: string;
  dueDate: string;
  onEditNote: () => void;
  onDeleteNote: () => void;
};

export const Note = ({
  title,
  content,
  dueDate,
  onEditNote,
  onDeleteNote,
}: NoteProps) => {
  return (
    <div className="note">
      <h3 className="note-title">{title}</h3>
      <p className="note-content">{content}</p>
      <div className="note-footer">
        <p className="note-date">{dueDate}</p>
        <div className="note-actions">
          <IconButton onClick={onEditNote} label="Edit Note">
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDeleteNote} label="Delete Note">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
