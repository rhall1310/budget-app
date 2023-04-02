<script>
	export let expend;
	export let income;
</script>

<h1>Budget Calculator</h1>
<p>You can use this tool to calculate your monthly budget</p>
<div>
	<label for="income">What is your monthly income?</label>
	<input type="text" name="expenditure" id="" bind:value={income} />
</div>
<label for="income">What is your monthly expenditure?</label>
<input type="text" name="total" id="" bind:value={expend} />
<p>Your total savings are: {income - expend}</p>
