<h3>Education</h3>
<div class="educations">
    <div class="education">
        <div class="education-img">
            <img src="https://picsum.photos/200/200" alt="">
        </div>
        <div class="education-title">
            <h4>Bachelor in Computer Science</h4>
            <h5>University of Trento, Italy | September 2018 - July 2022</h5>
        </div>
        <div class="education-description">
            <p>
                I graduated from the University of Illinois at Urbana-Champaign with a Bachelor of Science in Computer Science.
                I have taken courses in Software Engineering, Data Structures, Algorithms, and Object-Oriented Programming.
                I have also taken courses in Database Systems, Operating Systems, and Computer Architecture.
            </p>
        </div>
    </div>
    <div class="education">
        <div class="education-img">
            <img src="https://picsum.photos/300/300" alt="">
        </div>
        <div class="education-title">
            <h4>Attending Master in Data Science</h4>
            <h5>KTH, STockholm, Sweden | August 2021 - current</h5>
        </div>
        <div class="education-description">
            <p>
                I graduated from the University of Illinois at Urbana-Champaign with a Bachelor of Science in Computer Science.
                I have taken courses in Software Engineering, Data Structures, Algorithms, and Object-Oriented Programming.
                I have also taken courses in Database Systems, Operating Systems, and Computer Architecture.
            </p>
        </div>
    </div>
</div>

<script lang="ts">
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
    .education {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto;
        padding: 1em;
        border-bottom: 1px solid var(--theme);

        &:last-child {
            border-bottom: none;
        }

        .education-img {
            align-self: center;
            justify-self: center;
            grid-row: 1 / 3;
            img {
                border-radius: 50%;
                width: 120px;
                height: 120px;
                margin: 0 3em;
            }
        }
    }

</style>