import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
} from "@builder.io/qwik-city";


export default component$(() => {

  return (
    <>
      <div class="container container-center">
        <h1>
          Contact<span class="highlight"> Sean</span>
        </h1>
      </div>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center">
        
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: " Contact Sean Perez",
  meta: [
    {
      name: "description",
      content: "SeanPerez.net Contact Sean Perez, About, Projects ",
    },
  ],
};
