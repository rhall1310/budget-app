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

<h1>Budget Calculator</h1>
<p>You can use this tool to calculate your monthly budget</p>
<div>
	<p>What is your monthly income?</p>
	{#each incomeCount as inc}
		<label for="income">{inc}:</label>
		<input type="text" name="income" bind:value={income} />
	{/each}
	<label for="add-income">Add another source of income</label>
	<input type="text" name="add-income" placeholder="Income source" bind:value={newIncome} />
	<button on:click={addIncome(newIncome)}>+</button>
</div>
<div>
	<div>
		<p>What is your monthly spending?</p>
		{#each expendCount as exp}
			<label for="income">{exp}:</label>
			<input type="text" name="income" bind:value={income} />
		{/each}
		<label for="add-expend">Add another source of income</label>
		<input type="text" name="add-expend" placeholder="Expenditure" bind:value={newExpend} />
		<button on:click={addExpenditure(newExpend)}>+</button>
	</div>
</div>
<p>Your total savings are: {income - expend}</p>
