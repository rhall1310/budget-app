<script>
	import { fly } from 'svelte/transition';
	import Modal from '../components/Modal.svelte';
	let modal;

	export let show = false;
</script>

{#if show}
	<Modal bind:this={modal}>
		<h2>Modal title</h2>
		<p>Modal content.</p>
		<button on:click={() => modal.hide()}>Close</button>
	</Modal>
	<nav transition:fly={{ x: -250, opacity: 1 }}>
		<button on:click={() => (show = !show)}>Close X</button>
		<button>Settings</button>
		<button on:click={() => modal.show()}>Show modal</button>
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
