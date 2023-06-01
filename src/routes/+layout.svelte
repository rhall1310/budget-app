<script>
	import Sidebar from '../components/Sidebar.svelte';
	import { settings } from '../store.js';

	let sidebarShow = false;
</script>

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

	button {
		align-self: flex-end;
	}
	h1 {
		color: rgb(8, 96, 95);
	}
</style>
