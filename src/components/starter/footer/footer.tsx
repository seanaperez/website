import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {

  return (
    <footer>
      <div class="container">
        <Link href="https://seanperez.net/" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by Sean Perez</span>
          <span class={styles.spacer}>|</span>
          <span>2024</span>
        </Link>
      </div>
    </footer>
  );
});
