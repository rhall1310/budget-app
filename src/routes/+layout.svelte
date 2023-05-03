<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Settings from '../components/Settings.svelte';

	let sidebarShow = false;
	let showSettings = false;
</script>

<body>
	{#if showSettings}
		<Settings bind:show={showSettings} />
	{/if}
	<header>
		<aside>
			<button on:click={() => (sidebarShow = !sidebarShow)}>Toggle Sidebar</button><Sidebar
				bind:show={sidebarShow}
			/>
		</aside>
		<h1><a href="/"> Budget Calculator</a></h1>
	</header>
	<button on:click={() => (showSettings = !showSettings)}> Show modal </button>

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
	header {
		background-color: aquamarine;
	}
	h1 {
		text-align: center;
	}
	a {
		text-decoration: none;
	}
</style>
