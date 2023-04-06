<script>
	export let expend;
	export let newExpend;
	export let expendCount = ['Rent'];
	export let income;
	export let newIncome;
	export let incomeCount = ['Salary'];

	function addIncome(name) {
		incomeCount = [...incomeCount, name];
	}

	function addExpenditure(name) {
		expendCount = [...expendCount, name];
	}
</script>

<main>
	<h1>Budget Calculator</h1>
	<p>You can use this tool to calculate your monthly budget</p>
	<div>
		<p>What is your monthly income?</p>
		{#each incomeCount as inc, index}
			<li>
				{index + 1}.
				<label for="income">{inc}:</label>
				<input type="text" name="income" bind:value={income} />
			</li>
		{/each}

		<input type="text" name="add-income" placeholder="Add income source" bind:value={newIncome} />
		<button on:click={addIncome(newIncome)}>+</button>
	</div>
	<div>
		<div>
			<p>What is your monthly spending?</p>
			{#each expendCount as exp, index}
				<li>
					{index + 1}.
					<label for="income">{exp}:</label>
					<input type="text" name="income" bind:value={expend} />
				</li>
			{/each}

			<input type="text" name="add-expend" placeholder="Add expenditure" bind:value={newExpend} />
			<button on:click={addExpenditure(newExpend)}>+</button>
		</div>
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
</style>
