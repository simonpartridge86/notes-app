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
  return (
    <div className="note">
      <h3 className="note-title">{noteData.title}</h3>
      <p className="note-content">{noteData.content}</p>
      <div className="note-footer">
        <p className="note-date">{noteData.date}</p>
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
