<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { projects } from '$lib/data/projects';
	import { lightBox } from '$lib/stores/lightBox';
	import { fade } from 'svelte/transition';
	$: data = projects.find((p) => p.id === $lightBox.content);
</script>

{#if data}
	<section transition:fade>
		<h3>
			{#if data.link}
				<a href={data.link} target="_blank">{data.title}</a>
			{:else}
				{data.title}
			{/if}
		</h3>
		<div class="tags">
			{#each data.tags as tag}
				<span class="tag">#{tag}</span>
			{/each}
		</div>
		<h4>{data.subtitle}</h4>
		<p>
			{data.text}
		</p>
	</section>
{/if}

<style>
	section {
		font-family: var(--font-geometric-humanist);
		background-image: var(--noise-filter-2);
		box-shadow: var(--inner-shadow-4);
		z-index: 1;
		width: 100%;
		padding: var(--size-3);
	}

	p {
		text-align: justify;
		font-size: var(--font-size-1);
	}

	a {
		color: var(--link);
	}

	a:hover {
		color: var(--accent);
	}



</style>
