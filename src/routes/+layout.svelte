<script>
	import Sidebar from '../components/Sidebar.svelte';
	import { settings } from '../store.js';

	let sidebarShow = false;
	let dark = false;
	const toggleTheme = () => (dark = dark === false);
</script>

<svelte:head>
	{#if dark}
		<link rel="stylesheet" href="src\global.css" />
	{:else}<link rel="stylesheet" href="src\dark-mode.css" />{/if}
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
		<button on:click={toggleTheme}> toggle theme </button>

		<slot />
	</main>
</body>

<style>
</style>
