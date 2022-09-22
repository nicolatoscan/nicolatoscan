<h2>Certificates</h2>
<div class="somethings">
    <div class="something">
        <h3>CCNA Routing and Switching: Introduction to Networks</h3>
        <h4>Cisco Network accademy | November 2017</h4>
        { #if ciscoShowMore } 
            <ul>
                <li>Understand and describe the devices and services used to support communications in data networks and the Internet</li>
                <li>Understand and describe the role of protocol layers in data networks</li>
                <li>Understand and describe the importance of addressing and naming schemes at various layers of data networks in IPv4 and IPv6 environments</li>
                <li>Design, calculate, and apply subnet masks and addresses to fulfill given requirements in IPv4 and IPv6 networks</li>
                <li>Explain fundamental Ethernet concepts such as media, services, and operations</li>
                <li>Build a simple Ethernet network using routers and switches</li>
                <li>Use Cisco command-line interface (CLI) commands to perform basic router and switch configurations</li>
                <li>Utilize common network utilities to verify small network operations and analyze data traffic</li>
            </ul>
        { /if }
        <p class="show-more" on:click={ () => { ciscoShowMore = !ciscoShowMore} }>{ciscoShowMore ? 'Show less' : 'Show more'}</p>
    </div>

    <div class="something">
        <h3>Certificate in Advance English (CAE)</h3>
        <h4>Cambridge English | March 2017</h4>
        <p>Cambridge English Level 2 Certificate in ESOL International (Advance)</p>
        { #if caeMore }
        Overal Score: 189
        <ul>
            <li>Reading: 195</li>
            <li>Use of English: 190</li>
            <li>Writing: 171</li>
            <li>Listening: 201</li>
            <li>Speaking: 188</li>
        </ul>
        { /if }
        <p class="show-more" on:click={ () => { caeMore = !caeMore} }>{caeMore ? 'Show less' : 'Show more'}</p>
    </div>

</div>

<script lang="ts">
    let ciscoShowMore = false;
    let caeMore = false;
</script>


<style lang="less">
    .something {
        max-width: 780px;
        margin: auto;
        padding: 0 1em;
        border-bottom: 1px solid var(--theme);

        h3 {
            font-size: 1.2em;
            margin: 1em 0 3px;
        }
        h4 {
            font-size: 1em;
            margin: 0 0 1em;
        }

        &:last-child {
            border-bottom: none;
        }

    }
</style>