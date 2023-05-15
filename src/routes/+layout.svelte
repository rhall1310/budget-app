<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Settings from '../components/Settings.svelte';

	let sidebarShow = false;

	let dialog;
	let showModal = false;

	$: if (dialog && showModal) dialog.showModal();
</script>

<body>
	<dialog
		bind:this={dialog}
		on:close={() => (showModal = false)}
		on:click|self={() => dialog.close()}
	>
		<Settings />

		<button on:click={() => dialog.close()}>close modal</button>
	</dialog>

	<header>
		<aside>
			<button on:click={() => (sidebarShow = !sidebarShow)}>Toggle Sidebar</button><Sidebar
				bind:show={sidebarShow}
				bind:showSettings={showModal}
			/>
		</aside>
		<h1><a href="/"> Budget Calculator</a></h1>
	</header>

	<main>
		<slot />
	</main>
</body>

<style>
	dialog {
		background-color: rgb(232, 238, 242);
		z-index: 1;
		border-radius: 1rem;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		align-items: center;
	}
	dialog::backdrop {
		background-color: darkorange;
	}
	body {
		margin: 0;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	aside {
		position: fixed;
	}
	header {
		background-color: rgb(51, 215, 209);
	}

	h1 {
		text-align: center;
		margin: 0;
	}
	a {
		text-decoration: none;
	}
	button {
		background-color: rgb(255, 186, 73);
	}
</style>
