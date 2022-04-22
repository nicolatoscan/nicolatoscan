<div class="header">
  <div class="title">
    <h1>I'm Nicola Toscan</h1>
    {#each texts as t}
    <p>{t}</p>
    {/each}
  </div>
  <div class="icon">
    <ChevronDown size={'50'} color={'white'} />
  </div>
</div>

<script lang="ts">
  import ChevronDown from "svelte-material-icons/ChevronDown.svelte";

  let texts: string[] = [];
  async function wait(time: number) {
    return await new Promise(res => setTimeout(res, time));
  }
  async function write(str: string) {
    texts.push('▌')
    for (const c of str) {
      texts[texts.length - 1] = texts[texts.length - 1].replace('▌', `${c}▌`);
      await wait(35);
    }
    texts[texts.length - 1] = texts[texts.length - 1].replace('▌', '');
  }
  setTimeout(async () => {
    await write('Developer and data scientist');
    await wait(1000);
    await write('Welcome to my website');
  }, 700);

</script>

<style>
  .header {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    height: 100vh;
  }

  .header::selection {
    background: #0366A0;
  }

  p {
    color: #ccc;
    filter: drop-shadow(0 1px 3px);
    margin: 0.4em;
  }
  
  .icon {
    filter: drop-shadow(0 1px 3px);
    text-align: center;
    padding: 3em;
    cursor: pointer;
  }
  
  .title {
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    filter: drop-shadow(0 1px 3px);
    margin: 0.1em;
    letter-spacing: 5px;
    font-size: 4em;
    color: #ddd;
  }
</style>