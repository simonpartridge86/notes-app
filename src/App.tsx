import { AddNote } from "./components/AddNote";
import { Note } from "./components/Note";
import "./global.css";

function App() {
  const handleAddNote = () => {
    console.log("Add Note clicked");
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="page-title">Notes</h1>
      </header>
      <section className="notes-list">
        <AddNote onClick={handleAddNote} />
        {[0, 1, 2, 3, 4, 5].map(() => (
          <Note />
        ))}
      </section>
    </main>
  );
}

export default App;
