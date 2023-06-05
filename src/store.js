import { writable } from 'svelte/store';

export const settings = writable({
	period: 'monthly',
	darkMode: false
});
