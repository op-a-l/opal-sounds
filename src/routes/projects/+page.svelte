<script lang="ts">
	let { data } = $props();
</script>

<section>
	<h1>/projects</h1>
	<hr />

	<ul>
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
	</ul>
</section>

<style>
	a {
		color: var(--text);
	}

	a:hover {
		color: var(--text);
	}

	h2 {
		color: var(--link);
	}

	h2:hover {
		text-decoration: underline;
	}

	ul {
		margin-top: var(--size-5);
		display: flex;
		flex-flow: column;
		margin: none;
		padding: none;
		gap: var(--size-6);
	}

	li {
		padding: var(--size-2);
		border-radius: var(--radius-1);
	}

	li:hover {
		/* transform: translate(-1px, -1px); */
		box-shadow: var(--shadow-3);
	}

	.projectItem {
		width: 100%;
		display: flex;
		flex-flow: row;
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

	section {
		display: flex;
		flex-flow: column;
		width: var(--size-15);
		justify-items: center;
		gap: var(--size-5);
	}
</style>
