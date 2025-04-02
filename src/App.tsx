import "./global.css";
import { useState } from "react";
import { AddNote } from "./components/AddNote";
import { Note } from "./components/Note";
import { Modal } from "./components/Modal";
import { NoteForm } from "./components/NoteForm";
import { NoteData, NoteFormMode } from "./types";
import { useLocalStorageNotes } from "./hooks/useLocalStorageNotes";

export default function App() {
  const emptyFormData = {
    id: "",
    title: "",
    content: "",
    date: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState<NoteFormMode>("add");
  const [formData, setFormData] = useState<NoteData>(emptyFormData);

  const [notes, setNotes] = useLocalStorageNotes();

  const handleOpenModal = (mode: NoteFormMode, initialFormData: NoteData) => {
    setFormData(initialFormData);
    setFormMode(mode);
    setIsModalOpen(true);
  };

  const handleDeleteNote = (id: string) => {
    const deleteIndex = notes.findIndex((note) => note.id === id);
    setNotes([...notes.slice(0, deleteIndex), ...notes.slice(deleteIndex + 1)]);
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">Notes</h1>
      </header>
      <section className="notes-list">
        <AddNote onClick={() => handleOpenModal("add", emptyFormData)} />
        {notes.map((noteData) => (
          <Note
            key={noteData.id}
            noteData={noteData}
            onEditNote={() => handleOpenModal("edit", noteData)}
            onDeleteNote={() => handleDeleteNote(noteData.id)}
          />
        ))}
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
