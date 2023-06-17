<script>
	import { fly } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import Settings from './Settings.svelte';
	import About from './About.svelte';
	import Hamburger from './Hamburger.svelte';

	let modal;

	let modalContent;
	export let show = false;
</script>

<Modal bind:this={modal} bind:modalContent>
	<svelte:component this={modalContent} />
</Modal>
<Hamburger bind:open={show} />
{#if show}
	<nav transition:fly={{ x: -250, opacity: 1 }}>
		<div class="burger">
			<Hamburger bind:open={show} />
		</div>
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
		padding: 0rem 1rem 0.6rem;
		border-left: 1px solid #aaa;
		overflow-y: auto;
		width: 10rem;
		display: flex;
		flex-direction: column;
		z-index: 1;
		box-shadow: 3px 1px rgb(8, 96, 95);
	}
	nav button {
		padding: 0.4rem;
		margin: 0.2rem;
		border-radius: 1rem;
	}
	.burger {
		align-self: flex-end;
		padding-bottom: 1rem;
	}
</style>
