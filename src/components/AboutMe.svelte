<h3>ABOUT ME</h3>
<div class="my-info">
    <p><span class="info-name">Name:</span>Nicola Toscan</p>
    <p><span class="info-name">From:</span>Italy</p>
    <p><span class="info-name">Email:</span>test@nicolatoscan.it</p>
    <p><span class="info-name">Age:</span>{ age }</p>
    <p><span class="info-name">Now in:</span>Stockholm</p>
    <p><span class="info-name">Qualcos:</span>altro</p>
</div>

<script lang="ts">
    const age = Math.floor(
        (new Date().getTime() - new Date(1999, 0, 31).getTime()) / 3.15576e+10
    )
</script>


<style lang="less">
    .my-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 1em;
        border-left: 4px solid #96ed74;
        @media only screen and (max-width: 1050px) { grid-template-columns: 1fr 1fr; }
        @media only screen and (max-width: 750px) { grid-template-columns: 1fr; }
    }
    p {
        margin: 0.3em 1em;
        font-size: 1.3em;
        .info-name {
            width: 75px;
            display: inline-block;
            color: #ed9074;
        }
    }
</style>