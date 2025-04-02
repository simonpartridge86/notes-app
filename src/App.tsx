import "./global.css";
import { useMemo, useState } from "react";
import { AddNote } from "./components/AddNote";
import { Note } from "./components/Note";
import { Modal } from "./components/Modal";
import { NoteForm } from "./components/NoteForm";
import { NoteData, NoteFormMode } from "./types";
import { useLocalStorageNotes } from "./hooks/useLocalStorageNotes";
import { flushSync } from "react-dom";
import { AppHeader } from "./components/AppHeader";

export default function App() {
  const emptyFormData = {
    id: "",
    title: "",
    content: "",
    date: "",
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<NoteFormMode>("add");
  const [formData, setFormData] = useState<NoteData>(emptyFormData);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [notes, setNotes] = useLocalStorageNotes();

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

  const handleOpenModal = (mode: NoteFormMode, initialFormData: NoteData) => {
    setFormData(initialFormData);
    setFormMode(mode);
    document.startViewTransition(() => {
      flushSync(() => {
        setIsModalOpen(true);
      });
    });
  };

  const handleDeleteNote = (id: string) => {
    const deleteIndex = notes.findIndex((note) => note.id === id);
    setNotes([...notes.slice(0, deleteIndex), ...notes.slice(deleteIndex + 1)]);
  };

  return (
    <main className="app-container">
      <AppHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className="notes-grid">
        <AddNote onClick={() => handleOpenModal("add", emptyFormData)} />
        {filteredNotes.map((noteData) => (
          <Note
            key={noteData.id}
            noteData={noteData}
            onEditNote={() => handleOpenModal("edit", noteData)}
            onDeleteNote={() => handleDeleteNote(noteData.id)}
          />
        ))}
        {searchQuery && filteredNotes.length === 0 && (
          <div className="no-notes-text">No notes match the current search</div>
        )}
      </section>
      <Modal
        title={formMode === "add" ? "Add Note" : "Edit Note"}
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <NoteForm
          notes={notes}
          setNotes={setNotes}
          formData={formData}
          formMode={formMode}
          setFormData={setFormData}
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </main>
  );
}
