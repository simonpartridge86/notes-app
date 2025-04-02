import { NoteData } from "../types";
import { IconButton } from "./IconButton";
import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";

type NoteProps = {
  noteData: NoteData;
  onEditNote: () => void;
  onDeleteNote: () => void;
};

export const Note = ({ noteData, onEditNote, onDeleteNote }: NoteProps) => {
  const today = new Date();
  const noteDate = new Date(noteData.date);
  const isOverdue = noteDate < today;

  const formattedDate = noteDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="note">
      <h3 className="note-title">{noteData.title}</h3>
      <div className="note-content">{noteData.content}</div>
      <div className="note-footer">
        <div className="note-date-section">
          {isOverdue ? (
            <span className="note-overdue">Overdue: {formattedDate}</span>
          ) : (
            <span>Due: {formattedDate}</span>
          )}
        </div>
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
