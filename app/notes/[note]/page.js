export default function Note({ params }) {
  return (
    <div>
      <h1>{params.note}</h1>
      <p>
        Content for each individual note goes here -- There will also be a
        delete button and an edit button, allowing the user to delete or update
        the note.
      </p>
    </div>
  );
}
