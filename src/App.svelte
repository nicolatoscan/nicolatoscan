<div class="{darkTheme ? 'main dark' : 'main'}">
  <Header />

  <div class="theme-switch" on:click={changeTheme}>
    { #if darkTheme }<WeatherSunny color='#ed9074' size='32' />{/if}
    { #if !darkTheme }<WeatherNight color='#ed9074' size='32' />{/if}
  </div>


  <div id="about-me" class="section"> <About /> </div>
  <div id="education" class="section"> <Boxes type='Education' /> </div>
  <div id="experiences" class="section"> <Boxes type='Experience' /> </div>
  <div id="projects" class="section"> <Boxes type='Projects' /> </div>
  <div id="skills" class="section"> <Skills /> </div>
  <div id="certifications" class="section"> <Certificates /> </div>
  <div id="else" class="section"> <Else /> </div>



</div>

<script lang="ts">
  import Header from "./components/Header.svelte";
  import About from "./components/About.svelte";
  import Boxes from "./components/Boxes.svelte";
  import Skills from "./components/Skills.svelte";
  import Else from "./components/Else.svelte";
  import Certificates from "./components/Certificates.svelte";

  import WeatherNight from "svelte-material-icons/WeatherNight.svelte";
  import WeatherSunny from "svelte-material-icons/WeatherSunny.svelte";

  let darkTheme = localStorage.getItem("darkTheme") === "true";
  function changeTheme() {
    darkTheme = !darkTheme;
    localStorage.setItem("darkTheme", darkTheme ? "true" : "false");
  }

</script>

<style>

  .dark {
    color: white;
    background-color: #212121;
  }

  :root {
    --theme: #ed9074;
    --theme-2: #ffad6b;
  }

  :global(::selection) {
      background: var(--theme-2);
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
  :global(.show-more) {
    color: var(--theme);
    cursor: pointer;
  }

  .theme-switch {
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
    user-select: none;
  }
  .main {
    width: 100%;
    padding-bottom: 10vh;
    display: inline-block;
  }

  .section {
    width: 95%;
    max-width: 960px;
    margin: 7em auto 4em;
  }


</style>