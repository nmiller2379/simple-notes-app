"use client";

import { useState } from "react";

export default function Form({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      <form>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </form>
      <button onClick={() => onSubmit({ title: title, content: content })}>
        Submit
      </button>
    </>
  );
}
