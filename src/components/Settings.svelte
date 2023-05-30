<script>
	import { settings } from '../store.js';
</script>

<div>
	<h1>Settings</h1>
	<label for="period">Select a time period</label>
	<select name="period" id="period" bind:value={$settings.period}>
		<option value="monthly">Monthly</option>
		<option value="yearly">Yearly</option>
	</select>
</div>
