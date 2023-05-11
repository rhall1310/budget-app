<script>
	export let newIncome;
	export let income = [{ name: 'Salary', amount: 0 }];
	export let newExpend;
	export let expend = [{ name: 'Rent', amount: 5 }];
	export let currency = '£';

	import { settings } from '../store.js';

	$: totalExpend = expend.reduce((acc, expend) => acc + expend.amount, 0);
	$: totalIncome = income.reduce((acc, income) => acc + income.amount, 0);

	function addIncome(newName) {
		income = [...income, { name: newName, amount: 0 }];
	}

	function addExpenditure(newName) {
		expend = [...expend, { name: newName, amount: 0 }];
	}
</script>

<main>
	<p>You can use this tool to calculate your {$settings.period} budget.</p>
	<select name="currency" id="currency-choice" bind:value={currency}>
		<option value="£"> GBP(£)</option>
		<option value="$">$ USD</option>
		<option value="€">€ Euros</option></select
	>
	<p>Select a currency</p>
	<div>
		<h2>What is your {$settings.period} income?</h2>
		{#each income as inc, index}
			<li>
				{index + 1}.
				<label for="income">{inc.name}:</label>
				<input type="number" name="income" bind:value={inc.amount} />
			</li>
		{/each}

		<input type="text" name="add-income" placeholder="Add income source" bind:value={newIncome} />
		<button on:click={addIncome(newIncome)} disabled={!newIncome}>+</button>
	</div>

	<div>
		<h2>What is your {$settings.period} spending?</h2>
		{#each expend as exp, index}
			<li>
				{index + 1}.
				<label for="income">{exp.name}:</label>
				<input type="number" name="income" bind:value={exp.amount} />
			</li>
		{/each}

		<input type="text" name="add-expend" placeholder="Add expenditure" bind:value={newExpend} />
		<button on:click={addExpenditure(newExpend)} disabled={!newExpend}>+</button>
	</div>

	<h2>Your total savings are: {currency}{totalIncome - totalExpend}</h2>
</main>

<style>
	main {
		margin: 1rem;
	}
	li {
		list-style: none;
	}

	input {
		margin: 0.2rem;
	}
	h2 {
		color: rgb(8, 96, 95);
	}
</style>
