<script>
	import { settings } from '../store.js';
</script>

<div class="settings">
	<h1>Settings</h1>
	<div>
		<label for="period">Select a time period</label>
		<select name="period" id="period" bind:value={$settings.period}>
			<option value="monthly">Monthly</option>
			<option value="yearly">Yearly</option>
		</select>
	</div>
	<div>
		<input type="checkbox" name="dark-mode" id="" bind:checked={$settings.darkMode} />
		<label for="dark-mode">Dark mode?</label>
	</div>
</div>

<style global>
	h1 {
		background-color: var(--backgroundColor);
	}
	.settings {
		display: flex;
		flex-direction: column;
	}
</style>
