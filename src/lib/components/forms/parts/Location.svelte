<script lang="ts">
	import * as GMAPILoader from '@googlemaps/js-api-loader';
	import { env } from '$env/dynamic/public';
	import { mapGoogleAddressToTypes } from '$lib/utils';

	// should be an input for an address
	// disclaimer for any location
	// delay on both server and client to rate limit
	// TODO:-- see if google has built in rate limiting
	const { stepName = '', formStore = $bindable() } = $props();
	const { Loader } = GMAPILoader;

	function handleClick() {
		if (formStore.data[stepName]) {
			formStore.nextStep();
		} else {
			alert('Please enter a city');
		}
	}

	let searchInput: HTMLInputElement;
	let address = $state({});

	$effect(async () => {
		const googleMapsApiKey = env.PUBLIC_PLACES_API_KEY ?? '';
		const loader = new Loader({ apiKey: googleMapsApiKey });
		await loader.importLibrary('places');

		const autocomplete = new google.maps.places.Autocomplete(searchInput, {
			types: ['locality', 'postal_code'],
			componentRestrictions: { country: 'us' }
		});

		autocomplete.addListener('place_changed', () => {
			address = autocomplete.getPlace();
			formStore.data[stepName] = address?.formatted_address;
			const addressDetails = mapGoogleAddressToTypes(
				address.address_components
			);

			if (addressDetails) {
				formStore.data['state'] = addressDetails.state;
				formStore.data['zip'] = addressDetails.zip;
				formStore.data['city'] = addressDetails.city;
				formStore.data['county'] = addressDetails.county;
			}
		});

		searchInput.addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key == 'Enter') {
				//set the formdata
				const selected_item = document.querySelector('.pac-item')?.textContent;
				searchInput.value = selected_item ?? '';

				// The user already selected a result using the arrow
				// keys - we shouldn't override it just return
				if (document.querySelector('.pac-item-selected')) {
					return;
				}

				searchInput.dispatchEvent(
					new KeyboardEvent('keydown', {
						key: 'ArrowDown',
						code: 'ArrowDown',
						keyCode: 40
					})
				);

				address = autocomplete.getPlace();
				formStore.data[stepName] = address?.formatted_address;
				const addressDetails = mapGoogleAddressToTypes(
					address?.address_components
				);

				// if (addressDetails) {
				//     formStore.data['state'] = addressDetails.state
				//     formStore.data['zip'] = addressDetails.zip
				//     formStore.data['city'] = addressDetails.city
				//     formStore.data['county'] = addressDetails.county
				// }
				return;
			}
		});

		return () => {};
	});
</script>

<div class="form-header">
	<h1>What city would you like to buy in?</h1>
	<i>If you don't know, select an area close by.</i>
</div>

<div class="step-wrapper">
	<div class="input-wrapper">
		<input
			type="text"
			name="location"
			id="autocomplete"
			placeholder="Search for a city..."
			bind:this={searchInput}
			value=""
			autocomplete="off"
		/>
	</div>
	<div class="address">{address?.formatted_address}</div>
	<div class="button-wrapper">
		<button
			class="primary"
			onclick={() => {
				handleClick();
			}}
		>
			Next
		</button>
	</div>
</div>

<style lang="scss">
	.address {
		text-align: center;
		font-size: var(--space-md);
	}
	.step-wrapper {
		display: flex;
		flex-direction: column;
		align-items: space-between;
		gap: var(--space-xl);
	}

	.input-wrapper {
		display: flex;
		flex-direction: column;
	}
	#autocomplete {
		display: flex;
		min-width: 300px;
		margin: 0 auto;
		padding: var(--space-xs) var(--space-sm);
		border: solid 1px var(--grey-500);
		border-radius: 4px;
	}
</style>
