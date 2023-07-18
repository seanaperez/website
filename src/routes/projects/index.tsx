import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  zod$,
  z,
} from "@builder.io/qwik-city";
import styles from "./projects.module.css";

interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string().trim().min(1),
  })
);

export default component$(() => {
  const list = useListLoader();

  return (
    <>
      <div class="container container-center">
        <h1>
          <span class="highlight">My</span> Projects
        </h1>
      </div>

      <div role="presentation" class="ellipsis"></div>
      <div class="container container-center">
        {list.value.length === 0 ? (
          <span class={styles.empty}>No items found</span>
        ) : (
          <ul class={styles.list}>
            {list.value.map((item, index) => (
              <li key={`items-${index}`}>{item.text}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "My Projects",
  meta: [
    {
      name: "description",
      content: "SeanPerez.net My Projects Sean Perez, About, Contact ",
    },
  ],
};
