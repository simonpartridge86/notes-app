import "./global.css";
import { useState } from "react";
import { AddNote } from "./components/AddNote";
import { Note } from "./components/Note";
import { Modal } from "./components/Modal";
import { NoteForm } from "./components/NoteForm";
import { NoteData, NoteFormMode } from "./types";

const mockNotes: NoteData[] = [
  {
    id: "1",
    title: "Note 1",
    content: "This is the content of note 1.",
    date: "2023-10-01",
  },
  {
    id: "2",
    title: "Note 2",
    content: "This is the content of note 2.",
    date: "2023-10-02",
  },
  {
    id: "3",
    title: "Note 3",
    content: "This is the content of note 3.",
    date: "2023-10-03",
  },
];

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

  const handleOpenModal = (mode: NoteFormMode, initialFormData: NoteData) => {
    setFormData(initialFormData);
    setFormMode(mode);
    setIsModalOpen(true);
  };

  const handleDeleteNote = (noteId: string) => {
    console.log("Delete Note clicked", noteId);
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="page-title">Notes</h1>
      </header>
      <section className="notes-list">
        <AddNote onClick={() => handleOpenModal("add", emptyFormData)} />
        {mockNotes.map((noteData) => (
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
          formData={formData}
          formMode={formMode}
          setFormData={setFormData}
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </main>
  );
}
