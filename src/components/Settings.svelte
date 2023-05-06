<script>
	import { settings } from '../store.js';
	export let show = false;
</script>

<main>
	<div>
		<button on:click={() => (show = !show)}>Close X</button>
		<h1>Hello there</h1>
		<select name="period" id="" bind:value={$settings.period}>
			<option value="monthly">Monthly</option>
			<option value="annual">Annual</option>
		</select>
		<input type="checkbox" name="darkMode" id="d" bind:value={$settings.darkMode} />
		<label for="darkMode">Dark mode?</label>
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
