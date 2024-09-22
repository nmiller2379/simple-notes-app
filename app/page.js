import Form from "../components/form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Add a note</h1>
      
      <p>Also, a form will go here to input a note</p>
    </div>
  );
}
