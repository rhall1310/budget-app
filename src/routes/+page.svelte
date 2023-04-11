<script>
	export let newIncome;
	export let income = [{ name: 'Salary', amount: 0 }];
	export let newExpend;
	export let expend = [{ name: 'Rent', amount: 5 }];

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
	<h1>Budget Calculator</h1>
	<p>You can use this tool to calculate your monthly budget</p>
	<div>
		<p>What is your monthly income?</p>
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
		<p>What is your monthly spending?</p>
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

	<p>Your total savings are: {totalIncome - totalExpend}</p>
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
</style>
