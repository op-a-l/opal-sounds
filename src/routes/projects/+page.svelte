<script lang="ts">
	let { data } = $props();
</script>

<section>
	<div class="title">
		<h1>Projects</h1>
	</div>
	<div class="projectList">
		{#each data.projects as project (project.slug)}
			<a href="/projects/{project.slug}">
				<div class="projectItem">
					<div class="head">
						<h2>{project.meta.title ?? project.slug}</h2>
						<!-- {#if project.meta.description}
                    <p>{project.meta.description}</p>
                    {/if} -->

						<div class="tags">
							{#if project.meta.tags}
								{#each project.meta.tags as tag (tag)}
									<div>
										<span class="tag">#{tag}</span>
									</div>
								{/each}
							{/if}
						</div>
					</div>

					{#if project.meta.date}
						<span>{project.meta.date}</span>
					{/if}
				</div>
				<hr />
			</a>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* background-color: red; */
	}

	.title h1 {
		align-self: start;
		padding-block: var(--size-9);

		font-weight: var(--font-weight-5);
	}

	.projectList {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.projectItem {
		min-height: var(--size-9);
		padding-block: var(--size-4);
		width: 100%;
		padding-inline: var(--size-2);

		border-radius: var(--radius-1);

		display: flex;
	}

	.projectItem:hover {
		/* transform: translate(-1px, -1px); */
		box-shadow: var(--shadow-3);
	}

	hr {
		height: 1px;
	}

	a {
		color: var(--text);
		width: 100%;
	}

	h2 {
		color: var(--link);
	}

	/* h2:hover {
		text-decoration: underline;
	} */

	.head {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.tags {
		display: flex;
		flex-flow: row;
	}
</style>
