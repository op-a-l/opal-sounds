<script lang="ts">
	import sections from '$lib/data/sections';
</script>

<ul>
	{#each sections as section}
		<li>
			<a href={section.link} target="_blank">{section.label}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		color: var(--link);
		text-decoration: none;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		margin: 0;
		padding-left: var(--size-5);
		padding-top: var(--size-5);
	}

	a {
		color: var(--link);
	}
</style>
