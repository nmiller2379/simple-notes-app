import ClientContainer from "@/components/ClientContainer/ClientContainer";
import Form from "@/components/Form/Form";
import styles from "./page.module.css";

async function fetchNotes() {
  const response = await fetch("http://localhost:3000/api/notes", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
}

export default async function Home() {
  const initialNotes = await fetchNotes();
  return (
    <div className={styles.page}>
      <h1>Add a note</h1>
      <ClientContainer initialNotes={initialNotes} />
    </div>
  );
}
