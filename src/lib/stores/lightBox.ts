import type { Project } from '$lib/data/projects';
import { writable } from 'svelte/store';

type LightBoxState = {
	open: boolean;
	content?: string | null;
};

const initial: LightBoxState = { open: false };

export const lightBox = writable<LightBoxState>(initial);

export function openLightBox(data: Project) {
	lightBox.set({ open: true, content: data.id });
}

export function closeLightBox() {
	lightBox.set({ open: false });
}
