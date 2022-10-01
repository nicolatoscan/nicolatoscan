<div class="header">
  <div class="title">
    <p class="welcome">{ welcome }</p>
    <h1>I'm Nicola Toscan</h1>
    <p>Developer &amp; MSc Data Science Student</p>
  </div>
</div>

<script lang="ts">
  const welcomes = [ "Welcome!", "Benvenuto!", "Willkommen!", "Välkommen!", "Bienvenue!", "¡Bienvenidas!" ]
  let wIndex = 0;
  let welcome = welcomes[wIndex];

  function changeWelcome () {
    let newWIndex = wIndex;
    while (newWIndex === wIndex) newWIndex = Math.floor(Math.random() * welcomes.length);
    wIndex = newWIndex;
    welcome = welcomes[wIndex];
  }

  setTimeout(() => {
    changeWelcome();
    setInterval(() => { changeWelcome(); }, 10000);
  }, 8750);



</script>
<style>
  @keyframes fadeIn {
    0%    { opacity: 1; }
    80%   { opacity: 1; }
    85%   { opacity: 0; }
    90%   { opacity: 0; }
    100%  { opacity: 1; }
  }
  .header {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url('../images/cover.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 20px solid var(--theme);
  }
  p {
    color: var(--white);
    filter: drop-shadow(0 1px 3px);
    margin: 0.2em;
  }
  .welcome {
    font-size: 2em;
    animation: fadeIn 10s infinite;
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
    font-size: 3em;
    color: var(--white);
  }
</style>