import { component$, $, useOnWindow, useSignal } from "@builder.io/qwik";
import styles from "./next-steps.module.css";

export const GETTING_STARTED_STEPS = [
  {
    message:
      "This is just <b>My</b> landing page for <b>My</b> Projects ",
    hint: 'My web3 address is <code>seanperez.eth</code>',
  },
  {
    message:
      "<b>If</b> your looking around and wonder why not much is going on here...",
    hint: 'Have a look at <a href="https://github.com/seanaperez/" target="_blank">this page</a> to see any public code that I may have availble...',
  },
  {
    message:
      "I really <b>don't</b> do Social Media, but you can find whatever I might have in the links below.",
    hint: "<a href='https://twitter.com/serbyxp' target='_blank'>@serbyxp on twitter</a> you could also find me <a href='https://www.threads.net/@seanaperez' target='_blank'>@seanaperez on threads</a> </br>feel free to follow me!",
  },
  {
    message: "I do <code>Web2</code> stuff but mainly focused on <code>Web3</code> combining the two to create interactive <code>Dapps</code> which include coding the <b>NFTs</b> contracts and generating the frontend for user interactivity",
    hint: 'I have coded and designed... hardware, software, infrastructure, planning, implmentation, management, and anything you can think of. ✨',
  },
  {
    message: "<b>If</b> you need to contact me I suggest emailing me @ <a href='mailto:contact@seanperez.net'>contact@seanperez.net</a>. 🐰",
    hint: "If you need further info on any of my non personal projects, or would like to inquire about my freelance availability please feel free to contact me!",
  },
  {
    message: "Time to have a look <b>Around</b>",
    hint: 'if you are interested or need access to restricted areas in this domain you will need to get in touch with me. 🎉',
  },
];

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Alt") {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div class="container container-purple container-center">
      <h2>
        what's this
        <br />
        <span class="highlight">all about</span>?
      </h2>
      <div class={styles.gettingstarted}>
        <div
          class={styles.intro}
          dangerouslySetInnerHTML={
            GETTING_STARTED_STEPS[gettingStartedStep.value].message
          }
        />
        <span
          class={styles.hint}
          dangerouslySetInnerHTML={
            GETTING_STARTED_STEPS[gettingStartedStep.value].hint
          }
        />
      </div>
      {gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (
        <button class="button-dark" onClick$={() => gettingStartedStep.value++}>
          Continue to Step {gettingStartedStep.value + 2} of{" "}
          {GETTING_STARTED_STEPS.length}
        </button>
      ) : (
        <button
          class="button-dark"
          onClick$={() => (gettingStartedStep.value = 0)}
        >
          Re-Start
        </button>
      )}
    </div>
  );
});
