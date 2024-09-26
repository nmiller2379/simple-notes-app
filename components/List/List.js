"use client";
import Link from "next/link";

export default function List({ notes }) {
  return (
    <div>
      <h3>Current Notes</h3>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <Link href={`/note/${note._id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
