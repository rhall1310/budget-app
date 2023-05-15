<script>
	import { settings } from '../store.js';
	export let show = false;
</script>

<div>
	<button on:click={() => (show = !show)}>Close X</button>
	<h1>Settings</h1>

	<label for="period">Select budget time period</label>
	<select name="period" id="period" bind:value={$settings.period}>
		<option value="monthly">Monthly</option>
		<option value="annual">Annual</option>
		<option value="weekly">Weekly</option>
	</select>

	<div class="settings-rows">
		<input type="checkbox" name="darkMode" id="darkMode" bind:value={$settings.darkMode} />
		<label for="darkMode">Dark mode?</label>
	</div>
</div>

<style>
	select {
		margin: 1rem;
	}

	.settings-rows {
		display: flex;
		flex-direction: row;
		padding: 1rem;
	}

	button {
		align-self: flex-end;
	}
	h1 {
		color: rgb(8, 96, 95);
	}
</style>
