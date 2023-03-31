<body>
	<aside>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/settings">Settings</a>
		</nav>
	</aside>

	<main>
		<slot />
	</main>
</body>

<style>
	body {
		display: flex;
		margin: 0;
	}
	aside {
		background-color: aqua;
	}
	nav {
		display: flex;
		flex-direction: column;
		padding-right: 2rem;
	}
</style>
