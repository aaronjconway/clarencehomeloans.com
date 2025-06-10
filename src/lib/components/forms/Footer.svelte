<script lang="ts">
	import Privacy from '../Privacy.svelte';
	import Licensing from '../Licensing.svelte';
</script>

<div class="footer">
	<hr />
	<div class="modal-wrapper">
		<Privacy />
		<Licensing />
	</div>
	<p>
		Clarence Home Loans is Powered by Nexa Mortgage, a mortgage broker NMLS
		#1660690, as required by law, with its main office located at 3100 W Ray
		Road #201, Office #209, Chandler AZ 85226.Corporate phone number (602)
		344-9333 This site is directed at, and made available to, persons in the
		continental U.S., Alaska and Hawaii only. Arizona State License - AZMB
		0944059. This form does NOT constitute a commitment to lend.
	</p>
	<p>Clarence Home Loans is a Equal Housing Opportunity Company.</p>
</div>

<style lang="scss">
	.footer {
		display: flex;
		font-size: var(--text-sm);
		flex-direction: column;
		justify-content: center;
		padding: 0 5%;
		margin: 0 auto;
		max-width: 1280px;
	}

	.modal-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
		gap: var(--space);
	}
</style>
