<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { openLightBox } from '$lib/stores/lightBox';
	import { closeLightBox } from '$lib/stores/lightBox';
	import LightBox from '$lib/components/lightBox.svelte';
	import { lightBox } from '$lib/stores/lightBox';
</script>

<h2 id="projects">.work</h2>

<hr />

<section>
	<div class="projectsList">
		{#each projects as project}
			<ul>
				<li>
					<button onclick={() => openLightBox(project)}>
						{project.title}
					</button>
				</li>
			</ul>
		{/each}
	</div>
	{#if lightBox}
	<div class="lightbox">
		<LightBox />
	</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		margin-bottom: var(--size-9);
		align-items: center;
		width: fit-content;
		justify-content: left;
	}

	.projectsList {
		width: 100%;
		min-width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: start;
		background-color: var(--secondary);
	}

	.lightbox{
		align-self: flex-start;
	}

	button {
		background-color: transparent;
	}
	button:hover {
		text-decoration: underline;
	}

	ul {
		padding: 0;
	}

	li {
		list-style: none;
		text-decoration: underline;
		color: var(--link);
		padding: 0;
		margin: 0;
	}
</style>
