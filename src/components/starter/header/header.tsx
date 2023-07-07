import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="home">
            <h2>Sean<b class={styles.highlight}> Perez</b></h2>
          </a>
        </div>
        <ul>
          <li>
            <a
              href="/#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
