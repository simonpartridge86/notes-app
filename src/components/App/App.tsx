import classes from "./App.module.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { NoteForm } from "../NoteForm/NoteForm";
import { NoteData, NoteFormMode } from "../../types";
import { useLocalStorageNotes } from "../../hooks/useLocalStorageNotes";
import { flushSync } from "react-dom";
import { Header } from "../Header/Header";
import { NotesGrid } from "../NotesGrid/NotesGrid";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<NoteFormMode>("add");
  const [formData, setFormData] = useState<NoteData>({
    id: "",
    title: "",
    content: "",
    date: "",
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [notes, setNotes] = useLocalStorageNotes();

  const handleOpenModal = (mode: NoteFormMode, initialFormData: NoteData) => {
    setFormData(initialFormData);
    setFormMode(mode);
    document.startViewTransition(() => {
      flushSync(() => {
        setIsModalOpen(true);
      });
    });
  };

  return (
    <main className={classes.app} data-theme={darkMode ? "dark" : ""}>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <NotesGrid
        searchQuery={searchQuery}
        notes={notes}
        setNotes={setNotes}
        handleOpenModal={handleOpenModal}
      />
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
