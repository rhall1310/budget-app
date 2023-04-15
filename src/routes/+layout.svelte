<body>
	<aside>
		<h1><a href="/"> Budget Calculator</a></h1>
		<nav>
			<a href="/settings">Settings</a>
			<a href="/about">About</a>
		</nav>
	</aside>

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
		background-color: rgb(112, 201, 201);
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	nav {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	a {
		text-decoration: none;
	}
</style>
