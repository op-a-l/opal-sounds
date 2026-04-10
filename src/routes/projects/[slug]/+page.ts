export async function load({ params }) {
    try {
        const post = await import(`$lib/projects/${params.slug}.md`);
        return {
            content: post.default,
            meta: post.metadata
        };
    } catch {
        throw new Error('Project not found');
    }
}