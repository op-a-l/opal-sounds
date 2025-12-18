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
		/* position: relative; */
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

	.tags {
		display: flex;
		gap: var(--size-1);
		margin-block: var(--size-1);
	}

	.tag {
		font-size: var(--font-size-0);
		color: var(--text);
		font-weight: var(--font-weight-2);
		background-color: var(--light);
		border-radius: var(--radius-4);
		padding-inline: var(--size-1);
	}
	.tag:hover{
		transform: translate(1px, 1px);
	}
</style>
