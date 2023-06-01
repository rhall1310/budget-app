import { writable } from 'svelte/store';

export const settings = writable({
	period: 'monthly',
	darkMode: false
});

export const styling = writable({
	themeColor: 'rgb(8, 96, 95)'
});
