<script>
	let { data } = $props();
	const { meta, content: Content } = data;

	// Transforme l'URL YouTube en embed
	function getYoutubeEmbed(url) {
		if (!url) return null;
		const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
		return match ? `https://www.youtube.com/embed/${match[1]}` : null;
	}

	const embedUrl = getYoutubeEmbed(meta.video);
</script>

<article class="project">
	<header class="project-header">
		<h1>{meta.title}</h1>

		<ul class="tags">
			{#each meta.tags as tag}
				<li><a href="/projects?tag={tag}">#{tag}</a></li>
			{/each}
		</ul>

		<p class="description">{meta.description}</p>
	</header>

	<!-- Player Audio -->
	{#if meta.audio}
		<div class="player">
			<audio controls src={meta.audio}></audio>
		</div>
	{/if}

	<!-- Embed YouTube -->
	{#if embedUrl}
		<div class="video-wrapper">
			<iframe src={embedUrl} title={meta.title} frameborder="0" allowfullscreen></iframe>
		</div>
	{/if}

	<!-- Metadata -->
	<aside class="meta">
		{#if meta.client}
			<div class="meta-item">
				<span class="label">Client</span>
				<span>{meta.client}</span>
			</div>
		{/if}

		{#if meta.date}
			<div class="meta-item">
				<span class="label">Date</span>
				<span
					>{new Date(meta.date).toLocaleDateString('en-EN', {
						year: 'numeric',
						month: 'long'
					})}</span
				>
			</div>
		{/if}

		{#if meta.credits}
			<div class="meta-item">
				<span class="label">Crédits</span>
				<ul class="credits">
					{#each meta.credits as credit}
						<li>{credit}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</aside>

	<!-- Contenu libre du Markdown -->
	<div class="project-body">
		<Content />
	</div>
</article>

<style>
	.project {
		max-width: var(--size-content-3);
		margin-inline: auto;
		padding: var(--size-5) var(--size-3);
	}

	/* Header */
	.project-header {
		margin-bottom: var(--size-6);
	}

	.description {
		color: var(--light);
		font-size: var(--font-size-2);
		margin-top: var(--size-2);
	}

	/* Tags */
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-2);
		list-style: none;
		padding: 0;
		margin-block: var(--size-3);
	}

	.tags a {
		color: var(--accent);
		font-size: var(--font-size-0);
		text-decoration: none;
		border: 1px solid var(--accent);
		padding: var(--size-1) var(--size-2);
		border-radius: var(--radius-round);
		transition: background-color var(--transition-fast-2);
	}

	.tags a:hover {
		background-color: var(--accent);
		color: var(--surface-1);
	}

	/* Player audio */
	.player audio {
		width: 100%;
		margin-block: var(--size-4);
		accent-color: var(--brand);
	}

	/* Vidéo YouTube */
	.video-wrapper {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		margin-block: var(--size-4);
		border-radius: var(--radius-2);
		overflow: hidden;
	}

	.video-wrapper iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	/* Metadata */
	.meta {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
		padding-block: var(--size-4);
		border-block: 1px solid var(--light);
		margin-block: var(--size-5);
	}

	.meta-item {
		display: flex;
		gap: var(--size-4);
		align-items: baseline;
	}

	.label {
		min-width: var(--size-12);
		font-size: var(--font-size-0);
		font-weight: var(--font-weight-6);
		text-transform: uppercase;
		letter-spacing: var(--font-letterspacing-3);
		color: var(--light);
	}

	.credits {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
		font-size: var(--font-size-1);
	}

	/* Corps markdown */
	.project-body {
		margin-top: var(--size-5);
		line-height: var(--font-lineheight-4);
		font-size: var(--font-size-2);
	}
</style>
