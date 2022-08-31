<div class="header">
  <div class="title">
    <h1>I'm Nicola Toscan</h1>
    <p>Developer and data scientist</p>
    <p>Welcome to my website</p>
  </div>
</div>

<script lang="ts">
</script>

<style>
  .header {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url('../images/cover.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 20px solid var(--theme-2);
  }
  p {
    color: #ccc;
    filter: drop-shadow(0 1px 3px);
    margin: 0.4em;
  }
  
  .title {
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