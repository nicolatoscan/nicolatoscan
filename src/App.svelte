<div class="main">
  <Header />

  <div id="about-me" class="section">
    <AboutMe />
  </div>


</div>

<script lang="ts">
  import Header from "./components/Header.svelte";
  import AboutMe from "./components/AboutMe.svelte";
</script>

<style>
  :root {
    --theme: #ed9074;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: monospace;
  }
  :global(h3) {
    padding: 0 1em;
    margin-left: 2em;
    font-size: 1.7em;
    display: inline;
    box-shadow: inset 0 -8px 0px var(--theme);
  }

  .main {
    width: 100%;
    margin-bottom: 100vh;
    display: inline-block;
  }

  .section {
    width: 100%;
    max-width: 960px;
    margin: 5em auto;
  }


</style>