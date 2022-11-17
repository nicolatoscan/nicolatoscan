<h2>Personal Projects</h2>
<div class="somethings">
    {#each projects as prjs}
    <div class="something">
        <h3>{ prjs.name }</h3>
        <div class="list">
            { #each prjs.projects as p }
            <a href="{p.link}" target=”_blank” >
                <p class="name">{p.name}</p>
                <p class="description">{p.description}</p>
            </a>
            { /each }
        </div>
    </div>
    { /each }
</div>
<div class="more-github">
    <a href="https://github.com/nicolatoscan" target="_blank">
        <p>And many more on my Github</p><Github size='32' />
    </a>
</div>


<script lang="ts">
    import Github from "svelte-material-icons/Github.svelte";

    type Project = { name: string, description: string, link: string }
    const projects: { name: string, projects: Project[] }[] = [
        { name: "Web", projects: [
            { name: "CV",               link: "https://github.com/nicolatoscan/nicolatoscan",           description: "This website" },
            { name: "Rememo",           link: "https://github.com/nicolatoscan/rememo-webapp",          description: "WebApp with flashcards to learn languages" },
            { name: "Monopoly Bank",    link: "https://github.com/nicolatoscan/monopoly-bank",          description: "Manage a \"Credit card Monopoly\" game when the card reader breaks" },
            { name: "Concorso Presepi", link: "https://github.com/nicolatoscan/concorso-presepi-2020",  description: "Vote for the best nativity scene in my Village" },
            { name: "Copy Lorem Ipsum", link: "https://github.com/nicolatoscan/copy-lorem-ipsum",       description: "By opening this site Lorem Ipsum will be copied in your clipboard" },
        ] },
        { name: "Telegram & Discord Bots", projects: [
            { name: "BibTex Bot",                   link: "https://github.com/nicolatoscan/bibtex-bot",                                 description: "Search for a paper and get its bibtex on Telegram" },
            { name: "Twitch to MP3",                link: "https://github.com/nicolatoscan/twitch-to-mp3-telegram-bot",                 description: "Get a twitch live as a mp3 podcast on Telegram" },
            { name: "Laundry",                      link: "https://github.com/nicolatoscan/laundry-bot",                                description: "Check availability and book laundry in a student accomodation" },
            { name: "Aurora",                       link: "https://github.com/nicolatoscan/aurora-bot",                                 description: "Allerts you when the northen lights may be visible" },
            { name: "P&S Grades",                   link: "https://github.com/nicolatoscan/probabilita-statistica-unitn-telegram-bot",  description: "Get the latest daily grade of a course at the University of Trento" },
            { name: "Discord cinema",               link: "https://github.com/nicolatoscan/cinebiscotto-discord-bot",                   description: "Create a channel on Discord and launch a countdown to watch a movie together" },
            { name: "Auto Suscriber Exam",          link: "https://github.com/nicolatoscan/automatic-suscribe-exam",                    description: "Automatically suscribes you to the exam you want when a new place is available" },
            { name: "Telegram shell controller",    link: "https://github.com/nicolatoscan/telegram-shell-controller",                  description: "Control your shell from your phone" },
            { name: "Files bot",                    link: "https://github.com/nicolatoscan/file-bot",                                   description: "Remotely download a file and upload it to Telegram" },
        ] },
        { name: "Android", projects: [
            { name: "Rememo",       link: "https://github.com/nicolatoscan/rememo-android-app", description: "Android App with flashcards to learn languages" },
            { name: "Frier Timer",  link: "https://github.com/nicolatoscan/FrierTimer",         description: "Android app to check fring time in two basket friers" },
        ] },
        { name: "Arduino", projects: [
            { name: "Smart lights", link: "https://github.com/nicolatoscan/smart-hub-console-controller",   description: "Control the lights of my house with Arduino" },
        ] },
        { name: "Data Science & Algorithms", projects: [
            { name: "Wikipedia communities", link: "https://github.com/nicolatoscan/wikipedia-communities", description: "Detect wikipedia communities from the interaction graph" },
            { name: "Movie reviews summary", link: "https://github.com/nicolatoscan/movies-reviews-summary",description: "Summarize positives and negatives reviews of a movie" },
            { name: "Galaxies",              link: "https://github.com/nicolatoscan/ml-galaxies",           description: "Classify galaxies from their images" },
            { name: "Wikipedia emotions",    link: "https://github.com/nicolatoscan/wiki-emo-dp",           description: "Analysis of wikipedia emotions" },
            { name: "Masyu",                 link: "https://github.com/nicolatoscan/SWRace-JeffWho",        description: "Our proposal to solve the Masyu puzzle, a NP problem" },
            { name: "Bachelor's thesis",      link: "https://github.com/nicolatoscan/thesis",                description: "Analysis of emotions in Wikipedia discussions" },
        ] },
    ] 

</script>


<style lang="less">
    a {
        color: inherit;
    }
    .something {
        max-width: 780px;
        margin: auto;
        border-bottom: 1px solid var(--theme);
        padding: 1.5em;

        .list {

            a {
                display: grid;
                grid-template-columns: 1fr 3fr;
                grid-gap: 2em;
                border-radius: 5px;
                padding: 0.3em;

                &:hover {
                    background-color: var(--theme-background);
                }

                p {
                    margin: 0;
                }
                p.name {
                    color: var(--theme);
                    text-align: right;
                    text-decoration: underline;
                }
            }
        }

        &:last-child {
            border-bottom: none;
        }
        
        h3 {
            margin-top: 0;
            text-align: center;
            font-weight: bolder;
            color: var(--theme);
        }
    }

    .more-github {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            text-transform: uppercase;
            font-size: 1.2em;
            margin-top: 2em;
            padding: 1em;
            border-radius: 5px;
            display: flex;
            align-items: center;
            background-color: var(--theme);
            color: var(--color-bg);

            p {
                margin: 0;
                margin-right: 1em;
            }
            &:hover {
                text-decoration: none;
                background-color: var(--theme-select);
            }
        }
    }
    :global(.more-github path) {
        fill: var(--color-bg) !important;
    }
</style>