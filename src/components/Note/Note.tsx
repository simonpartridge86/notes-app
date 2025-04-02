import classes from "./Note.module.css";
import { NoteData } from "../../types";
import { IconButton } from "../IconButton/IconButton";
import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";

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
    <div className={classes.note}>
      <h3 className={classes["note-title"]}>{noteData.title}</h3>
      <div className={classes["note-content"]}>{noteData.content}</div>
      <div className={classes["note-footer"]}>
        <div className={classes["note-date-section"]}>
          {isOverdue ? (
            <span className={classes["note-overdue"]}>
              Overdue: {formattedDate}
            </span>
          ) : (
            <span>Due: {formattedDate}</span>
          )}
        </div>
        <div className={classes["note-actions"]}>
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
