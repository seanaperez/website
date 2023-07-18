import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

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
            <Link
              href="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
