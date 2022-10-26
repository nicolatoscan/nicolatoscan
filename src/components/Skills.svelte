<h2>Skills</h2>
<div class="skills">
    
    <h3 class="spacer">SOFT SKILLS:</h3>
    <p class="spacer"> Flexibility, Team work, Work under pressure </p>

    <h3>PROGRAMMING LANGUAGES:</h3>
    <p> Typescript, Javascript, Python, C#, C++, Java </p>

    <h3>DATA SCIENCE:</h3>
    <p> Machine Learning, NN, Transformers, Data Mining </p>

    <h3>JS FRAMEWORKS:</h3>
    <p> Vue, React, Angular, Express.js </p>

    <h3>DESKTOP & MOBILE:</h3>
    <p> .NET, Android Studio </p>

    <h3>DATABASES:</h3>
    <p> Postgtres, MongoDB </p>

    <h3>IT SOFTWARES:</h3>
    <p> Linux, Git, Docker </p>

    <h3>CLOUD INFRASTRUCTURE:</h3>
    <p> Google Cloud, Azure, Aws, Heroku </p>

    <h3>OTHER SOFTWARES:</h3>
    <p> Office suite, Photoshop, Premiere Pro </p>

</div>


<script lang="ts">
</script>


<style lang="less">
    h3 {
        color: var(--theme);
        text-align: right;
    }
    p, h3 {
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
        p, h3 {
            text-align: center;
        }
        h3 {
            margin-bottom: 0 !important;
        }
        .skills {
            grid-template-columns: auto;
        }

     }

</style>