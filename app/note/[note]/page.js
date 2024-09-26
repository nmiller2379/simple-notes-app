import Note from "@/components/Note/Note";

async function fetchNote({ params }) {
  const response = await fetch(
    `http://localhost:3000/api/notes/${params.note}`,
    {
      cache: "no-cache",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch note");
  }
  return response.json();
}

export default async function NotePage({ params }) {
  const note = await fetchNote({ params });
  return <Note singleNote={note} />;
}
