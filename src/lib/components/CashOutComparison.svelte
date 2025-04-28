<script lang="ts">
	// some state
	import { formatToUSD, amortization } from '$lib/utils';
	let loan_amount = $state(200000);
	let cashOutAmount = $state(30000);
</script>

<div class="range-input">
	<div class="income_amount">
		<div>
			For {formatToUSD(cashOutAmount)} worth of debt
		</div>
		<div>
			cost of current debt {formatToUSD(
				amortization({ years: 4, amount: cashOutAmount, rate: 22 })
			)}
		</div>
		<div>
			current {formatToUSD(
				amortization({ years: 30, amount: loan_amount, rate: 3 })
			)}
		</div>
		<div>
			current {formatToUSD(
				amortization({
					years: 30,
					amount: loan_amount + cashOutAmount + 10000,
					rate: 7.25
				})
			)}
		</div>
		<div>
			While mortgage debt over 30 years at 7%:
			{formatToUSD(amortization({ years: 30, amount: cashOutAmount, rate: 7 }))}
		</div>
	</div>
	{cashOutAmount}
	<input
		class="custom-slider"
		name="income_amount"
		type="range"
		min="0"
		max="200000"
		step="1000"
		bind:value={cashOutAmount}
	/>
	{loan_amount}
	<input
		class="custom-slider"
		name="income_amount"
		type="range"
		min="0"
		max="400000"
		step="1000"
		bind:value={loan_amount}
	/>
</div>

<style lang="scss">
</style>
