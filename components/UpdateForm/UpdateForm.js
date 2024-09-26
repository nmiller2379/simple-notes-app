"use client";

import { useState } from "react";

export default function UpdateForm({ note, handleUpdate }) {
  const [updateTitle, setUpdateTitle] = useState(note.title);
  const [updateContent, setUpdateContent] = useState(note.content);
  return (
    <form>
      <input
        type="text"
        value={updateTitle}
        onChange={(e) => setUpdateTitle(e.target.value)}
      />
      <textarea
        value={updateContent}
        onChange={(e) => setUpdateContent(e.target.value)}
      />
      <button
        onClick={() =>
          handleUpdate({ title: updateTitle, content: updateContent })
        }
      >
        Save
      </button>
    </form>
  );
}
