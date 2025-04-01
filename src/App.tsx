import "./global.css";
import { useState } from "react";
import { AddNote } from "./components/AddNote";
import { Note } from "./components/Note";
import { Modal } from "./components/Modal";
import { NoteForm } from "./components/NoteForm";
import { NoteData } from "./types";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<NoteData>({
    id: "",
    title: "",
    content: "",
    date: "",
  });

  const handleAddNote = () => {
    console.log("Add Note clicked");
    setIsModalOpen(true);
  };

  const handleEditNote = (noteData: NoteData) => {
    console.log("Edit Note clicked", noteData.id);
    setIsModalOpen(true);
  };

  const handleDeleteNote = (noteData: NoteData) => {
    console.log("Delete Note clicked", noteData.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      id: "",
      title: "",
      content: "",
      date: "",
    });
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="page-title">Notes</h1>
      </header>
      <section className="notes-list">
        <AddNote onClick={handleAddNote} />
        {mockNotes.map((noteData) => (
          <Note
            key={noteData.id}
            noteData={noteData}
            onEditNote={() => handleEditNote(noteData)}
            onDeleteNote={() => handleDeleteNote(noteData)}
          />
        ))}
      </section>
      <Modal
        title="Modal Title"
        isModalOpen={isModalOpen}
        closeModal={handleCloseModal}
      >
        <NoteForm
          formData={formData}
          setFormData={setFormData}
          closeModal={handleCloseModal}
        />
      </Modal>
    </main>
  );
}
