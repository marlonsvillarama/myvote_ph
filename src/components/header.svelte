<script>
    const toggleNav = (e) => {
        let cbState = e.target.checked;
        console.log('toggleNav', e.target);
        console.log('toggleNav checked', cbState);
        
    };
</script>

<header>
    <a href="/" class="logo">
        <!-- <img src="/assets/philippines-flag-icon.svg" alt="MyVote.ph Home"> -->
        <div>
            <span class="title blue">myvote</span><span class="title red">.ph</span>
        </div>
    </a>
    <div id="menu">
        <input type="checkbox" name="menu_cb" id="menu_cb" on:change={toggleNav}>
        <label for="menu_cb">
            <div></div>
            <div></div>
            <div></div>
        </label>
    </div>
    <nav id="top_nav">
        <!-- <a href="/advocacy/">Advocacy</a> -->
        <a href="/candidates/senate">Senatorial Candidates</a>
        <a href="/issues/">Issues</a>
        <a href="/dynasties/">Dynasties</a>
        <a href="/news/">News</a>
    </nav>
</header>

<!-- <nav id="mob_nav">
    <a href="/candidates/senate">Senatorial Candidates</a>
    <a href="/issues/">Issues</a>
    <a href="/dynasties/">Dynasties</a>
    <a href="/news/">News</a>
</nav> -->

<style>
    header {
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.75rem;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
    }
    @media (min-width: 60rem) {
        header {
            padding: 0.75rem 2rem;
        }
        #menu {
            display: none;
        }
    }
    #menu_cb {
        display: none;
    }
    #menu label {
        border: 0px solid red;
        position: absolute;
        top: 8px;
        right: 4px;
        left: 0;
        display: block;
        height: auto;
        width: 30px;
        margin: 0 4px 0 auto;
        cursor: pointer;
    }
    #menu label div {
        position: relative;
        top: 0;
        height: 6px;
        border: 0;
        background-color: rgba(0, 0, 0, 1);
        transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width, 0.3s ease right;
        border-radius: 2px;
    }
    #menu label div:not(:last-child) {
        margin-bottom: 4px;
    }
    #menu label div:first-child {
        transform-origin: 0;
    }
    #menu label div:last-child {
        margin-bottom: 0;
        transform-origin: 30px;
    }
    #menu_cb:checked + label div:first-child {
        top: -5px;
        transform: rotateZ(45deg);
        background-color: rgba(0, 0, 0, 1);
    }
    #menu_cb:checked + label div:nth-child(2) {
        top: 0px;
        right: 6px;
        width: 42px;
        transform: rotateZ(-45deg);
        background-color: rgba(0, 0, 0, 1);
    }
    #menu_cb:checked + label div:last-child {
        top: 5px;
        transform: rotateZ(45deg);
        background-color: rgba(0, 0, 0, 1);
    }
    nav {
        display: none;
        font-size: var(--fs-sm);
    }
    @media (min-width: 60rem) {
        #top_nav {
            display: block;
        }
    }
    #top_nav a {
        margin-left: 0.5rem;
        padding: 0.5rem 0.75rem;
        transition: all 100ms ease-in-out;
    }
    #top_nav a:hover {
        border-bottom: 2px solid var(--color-red-flag);
    }
    #mob_nav a {
        display: block;
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: white;
        font-weight: 500;
    }
    /* .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5rem;
    }
    .logo > img {
        width: 48px;
    }
    @media (width < var(--br-sm)) {
        .logo {
            gap: 0.25rem;
        }
        .logo > img {
            width: 40px;
        }
    } */
    .title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-white);
    }
    @media (width < 40rem) {
        .title {
            font-size: 1.75rem;
        }
    }
    .title.blue {
        color: var(--color-blue-flag);
    }
    .title.red {
        color: var(--color-red-flag);
    }
</style>