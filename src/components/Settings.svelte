<script>
	import { settings, styling } from '../store.js';

	let color = '#FF0000';

	function toggleDarkMode() {
		$styling.themeColor = 'rgb(0, 0, 0)';
		console.log($styling.themeColor);
	}
</script>

<div style="--theme-color: {color}">
	<h1>Settings</h1>
	<label for="period">Select a time period</label>
	<select name="period" id="period" bind:value={$settings.period}>
		<option value="monthly">Monthly</option>
		<option value="yearly">Yearly</option>
	</select>
	<button on:click={toggleDarkMode}>Dark mode</button>
</div>

<style global>
	h1 {
		color: black;
	}
</style>
