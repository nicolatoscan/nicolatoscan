<h2>{ titles[type] }</h2>
<div class="boxes">
    {#each boxes as b}
    <div class="{b.flipped ? 'box flipped' : 'box'}">
        <div class="box-img">
            { #if b.img }
            <img loading="lazy" src="{ b.img }" alt="">
            { /if }
        </div>
        <div class="box-title">
            <h3>
                { b.title }
            </h3>
            { #if b.subtitles }{#each b.subtitles as s}
                <div class="subtitle">
                    { #if s.flag } <img loading="lazy" src="./images/flags/{s.flag.toLowerCase()}.svg" alt="flag" class="flag" width="640" height="480"/> { /if }
                    <h4> 
                        { #if s.url }<a class="box-url" target="_blank" href="{s.url}" rel="noreferrer">{ s.name }</a>{ :else }{ s.name }{ /if }{ s.text }
                    </h4>
                </div>
                { /each }{ /if }
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
    import { It, Se, De, Es} from "svelte-flag-icons";
    export let type: string;

    const flagsComp = { It, Se, De, Es }

    type Box = {
        img?: string,
        title: string,
        subtitles?: { flag?: string, text: string, name: string, url?: string }[],
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
                img: "./images/kthtub.webp",
                title: "Attending Master's in Data Science",
                subtitles: [
                    { flag: "Se", name: "KTH", text: ", Stockholm, Sweden | August 2021 - June 2022", url: "https://www.kth.se/" },
                    { flag: "De", name: "TU Berlin", text: ", Berlin, Germany | October 2022 - Current", url: "https://www.tu.berlin/" },
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
                </ul>\
                <br />\
                Courses I am currently attending:\
                <ul>\
                <li>Database Technology</li>\
                <li>Big Data Systems Project</li>\
                <li>Management of Data Streams</li>\
                <li>Machine Learning for Remote Sensing Data Analysis</li>\
                <li>Innovation Management and Entrepreneurship Study</li>\
                </ul>\
                "
            },
            {
                img: "./images/trento.webp",
                title: "Bachelor's in Computer Science",
                subtitles: [
                    { flag: 'It', name: "University of Trento", text: ", Trento, Italy | September 2018 - July 2022", url: "https://www.unitn.it/" }
                ],
                description: "\
                I have taken courses in Software Engineering, Data Structures, Algorithms, Programming and Mathematics.\
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
                </ul>\
                "
            },
        ],
        Experience: [
            {
                flipped: true,
                img: "./images/wiki.webp",
                title: "Data Science Internship",
                subtitles: [
                    { flag: 'Es', name: "Eurecat", text: ", Barcelona, Spain | January - June 2021", url: "https://www.eurecat.org/" }
                ],
                description: "Analyzing emotions in messages written and received by a user in Wikipedia talk pages over time using Python."
            },
            {
                flipped: true,
                img: "./images/aqrate.webp",
                title: "Web Developer Internship",
                subtitles: [
                    { flag: 'It', name: "Aqrate", text: ", Montebelluna, Italy | Summers of 2016 and 2017" }
                ],
                description: "Continuous development of multiple restful web apps and APIs used by the company itself or their clients. Developed with Angular, .NET Framework, ASP-NET MVC and Azure authentication services with TypeScript, JavaScript and C#."
            },
        ],
        Projects: [
            {
                img: "./images/rennes.webp",
                title: "Summer School - Solutions for Healthier Digital Cities",
                subtitles: [
                    { flag: 'Fr', name: "Université de Rennes 1", text: ", Rennes, France | July 2022", url: "https://www.univ-rennes1.fr/" }
                ],
                description: "Two week summer school in Rennes on the topic of digital solutions for healthier cities organazied by EiT.\
                Work in teams on challenging cases, with the end goal of creating a start-up solving the problem.\
                We took courses on Entrepreneurship and Business analysis."
            },
            {
                img: "./images/eagle.webp",
                title: "Eletric Racing Car Telemetry",
                subtitles: [
                    { flag: 'It', name: "Eagle TRT", text: ", Trento, Italy | Semptember 2020 - June 2021", url: "https://www.eagletrt.it/" }
                ],
                description: "Developing a telemetry software using C for an electric formula SAE car, designed and build by the Eagle Trento racing team since September 2020."
            },
            {
                img: "./images/webapp.webp",
                title: "Web Apps as management software",
                description: "Developed the following two management software applications as web apps using Vue, Node.js, MongoDB and SQL databases:<br />\
                <ul>\
                <li>Management software for the accomodation offered by the University of Trento through Opera.</li>\
                <li>Management software to catalogued books of the libraries of Bolzano through librilib(e)ri.</li>\
                </ui>"
            },
            // {
            //     // img: "./images/fal.webp",
            //     title: "Company websites",
            //     description: "Developed two websites to for local companies with php. I also took care of taking pictures and video to promote their products."
            // },
            // {
            //     // img: "./images/kent.webp",
            //     title: "Kent School of English",
            //     subtitles: [ { flag: 'Gb', text: "Kent, United Kingdom | Semptember 2016" } ],
            //     description: "I took a two week course in English at Kent School of English"
            // }
        ],
    };

    const boxes = infos?.[type] ?? [];

</script>


<style lang="less">
    h3 {
        font-size: 1.2em;
        margin: 3px 0;
    }
    .subtitle {
        display: flex;
        align-items: center;
        h4 {
            font-size: 1em;
            margin: 3px 0;
        }
        .flag {
            height: 1.3em;
            width: 1.8em;
            margin-top: 3px;
            margin-bottom: 3px;
            margin-right: 0.5em;
        }
    }
    .box {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
        padding: 1em 3em;
        column-gap: 3em;
        border-bottom: 1px solid var(--theme);

        @media screen and (max-width: 800px) {
            grid-template-columns: auto !important;
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
            grid-template-columns: 1fr auto;

            .box-img {
                grid-column: 2 / 3;
            }
        }

        .box-url {
            color: inherit;
            text-decoration: underline;
        }

    }
</style>