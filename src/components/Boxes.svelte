<h3>{ titles[type] }</h3>
<div class="boxes">
    {#each boxes as b}
    <div class="{b.flipped ? 'box flipped' : 'box'}">
        <div class="box-img">
            <img src="{ b.img }" alt="">
        </div>
        <div class="box-title">
            <h4>{ b.title }</h4>
            { #if b.subtitle } <h5>{ b.subtitle }</h5> { /if }
        </div>
        <div class="box-description">
            <p>{@html b.description }</p>
        </div>
    </div>
    {/each}
</div>

<script lang="ts">
    export let type: string;

    type Box = {
        img: string,
        title: string,
        subtitle?: string,
        description: string,
        flipped?: boolean
    };

    const titles = {
        Education: 'Education',
        Experience: 'Work Experiences',
        Projects: 'Other Experiences'
    };

    const infos: { [id: string]: Box[] } = {
        Education: [
            {
                img: "/images/kth.jpg",
                title: "Attending Master in Data Science",
                subtitle: "KTH, Stockholm, Sweden | August 2021 - current",
                description: "I graduated from the University of Illinois at Urbana-Champaign with a Bachelor of Science in Computer Science. I have taken courses in Software Engineering, Data Structures, Algorithms, and Object-Oriented Programming. I have also taken courses in Database Systems, Operating Systems, and Computer Architecture."
            },
            {
                img: "/images/trento.jpg",
                title: "Bachelor in Computer Science",
                subtitle: "University of Trento, Italy | September 2018 - July 2022",
                description: "I graduated from the University of Illinois at Urbana-Champaign with a Bachelor of Science in Computer Science. I have taken courses in Software Engineering, Data Structures, Algorithms, and Object-Oriented Programming. I have also taken courses in Database Systems, Operating Systems, and Computer Architecture."
            },
        ],
        Experience: [
            {
                flipped: true,
                img: "/images/wiki.jpg",
                title: "Data Science Internship",
                subtitle: "Eurecat, Barcelona, Spain | Jenuary - June 2021",
                description: "Analyzing emotions in messages written and received by a user in Wikipedia talk pages over time using Python."
            },
            {
                flipped: true,
                img: "/images/aqrate.jpg",
                title: "Web Developer internship",
                subtitle: "Aqrate, Montebelluna, Italy | Summer of 2016 and 2017",
                description: "Continuous development of multiple restful web apps and APIs used by the company itself or their clients. Developed with Angular, .NET Framework, ASP-NET MVC and Azure authentication services with TypeScript, JavaScript and C#."
            },
        ],
        Projects: [
            {
                img: "/images/eagle.jpg",
                title: "Eletric Racing Car Telemetry",
                subtitle: "Eagle TRT, Trento, Italy | Semptember 2020 - June 2021",
                description: "Developing a telemetry software using C for an electric formula SAE car, designed and build by the Eagle Trento racing team since September 2020."
            },
            {
                img: "/images/camera.jpg",
                title: "Photos & Video Editing",
                description: "Filmed and edited short videos and photos for local public initiative like calendars, local festival posters and short videos for some of my city events. Edited using Adobe Photoshop, Adobe Premiere Pro and Adobe After Effects."
            },
        ],
    };

    const boxes = infos?.[type] ?? [];

</script>


<style lang="less">
    h4 {
        font-size: 1.2em;
        margin: 3px 0;
    }
    h5 {
        font-size: 1em;
        margin: 3px 0;
    }
    .box {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        padding: 1em 3em;
        column-gap: 3em;
        border-bottom: 1px solid var(--theme);

        &:last-child {
            border-bottom: none;
        }
        
        .box-img {
            align-self: center;
            justify-self: center;
            grid-row: 1 / 3;
            img {
                border-radius: 25%;
                width: 120px;
                height: 120px;
            }
        }
        
        &.flipped {
            .box-img {
                grid-column: 2 / 3;
            }
        }
    }
</style>