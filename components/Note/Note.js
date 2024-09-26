"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UpdateForm from "../UpdateForm/UpdateForm";

export default function Note({ singleNote }) {
  const [note, setNote] = useState(singleNote);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/notes/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: note._id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      // Navigate to the home page after successful deletion
      router.push("/");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleUpdate = async (updatedNote) => {
    try {
      const response = await fetch(`/api/notes/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: note._id, ...updatedNote }),
      });

      if (!response.ok) {
        throw new Error("Failed to update note");
      }

      const data = await response.json();

      setIsEditing(false);
      setNote(data);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(note.date));

  return (
    <div>
      <h1>{note.title}</h1>
      <h3>Date Created: {formattedDate}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Delete Note</button>
      <button onClick={handleEdit}>Edit Note</button>
      {isEditing && <UpdateForm note={note} handleUpdate={handleUpdate} />}
    </div>
  );
}
