<script>
    export let data = {};
</script>

<main>
    <section class="hero">
        <div class="overlay"></div>
        <div class="content wrapper">
            <h1 id="banner-title">Political Dynasties</h1>
        </div>
    </section>

    <section class="content wrapper">
        <div class="grid-col-2">
            <!-- <div class="grid-col"> -->
                {#each data.col_1 as d}
                <article data-id={d.id}>
                    <h1>{d.title}</h1>

                    {#each d.text as t}
                    <p>{t}</p>
                    {/each}
                </article>
                {/each}

                <article data-id="marcos">
                    <h1>Marcos Family</h1>
                    <p></p>
                </article>

                <article data-id="duterte">
                    <h1>Duterte Family</h1>
                    <p></p>
                </article>

                <article data-id="aquino">
                    <h1>Aquino Family</h1>
                    <p></p>
                </article>
            <!-- </div> -->
            <!-- <div class="grid-col"></div> -->
        <!-- </div> -->
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    /* section {
        margin-bottom: 5rem;
        border: 1px solid red;
    } */
    .grid-col-2 {
        width: 100%;
        display: grid;
        /* grid-template-columns: repeat(2, 1fr); */
        gap: 3rem;
    }
    @media (width >= 60rem) {
        .grid-col-2 {
            /* grid-template-columns: repeat(2, 1fr); */
            column-count: 2;
        }
        /* .col-2 {
            grid-column: 2;
            grid-row: 1;
            /* grid-column-start: 2; *
        } */
    }
    .hero {
		background: url("/images/hero/dynasty.jpg") 50% 0;
        background-size: cover;
	}
    .hero .overlay {
        opacity: 0.4;
    }
    article {
        /* margin-bottom: 2rem; */
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        box-shadow: var(--card-shadow);
    }
    article h1 {
        font-size: var(--fs-xl);
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--color-red-flag);
        letter-spacing: 0.25px;
        line-height: 2rem;
    }
    article p {
        font-family: var(--font-serif);
        padding: 1rem 2rem 0;
        letter-spacing: 0.25px;
        line-height: 2rem;
    }
    article p:last-child {
        padding-bottom: 1.5rem;
    }
</style>