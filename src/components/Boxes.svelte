<h3>{ titles[type] }</h3>
<div class="boxes">
    {#each boxes as b}
    <div class="{b.flipped ? 'box flipped' : 'box'}">
        <div class="box-img">
            <img src="{ b.img }" alt="">
        </div>
        <div class="box-title">
            <h4>
                { b.title }
            </h4>
            { #if b.subtitles }{#each b.subtitles as s}
                <div class="subtitle">
                    { #if s.flag } <img src="./images/flags/{s.flag.toLowerCase()}.svg" alt="flag" class="flag" /> { /if }
                    <h5>{ s.text }</h5>
                </div>
            { /each } { /if }
        </div>
        <div class="box-description">
            <p>{@html b.description }</p>
            { #if b.more }
                { #if b.showMore } <p class="more">{@html b.more }</p> { /if }
                <p class="show-more" on:click={ () => { b.showMore = !b.showMore} }>{b.showMore ? 'Show less' : 'Show more'}</p>
            { /if }
            <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span>

        </div>
    </div>
    {/each}
</div>

<script lang="ts">
	import { text } from 'stream/consumers';
import { It, Se, De, Es} from "svelte-flag-icons";
    export let type: string;

    const flagsComp = { It, Se, De, Es }

    type Box = {
        img: string,
        title: string,
        subtitles?: {flag?: string, text: string}[],
        description: string,
        more?: string,
        showMore?: boolean,
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
                img: "./images/kth.jpg",
                title: "Attending Joint Master in Data Science",
                subtitles: [
                    {flag: "Se", text: "KTH, Stockholm, Sweden | August 2021 - June 2022"},
                    {flag: "De", text: "TUB, Berlin, Germany | October 2022 - Current"},
                ],
                description: "\
                I am currently attending a joint Master degree in Stockholm and Berlin in Data Science, with a minor in Entrepreneur & Innovation.\
                I spent the first year in Stockholm and I will spend the second year in Berlin.",
                showMore: false,
                more: "The complete list of courses I have taken:\
                <ul>\
                <li>Machine Learning</li>\
                <li>Scalable Machine Learning and Deep Learning</li>\
                <li>Programming for Data Science</li>\
                <li>Data Mining, Basic Course</li>\
                <li>Research Methodology and Scientific Writing</li>\
                <li>Entrepreneurship for Engineers</li>\
                <li>Business Development Lab of Entrepreneurship Engineers</li>\
                <li>e-Business Strategies</li>\
                </ui>\
                "
            },
            {
                img: "./images/trento.jpg",
                title: "Bachelor in Computer Science",
                subtitles: [
                    { flag: 'It', text: "University of Trento, Trento, Italy | September 2018 - July 2022" }
                ],
                description: "\
                I have taken courses in Software Engineering, Data Structures, Algorithms, and Programming and Mathematics.\
                I graduated with the highest grade of 110 cum laude in July 2022",
                showMore: false,
                more: "The complete list of courses I have taken:\
                <ul>\
                <li>Algorithms and Data Structures</li>\
                <li>Computer Programming 1</li>\
                <li>Programming Languages</li>\
                <li>Software Engineering 1 & 2</li>\
                <li>Formal Languages and Compilers</li>\
                <li>Geometry and Linear Algebra</li>\
                <li>Calculus 1</li>\
                <li>Probability and Statistics</li>\
                <li>Mathematical Foundations of Computer Science</li>\
                <li>Physics</li>\
                <li>Operating Systems</li>\
                <li>Logic</li>\
                <li>Databases</li>\
                <li>Networks</li>\
                <li>Computer Architectures</li>\
                <li>Human-Computer Interaction</li>\
                <li>Introduction to Computer and Network Security</li>\
                <li>Introduction to Web Programming</li>\
                <li>Introduction to Mobile Development</li>\
                <li>Introduction to Machine Learning</li>\
                </ui>\
                "
            },
        ],
        Experience: [
            {
                flipped: true,
                img: "./images/wiki.jpg",
                title: "Data Science Internship",
                subtitles: [
                    { flag: 'Es', text: "Eurecat, Barcelona, Spain | January - June 2021" }
                ],
                description: "Analyzing emotions in messages written and received by a user in Wikipedia talk pages over time using Python."
            },
            {
                flipped: true,
                img: "./images/aqrate.jpg",
                title: "Web Developer internship",
                subtitles: [
                    { flag: 'It', text: "Aqrate, Montebelluna, Italy | Summer of 2016 and 2017" }
                ],
                description: "Continuous development of multiple restful web apps and APIs used by the company itself or their clients. Developed with Angular, .NET Framework, ASP-NET MVC and Azure authentication services with TypeScript, JavaScript and C#."
            },
        ],
        Projects: [
            {
                img: "./images/rennes.jpg",
                title: "Summer School - Solutions for Healthier Digital Cities",
                subtitles: [
                    { flag: 'Fr', text: "Université de Rennes 1, Rennes, France | July 2022" }
                ],
                description: "Two week summer school in Rennes on the topic of digital solutions for healthier cities organazied by EiT.\
                Work in teams on challenging cases, with the end goal of creating a start-up solving the problem.\
                We took courses on Entrepreneurship and Business analysis."
            },
            {
                img: "./images/eagle.jpg",
                title: "Eletric Racing Car Telemetry",
                subtitles: [
                    { flag: 'It', text: "Eagle TRT, Trento, Italy | Semptember 2020 - June 2021" }
                ],
                description: "Developing a telemetry software using C for an electric formula SAE car, designed and build by the Eagle Trento racing team since September 2020."
            },
            {
                img: "./images/webapp.jpg",
                title: "Web Apps as management software",
                description: "Developed the following two management software applications as web apps using Vue, Node.js, MongoDB and SQL databases:<br />" +
                    "Web app to manage the accomodation offered by the University of Trento through Opera.<br />" +
                    "Web app to manage the books catalogued by the library of Bolzano through librilib(e)ri."
            },
            {
                img: "./images/fal.jpg",
                title: "Company websites",
                description: "Developed two websites to for local companies with php. I also took care of taking pictures and video to promote their products."
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
    .subtitle {
        display: flex;
        align-items: center;
        h5 {
            font-size: 1em;
            margin: 3px 0;
        }
        .flag {
            height: 1.3em;
            margin-top: 3px;
            margin-bottom: 3px;
            margin-right: 0.5em;
        }
    }
    .box {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        padding: 1em 3em;
        column-gap: 3em;
        border-bottom: 1px solid var(--theme);

        @media screen and (max-width: 800px) {
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            column-gap: 0;
            padding: 1em;

            .box-img {
                grid-row: auto !important;
                grid-column: auto !important;
                img {
                    margin-bottom: 1em;
                }
            }
        }

        &:last-child {
            border-bottom: none;
        }
        
        .box-img {
            align-self: flex-start;
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