<script lang="ts">
	import Greetings from '$lib/portfolio/greetings.svelte';
	import About from '$lib/portfolio/about.svelte';
	import Services from '$lib/portfolio/services.svelte';
</script>

<main>
	<Greetings />
	<About />
	<Services />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-self: center;
		width: var(--global-width);
	}
</style>
