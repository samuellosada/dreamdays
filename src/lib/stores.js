import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const storedDreams = browser ? JSON.parse(localStorage.getItem('dreams') || '[]') : [];
export const dreams = writable(storedDreams);

if (browser) {
	dreams.subscribe((value) => {
		localStorage.setItem('dreams', JSON.stringify(value));
	});
}
