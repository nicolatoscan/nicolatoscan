<h3>ABOUT ME</h3>
<div class="my-info">
    <p><span class="info-name">Name:</span>Nicola Toscan</p>
    <p><span class="info-name">From:</span>Italy</p>
    <p><span class="info-name">Email:</span>test@nicolatoscan.it</p>
    <p><span class="info-name">Age:</span>{ age }</p>
    <p><span class="info-name">Now in:</span>Stockholm</p>
    <p><span class="info-name">Qualcos:</span>altro</p>
</div>
<div class="about">
    <div class="picture"></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam euismod, nisi vel consectetur interdum, nisl nisi tincidunt nisi, eget consectetur nisl nisi euismod nisi.
        Sed euismod, nisi vel consectetur interdum, nisl nisi tincidunt nisi, eget consectetur nisl nisi euismod nisi.
        Sed euismod, nisi vel consectetur interdum, nisl nisi tincidunt nisi, eget consectetur nisl nisi euismod nisi.
    </p>
</div>
<div class="urls">
    <a href="https://www.github.com/nicolatoscan/" target="_blank"><Github color='#ed9074' size='48' /></a>
    <a href="https://www.linkedin.com/in/nicolatoscan/" target="_blank"><Linkedin color='#ed9074' size='48' /></a>
    <a href="mailto:nicolatoscan.99+cv@gmail.com" target="_blank"><Email color='#ed9074' size='48' /></a>
    <a href="https://www.t.me/nicolatoscan/" target="_blank"><Telegram color='#ed9074' size='48' /></a>
    
</div>


<script lang="ts">
    import Github from "svelte-material-icons/Github.svelte";
    import Linkedin from "svelte-material-icons/Linkedin.svelte";
    import Email from "svelte-material-icons/Email.svelte";
    import Telegram from "svelte-material-icons/Telegram.svelte";

    const age = Math.floor( (new Date().getTime() - new Date(1999, 0, 31).getTime()) / 3.15576e+10 );
</script>


<style lang="less">
    .my-info {
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 1.5em .5em;
        @media only screen and (max-width: 1050px) { grid-template-columns: 1fr 1fr; }
        @media only screen and (max-width: 750px) { grid-template-columns: 1fr; }
    }
    .about {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        justify-content: center;
        .picture {
            width: 120px;
            height: 120px;
            background-image: url(https://picsum.photos/150/150);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
            margin: 1em;
        }
    }

    .urls {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1em auto;
        padding: 0 3em;
        border-top: 1px solid var(--theme);
        width: fit-content;

        a {
            padding: .5em 1em;
        }
    }
    p {
        margin: 0.3em 1em;
        font-size: 1.3em;
        .info-name {
            width: 90px;
            display: inline-block;
            color: #ed9074;
        }
    }
</style>