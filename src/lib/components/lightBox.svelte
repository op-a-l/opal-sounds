<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { projects } from '$lib/data/projects';
	import { lightBox } from '$lib/stores/lightBox';
	import { slide } from 'svelte/transition';
	$: data = projects.find((p) => p.id === $lightBox.content);
</script>

{#if data}
	<section transition:slide>
		<h3>
			<a href={data.link} target="_blank">{data.title}</a>
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
		max-width: 70vw;
		min-width: 40vw;
		background-image: var(--noise-filter-2);
		position: relative;
		left: 10vw;
		z-index: 1;
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

	.tags {
		display: flex;
		gap: var(--size-1);
		margin-bottom: var(--size-1);
	}

	.tag {
		font-size: var(--font-size-0);
		color: var(--text);
		font-weight: var(--font-weight-2);
		background-color: var(--light);
		border-radius: var(--radius-4);
		padding-inline: var(--size-1);
	}
</style>
