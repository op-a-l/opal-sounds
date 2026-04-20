<script lang="ts">
	// import Navbar from '$lib/global/navbar.svelte';
	import Foot from '$lib/global/foot.svelte';
	import '$lib/app.css';
</script>

<section>
	<header class="site-header">
		<a href="/" class="logo">/home</a>
		<nav>
			<a href="/projects">/projects</a>
			<!-- <a href="/#contact">/contact</a> -->
		</nav>
	</header>

	<div class="centerContainer">
		<slot />
	</div>

	<footer>
		<Foot />
	</footer>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		justify-content: center;
		/* padding-inline: var(--size-relative-14); */
	}

	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		padding-block: var(--size-4);
		padding-inline: var(--size-4);
		top: 0;
		left: 0;
		background-color: var(--surface-1);
		z-index: 10;
		font-size: var(--font-size-2);
	}

	.logo {
		font-weight: var(--font-weight-5);
		color: var(--brand);
		text-decoration: none;
		/* font-size: var(--font-size-3); */
		padding-inline: var(--size-4);
	}

	header {
		border-bottom: solid 1px var(--light);
		align-self: center;
		width: 70%;
	}

	nav {
		display: flex;
		gap: var(--size-5);
	}

	footer {
		bottom: 0;
		width: 70%;
		align-self: center;
	}

	/* container */

	/* .centerContainer {
		display: flex;
		flex-direction: column;
		width: 33%;
		flex: 1;
		justify-content: center;
	} */
</style>
