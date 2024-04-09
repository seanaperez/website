import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";
import { EMAIL, GITHUB_USER, THREADS, TWITTER } from "~/constants";

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class=" icon-apps">
            Project Examples
          </div>
          <p>
            Nothing here yet...
            <Link href="/projects"> Projects</Link>.
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
                <Link href={`https://twitter.com/${TWITTER}`} target="_blank">
                  @SerbyXP
                </Link>
                <span> on Twitter</span>
              </li>
              <li>
                <span>Follow </span>
                <Link href={`https://www.threads.net/${THREADS ?? '@seanaperez'}`} target="_blank">
                  @SeanAPerez
                </Link>
                <span> on Threads</span>
              </li>
              <li>
                <span>Open issues and contribute on </span>
                <Link href={`https://github.com/${GITHUB_USER ?? 'seanaperez'}/`} target="_blank">
                  GitHub
                </Link>
              </li>
              <li>
                <span>Email </span>
                <Link href={`mailto:${EMAIL ?? 'contact@seanperez.net'}`}>
                  {EMAIL ?? 'contact@seanperez.net'}
                </Link>
              </li>
            </ul>
          </Infobox>
        </div>
      </div >
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to SeanPerez.net",
  meta: [
    {
      name: "description",
      content: "SeanPerez.net About Sean Perez, Projects. Contacts ",
    },
  ],
};
