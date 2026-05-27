export async function load() {
	const modules = import.meta.glob('$lib/projects/*.md');

	const projects = await Promise.all(
		Object.keys(modules).map(async (path) => {
			const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';
			const mod = (await modules[path]()) as { metadata: Record<string, boolean | string> };
			return { slug, meta: mod.metadata };
		})
	);

	return {
		projects: projects.filter((p) => p.meta.hide !== true)
	};
}
