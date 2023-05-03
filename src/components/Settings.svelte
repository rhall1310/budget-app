<script>
	export let show = false;
</script>

<main>
	<h1>Hello there</h1>
	<button on:click={() => (show = !show)}>Close X</button>
</main>

<style>
	main {
		position: absolute;
		width: 95%;
		height: 95%;
		top: 1rem;
		background-color: antiquewhite;
	}
</style>
