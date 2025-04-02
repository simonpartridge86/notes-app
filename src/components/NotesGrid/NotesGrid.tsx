import classes from "./NotesGrid.module.css";
import { NoteData, NoteFormMode } from "../../types";
import { AddNoteButton } from "../AddNoteButton/AddNoteButton";
import { Note } from "../Note/Note";
import { useMemo } from "react";

type NotesGridProps = {
  searchQuery: string;
  notes: NoteData[];
  setNotes: React.Dispatch<React.SetStateAction<NoteData[]>>;
  handleOpenModal: (mode: NoteFormMode, initialFormData: NoteData) => void;
};

export const NotesGrid = ({
  searchQuery,
  notes,
  setNotes,
  handleOpenModal,
}: NotesGridProps) => {
  const filteredNotes = useMemo(() => {
    if (searchQuery) {
      const searchValue = searchQuery.toLowerCase().trim();
      const filteredData = notes?.filter(
        ({ title, content }) =>
          title.toLowerCase().includes(searchValue) ||
          content.toLowerCase().includes(searchValue)
      );
      return filteredData;
    }

    return notes;
  }, [notes, searchQuery]);

  const handleDeleteNote = (id: string) => {
    const deleteIndex = notes.findIndex((note) => note.id === id);
    setNotes([...notes.slice(0, deleteIndex), ...notes.slice(deleteIndex + 1)]);
  };

  return (
    <section className={classes["notes-grid"]}>
      <AddNoteButton
        onClick={() =>
          handleOpenModal("add", {
            id: "",
            title: "",
            content: "",
            date: "",
          })
        }
      />
      {filteredNotes.map((noteData) => (
        <Note
          key={noteData.id}
          noteData={noteData}
          onEditNote={() => handleOpenModal("edit", noteData)}
          onDeleteNote={() => handleDeleteNote(noteData.id)}
        />
      ))}
      {searchQuery && filteredNotes.length === 0 && (
        <div className={classes["no-notes-text"]}>
          No notes match the current search
        </div>
      )}
    </section>
  );
};
