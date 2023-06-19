<script>
	import Sidebar from '../components/Sidebar.svelte';
	import { settings } from '../store.js';

	let sidebarShow = false;
</script>

<svelte:head>
	{#if $settings.darkMode}
		<link rel="stylesheet" href="\src\dark-mode.css" />
	{:else}<link rel="stylesheet" href="\src\global.css" />{/if}
</svelte:head>
<body>
	<header>
		<aside>
			<Sidebar bind:show={sidebarShow} />
		</aside>
		<h1><a href="/"> Budget Calculator</a></h1>
	</header>

	<main>
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

	h1 {
		color: rgb(8, 96, 95);
	}
</style>
