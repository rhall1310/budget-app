<script>
	import { settings } from '../store.js';
</script>

<div class="settings">
	<h1>Settings</h1>
	<div class="settings-row">
		<label for="period">Select a time period</label>
		<select name="period" id="period" bind:value={$settings.period}>
			<option value="monthly">Monthly</option>
			<option value="yearly">Yearly</option>
		</select>
	</div>
	<div class="settings-row">
		<input type="checkbox" name="dark-mode" id="" bind:checked={$settings.darkMode} />
		<label for="dark-mode">Enable dark mode?</label>
	</div>
</div>

<style>
	h1 {
		background-color: var(--backgroundColor);
	}
	.settings {
		display: flex;
		flex-direction: column;
	}
	.settings-row {
		margin-bottom: 1rem;
	}
</style>
