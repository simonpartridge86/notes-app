import { AddNote } from "./components/AddNote";
import { Note } from "./components/Note";
import "./global.css";

const mockNotes = [
  {
    id: "1",
    title: "Note 1",
    content: "This is the content of note 1.",
    dueDate: "2023-10-01",
  },
  {
    id: "2",
    title: "Note 2",
    content: "This is the content of note 2.",
    dueDate: "2023-10-02",
  },
  {
    id: "3",
    title: "Note 3",
    content: "This is the content of note 3.",
    dueDate: "2023-10-03",
  },
];

function App() {
  const handleAddNote = () => {
    console.log("Add Note clicked");
  };

  const handleEditNote = (noteId: string) => {
    console.log("Edit Note clicked", noteId);
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
        <AddNote onClick={handleAddNote} />
        {mockNotes.map((note) => (
          <Note
            title={note.title}
            content={note.content}
            dueDate={note.dueDate}
            onEditNote={() => handleEditNote(note.id)}
            onDeleteNote={() => handleDeleteNote(note.id)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
