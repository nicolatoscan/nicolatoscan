<h3>Personal Projects</h3>
<div class="somethings">
    {#each projects as prjs}
    <div class="something">
        <h4>{ prjs.name }</h4>
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
    <a href="https://github.com/nicolatoscan" target="_blank" class={ darkTheme ? 'dark' : '#000' }>
        <p>And many more on my Github</p><Github color='#FFF' size='32' />
    </a>
</div>


<script lang="ts">
    import Github from "svelte-material-icons/Github.svelte";

    export let darkTheme: boolean;


    type Project = { name: string, description: string, link: string }
    const projects: { name: string, projects: Project[] }[] = [
        { name: "Web", projects: [
            { name: "CV",               link: "https://github.com/nicolatoscan/cv",                     description: "This website" },
            { name: "Monopoly Bank",    link: "https://github.com/nicolatoscan/monopoly-bank",          description: "Manage a \"Credit card Monopoly\" game when the card reader breaks" },
            { name: "Concorso Presepi", link: "https://github.com/nicolatoscan/concorso-presepi-2020",  description: "Vote for the best nativity scene in my Village" },
            { name: "Copy Lorem Ipsum", link: "https://github.com/nicolatoscan/copy-lorem-ipsum",       description: "By opening this site Lorem Ipsum will be copied in your clipboard" },
        ] },
        { name: "Telegram & Discord Bots", projects: [
            { name: "Twitch to MP3",                link: "https://github.com/nicolatoscan/twitch-to-mp3-telegram-bot",                 description: "Get a twitch live as a mp3 podcast on Telegram" },
            { name: "Laundry",                      link: "https://github.com/nicolatoscan/laundry-bot",                                description: "Check availability and book laundry in a student accomodation" },
            { name: "Aurora",                       link: "https://github.com/nicolatoscan/aurora-bot",                                 description: "Allerts you when the northen lights may be visible" },
            { name: "P&S Grades",                   link: "https://github.com/nicolatoscan/probabilita-statistica-unitn-telegram-bot",  description: "Get the latest daily grade of a course at the University of Trento" },
            { name: "Discord cinema",               link: "https://github.com/nicolatoscan/cinebiscotto-discord-bot",                   description: "Create a channel on Discord and launch a countdown to watch a movie together" },
            { name: "Auto Suscriber Exam",          link: "https://github.com/nicolatoscan/automatic-suscribe-exam",                    description: "Automatically suscribes you to the exam you want when a new place is available" },
            { name: "Telegram shell controller",    link: "https://github.com/nicolatoscan/telegram-shell-controller",                  description: "Control your shell from your phone" },
            { name: "Files bot",                    link: "https://github.com/nicolatoscan/file-bot",                                   description: "Remotely download a file and upload it to Telegram" },
        ] },
        { name: "Arduino", projects: [
            { name: "Smart lights", link: "https://github.com/nicolatoscan/smart-hub-console-controller",   description: "Controll the lights of my house with Arduino" },
        ] },
        { name: "Data Science & Algorithms", projects: [
            { name: "Wikipedia communities", link: "https://github.com/nicolatoscan/wikipedia-communities", description: "Detect wikipedia communities from the interaction graph" },
            { name: "Galaxies",              link: "https://github.com/nicolatoscan/ml-galaxies",           description: "Classify galaxies from their images" },
            { name: "Wikipedia emotions",    link: "https://github.com/nicolatoscan/wiki-emo-dp",           description: "Analysis of wikipedia emotions" },
            { name: "Masyu",                 link: "https://github.com/nicolatoscan/SWRace-JeffWho",        description: "Our proposal to solve the Masyu puzzle, a NP problem" },
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
                    background-color: var(--theme-3);
                    color: white;
                }

                p {
                    margin: 0;
                }
                p.name {
                    color: var(--theme);
                    text-align: right;
                }
            }
        }

        &:last-child {
            border-bottom: none;
        }
        
        h4 {
            margin-top: 0;
            text-align: center;
            font-weight: bolder;
            color: var(--theme);
            font-size: 1.2em;
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
            &.dark {
                background-color: var(--theme-3);
            }

            p {
                margin: 0;
                margin-right: 1em;
                color: white;
            }
            &:hover {
                text-decoration: none;
            }
        }
    }
</style>