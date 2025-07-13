<script lang="ts">
    import Navbar from "$lib/global/navbar.svelte";
    import Foot from "$lib/global/foot.svelte";
    import "../app.css";
</script>

<nav>
    <Navbar />
</nav>

<div class="centerContainer">
    <slot />
</div>

<footer>
    <Foot />
</footer>

<style>
    nav{
        position: fixed;
    }
</style>