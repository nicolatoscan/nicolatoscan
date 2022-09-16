<h3>Skills</h3>
<div class="skills">
    
    <h4 class="spacer">SOFT SKILLS:</h4>
    <p class="spacer"> Flexibility, Team work, Work under pressure </p>

    <h4>PROGRAMMING LANGUAGES:</h4>
    <p> Typescript, Javascript, Python, C#, C++, Java </p>

    <h4>JS FRAMEWORKS:</h4>
    <p> Vue, React, Angular, Express.js </p>

    <h4>DESKTOP & MOBILE:</h4>
    <p> .NET, Android Studio </p>

    <h4>DATABASES:</h4>
    <p> Postgtres, MongoDB </p>

    <h4>IT SOFTWARES:</h4>
    <p> Linux, Git, Docker </p>

    <h4>CLOUD INFRASTRUCTURE:</h4>
    <p> Google Cloude, Azure, Aws, Heroku </p>

    <h4>OTHER SOFTWARES:</h4>
    <p> Office suite, Photoshop, Premiere Pro </p>

</div>


<script lang="ts">
</script>


<style lang="less">
    h4 {
        color: var(--theme);
        text-align: right;
    }
    p, h4 {
        font-size: 1.5em;
        margin: 0.5em 0;
    }

    .spacer {
        margin-bottom: 1.5em;
    }

    .skills {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        column-gap: 2em;
    }

    @media only screen and (max-width: 750px) {
        p, h4 {
            text-align: center;
        }
        h4 {
            margin-bottom: 0 !important;
        }
        .skills {
            grid-template-columns: auto;
        }

     }

</style>