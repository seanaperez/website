import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <>
      <Hero />
      <a id="about">
      <Starter />
      </a>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-flex">
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Project Examples
            </div>
            <p>
              Nothing here yet...
              <a href="/projects"> Projects</a>.
            </p>
          </Infobox>

        <div id="contact">
          <Infobox>
            <div q:slot="title" class="icon icon-community">
              Ways to Connect
            </div>
            <ul>
              <li>
                <span>Follow </span>
                <a href="https://twitter.com/serbyxp" target="_blank">
                  @SerbyXP
                </a>
                <span> on Twitter</span>
              </li>
              <li>
                <span>Follow </span>
                <a href="https://www.threads.net/@seanaperez" target="_blank">
                  @SeanAPerez
                </a>
                <span> on Threads</span>
              </li>
              <li>
                <span>Open issues and contribute on </span>
                <a href="https://github.com/seanaperez/" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <span>Email </span>
                <a href="mailto:contact@seanperez.net">
                  contact@seanperez.net
                </a>
              </li>
            </ul>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
