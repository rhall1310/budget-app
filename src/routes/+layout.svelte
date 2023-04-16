<script>
	import Sidebar from '../components/Sidebar.svelte';
	let sidebar_show = false;
</script>

<body>
	<header>
		<aside>
			<button on:click={() => (sidebar_show = !sidebar_show)}>Toggle Sidebar</button><Sidebar
				bind:show={sidebar_show}
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
		background-color: aquamarine;
	}
	h1 {
		text-align: center;
	}
	a {
		text-decoration: none;
	}
</style>
