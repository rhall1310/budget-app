<script>
	export let newIncome;
	export let income = [{ name: 'Salary', amount: 0 }];

	export let newExpend;
	export let expend = [{ name: 'Rent', amount: 0 }];

	function addIncome(newName) {
		income = [...income, { name: newName, amount: 0 }];
	}

	function addExpenditure(newName) {
		expend = [...expend, { name: newName, amount: 0 }];
	}

	function calculateSum(array, property) {
		const total = array.reduce((accumulator, object) => {
			return accumulator + object[property];
		}, 0);

		return total;
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
				<input type="text" name="income" bind:value={inc.amount} />
			</li>
		{/each}

		<input type="text" name="add-income" placeholder="Add income source" bind:value={newIncome} />
		<button on:click={addIncome(newIncome)}>+</button>
	</div>

	<div>
		<p>What is your monthly spending?</p>
		{#each expend as exp, index}
			<li>
				{index + 1}.
				<label for="income">{exp.name}:</label>
				<input type="text" name="income" bind:value={exp.amount} />
			</li>
		{/each}

		<input type="text" name="add-expend" placeholder="Add expenditure" bind:value={newExpend} />
		<button on:click={addExpenditure(newExpend)}>+</button>
		<p>{calculateSum(expend, 'amount')}</p>
	</div>

	<p>Your total savings are: {income - expend}</p>
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
