<script>
	import { fly } from 'svelte/transition';

	export let show = false;
	export let showSettings = false;
</script>

{#if show}
	<nav transition:fly={{ x: -250, opacity: 1 }}>
		<button on:click={() => (show = !show)}>Close X</button>
		<button on:click={() => (showSettings = !showSettings)}>Settings</button>
		<a href="/about">About</a>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		padding: 2rem 1rem 0.6rem;
		border-left: 1px solid #aaa;
		background: rgb(255, 186, 73);
		overflow-y: auto;
		width: 10rem;
		display: flex;
		flex-direction: column;
	}
</style>
