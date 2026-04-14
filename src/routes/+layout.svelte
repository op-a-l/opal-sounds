<script lang="ts">
	// import Navbar from '$lib/global/navbar.svelte';
	import Foot from '$lib/global/foot.svelte';
	import '$lib/app.css';
</script>

<header class="site-header">
  <a href="/" class="logo">/</a>
  <nav>
    <a href="/projects">/projects</a>
    <a href="/#contact">/contact</a>
  </nav>
</header>

<div class="centerContainer">
	<slot />
</div>

<footer>
	<Foot />
</footer>

<style>
  .site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: var(--font-weight-5);
    color: var(--brand);
    text-decoration: none;
    font-size: var(--font-size-3);
	  padding-inline: var(--size-4);
  }

  nav {
    display: flex;
    gap: var(--size-5);
  }

</style>