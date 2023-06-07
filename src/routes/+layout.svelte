<script>
	import Sidebar from '../components/Sidebar.svelte';
	import { settings } from '../store.js';

	let sidebarShow = false;
	let dark = false;
</script>

<svelte:head>
	{#if dark}
		<link rel="stylesheet" href="src\dark-mode.css" />
	{:else}<link rel="stylesheet" href="src\global.css" />{/if}
</svelte:head>
<body>
	<header>
		<aside>
			<button on:click={() => (sidebarShow = !sidebarShow)}>Toggle Sidebar</button><Sidebar
				bind:show={sidebarShow}
			/>
		</aside>
		<h1><a href="/"> Budget Calculator</a></h1>
	</header>

	<main>
		<input type="checkbox" name="" id="dark=mode" bind:checked={dark} />

		<slot />
	</main>
</body>

<style>
	body {
		margin: 0;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	aside {
		position: fixed;
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

	button {
		align-self: flex-end;
	}
	h1 {
		color: rgb(8, 96, 95);
	}
</style>
