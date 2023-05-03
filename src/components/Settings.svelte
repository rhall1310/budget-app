<script>
	export let show = false;
</script>

<main>
	<div>
		<button on:click={() => (show = !show)}>Close X</button>
		<h1>Hello there</h1>
	</div>
</main>

<style>
	main {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 95%;
		height: 95%;
		background-color: rgb(248, 242, 234);
		z-index: 1;
	}
	div {
		display: flex;
		flex-direction: column;
	}
	button {
		align-self: flex-end;
	}
</style>
