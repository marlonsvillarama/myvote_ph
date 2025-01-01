<script>
    export let data = {};

</script>

<div class="profile-section">
    <h3>Who is {data.fn} {data.ln}?</h3>
    {#if data.profile?.length > 0}
        {#each data.profile as pr}
        <p>{pr}</p>
        {/each}
    {:else}
        <p>No profile summary at this time.</p>
    {/if}
    <a class="back-to-top" href="#top">Back to Top &uarr;</a>
</div>