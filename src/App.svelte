<div class="main">
  <Header />

  <div id="about-me" class="section"> <AboutMe /> </div>
  <div id="about-me" class="section"> <Boxes type='Education' /> </div>
  <div id="about-me" class="section"> <Boxes type='Experience' /> </div>
  <div id="about-me" class="section"> <Boxes type='Projects' /> </div>
  <div id="about-me" class="section"> <Skills /> </div>


</div>

<script lang="ts">
  import Header from "./components/Header.svelte";
  import AboutMe from "./components/AboutMe.svelte";
  import Boxes from "./components/Boxes.svelte";
  import Skills from "./components/Skills.svelte";
</script>

<style>
  :root {
    --theme: #ed9074;
    --theme-2: #ffad6b;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: monospace;
  }
  :global(h3) {
    padding: 2px 2em;
    font-size: 2em;
    display: block;
    text-align: center;
    margin: auto;
    width: fit-content;
    box-shadow: inset 0 -8px 0px var(--theme-2);
    text-transform: uppercase;
    margin-bottom: 1em;
  }

  .main {
    width: 100%;
    margin-bottom: 100vh;
    display: inline-block;
  }

  .section {
    width: 100%;
    max-width: 960px;
    margin: 7em auto 4em;
  }


</style>