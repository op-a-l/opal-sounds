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
	<hr>
	{#if lightBox}
	<div class="lightbox">
		<LightBox />
	</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--size-9);
		align-items: start;
		width: 100%;
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
		/* align-self: flex-start; */
		margin-top: var(--size-2);
		width: 100%;
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
