<script>
    import CardHorizontal from "../components/cardHorizontal.svelte";
    import CardVertical from "../components/cardVertical.svelte";

    export let data = {};

    let cards = data.cards.map(d => {
        return {
            ...d,
            img: `/images/cards/${d.id}.jpg`
        };
    });

    let frauds = data.frauds.map(d => {
        return {
            ...d,
            img: `/images/cards/${d.id}.jpg`
        }
    });

    const goToCandidates = () => {
        window.location = `/candidates/senate`;
    };

    const clickCard = (e) => {
        let link = e.detail.link;
        if (!link) { return; }

        window.location = link;
    };
</script>

<main>
    <section class="hero">
        <div class="overlay"></div>
        <div class="content wrapper">
            <h1 id="banner-title">Join the fight for a better future</h1>
            <p>
                Traditional politics is hurting our country. We need to vote for the right leaders who have the country's best interests at heart.
                <br><br>
                Be informed. Get to know the people running for office.
            </p>
            <p>
                <a href="./" class="cta">Start here</a>
            </p>
        </div>
    </section>

    <section id="senators" class="row page-row">
        <div class="content wrapper">
            <h1>In 2025, the country will elect 12 senators.</h1>
            <button class="cta" on:click={goToCandidates}>See all candidates here</button>
        </div>
    </section>

    <!-- <section id="fraud" class="row grid-row">
        <div class="content wrapper">
            <h1>Fight misinformation and fraud</h1>
            <div class="">
                {#each frauds as fraud}
                <CardHorizontal data={fraud} />
                {/each}
            </div>
        </div>
    </section> -->
    
    <section id="issues" class="row page-row">
        <div class="content wrapper">
            <h1>Your vote matters</h1>
            <p>
                Learn more about the issues facing our country today. Vote for leaders who can help shape the future of our country.
            </p>
            <div id="issue-cards">
                {#each cards as card}
                    <CardVertical data={card} on:click={clickCard} />
                {/each}
            </div>
        </div>
    </section>
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 0rem;
    }
    @media (min-width: 40rem) {
        main {
            gap: 3rem;
        }
    }
    section {
        margin-bottom: 5rem;
    }
    .hero {
		background: url("/images/hero/home.jpg") 50% 50%;
        background-size: cover;
	}
    #banner-title {
        text-align: start;
    }
    .page-row > .content h1 {
    /* .grid-row > .content h1 { */
        /* font-family: var(--font-serif); */
        /* text-transform: uppercase; */
        font-size: 2.5rem;
        font-weight: bolder;
        margin-bottom: 0.5rem;
        letter-spacing: 0.5px;
    }
    .page-row > .content h1 {
        color: var(--color-font);
    }
    /* .grid-row {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    } */
    /* .grid-row > .content h1 {
        margin-bottom: 2rem;
        font-family: var(--font-serif);
        letter-spacing: 1px;
        text-transform: uppercase;
    } */
    /* .content .flex-row {
        ** border: 1px solid black; **
		display: flex;
        ** flex: 2 1 auto; **
		flex-direction: row;
        justify-content: center;
        align-items: center;
        ** flex-wrap: wrap; **
		color: var(--color-white);
		gap: 3rem;
        ** justify-content: flex-start; **
    } */
    /* .content .grid-row {
        border: 1px solid black;
		display: flex;
        ** flex: 2 1 auto; **
		flex-direction: column;
        justify-content: center;
        align-items: center;
        ** flex-wrap: wrap; **
		color: var(--color-white);
		gap: 3rem;
        ** justify-content: flex-start; **
    } */
    /* .flex-row div {
        height: 100%;
        border: 1px solid red;
    } */
    #senators h1,
    #issues h1 {
        /* border: 1px solid red; */
        line-height: 3rem;
    }
    #senators button.cta {
        font-size: var(--fs-md);
        padding: 1rem 2rem;
        width: fit-content;
        align-self: center;
        color: white;
        border-radius: 0.5rem;
        border: 0;
        background-color: var(--color-red-flag);
        transition: all 100ms ease-in-out;
    }
    @media (min-width: 40rem) {
        #senators button.cta {
            font-size: var(--fs-lg);
        }
    }
    #senators button.cta:hover {
        scale: 1.02;
        box-shadow: var(--box-shadow);
    }
    #issues p {
        font-family: var(--font-sans);
        font-size: var(--fs-sm);
        width: 100%;
        line-height: 1.5rem;
    }
    #issue-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    @media (min-width: 70rem) {
        #issue-cards {
            flex-direction: row;
        }
    }
    /* #fraud {
        background-color: var(--color-red-flag);
        border: 1px solid black;
        padding: 5rem 0;
        color: white;
    } */
</style>