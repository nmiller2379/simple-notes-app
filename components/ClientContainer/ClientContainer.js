"use client";
import Form from "../Form/Form";
import List from "../List/List";
import { useState } from "react";

export default function ClientContainer({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = async (note) => {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    if (!response.ok) {
      throw new Error("Failed to add note");
    }
    const newNote = await response.json();
    setNotes([...notes, newNote]);
  };
  return (
    <div>
      <Form onSubmit={addNote} />
      <List notes={notes} /> 
    </div>
  );
}
