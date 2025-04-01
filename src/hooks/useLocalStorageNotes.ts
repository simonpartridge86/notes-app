import { useState, useEffect } from "react";
import { NoteData } from "../types";

export function useLocalStorageNotes() {
  const [notes, setNotes] = useState<NoteData[]>(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return [notes, setNotes] as const;
}
