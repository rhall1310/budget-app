<script>
	import { fly } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import Settings from './Settings.svelte';
	import About from './About.svelte';
	let modal;

	let modalContent;
	export let show = false;
</script>

<Modal bind:this={modal} bind:modalContent>
	<svelte:component this={modalContent} />
	<button on:click={() => modal.hide()}>Close</button>
</Modal>
{#if show}
	<nav transition:fly={{ x: -250, opacity: 1 }}>
		<button on:click={() => (show = !show)}>Close X</button>

		<button on:click={() => modal.show(Settings)}>Settings</button>
		<button on:click={() => modal.show(About)}>About</button>
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
		z-index: 1;
	}
</style>
