<script lang="ts">
	let { data } = $props();
</script>

<section>
	<div class="projectList">
		<h1>/projects</h1>
		<hr />
		{#each data.projects as project (project.slug)}
			<a href="/projects/{project.slug}">
				<li class="projectItem">
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
				</li>
			</a>
			<hr />
		{/each}
	</div>
</section>

<style>
	a {
		color: var(--text);
	}

	h2 {
		color: var(--link);
	}

	h2:hover {
		text-decoration: underline;
	}

	li:hover {
		/* transform: translate(-1px, -1px); */
		box-shadow: var(--shadow-3);
	}

	section {
		width: 100%;

		display: flex;
		flex-flow: column;
		align-items: center;
	}

	h1 {
		align-self: start;

		font-weight: var(--font-weight-6);
	}

	.projectList {
		margin-top: var(--size-5);
		display: flex;
		flex: 1;
		flex-flow: column;

		margin: none;
		padding-left: none;

		gap: var(--size-3);

		/* width: 70%; */
	}

	.projectItem {
		padding-inline: var(--size-2);
		border-radius: var(--radius-1);
		display: flex;
		flex-flow: row;

		width: 100%;

		padding-left: var(--size-6);
	}

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

	.tag:hover {
		background-color: var(--accent);
		color: var(--text);
	}
</style>
