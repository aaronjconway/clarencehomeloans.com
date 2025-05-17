<script lang="ts">
	import * as GMAPILoader from '@googlemaps/js-api-loader';
	import { env } from '$env/dynamic/public';
	import { mapGoogleAddressToTypes } from '$lib/utils';
	import NextButton from '../NextButton.svelte';

	// should be an input for an address
	// disclaimer for any location
	// delay on both server and client to rate limit
	// TODO:-- see if google has built in rate limiting
	const { stepName = '', formStore = $bindable() } = $props();
	const { Loader } = GMAPILoader;

	let searchInput: HTMLInputElement;
	let address = $state({});

	$effect(async () => {
		const googleMapsApiKey = env.PUBLIC_PLACES_API_KEY ?? '';
		const loader = new Loader({ apiKey: googleMapsApiKey });
		await loader.importLibrary('places');

		const autocomplete = new google.maps.places.Autocomplete(searchInput, {
			// TODO:-- get only residential address's
			// types: ['locality'],
			componentRestrictions: { country: 'us' }
		});

		autocomplete.addListener('place_changed', () => {
			address = autocomplete.getPlace();
			formStore.data[stepName] = address?.formatted_address;
			const addressDetails = mapGoogleAddressToTypes(
				address.address_components
			);

			if (addressDetails) {
				formStore.data['street_number'] = addressDetails.street_number;
				formStore.data['street_name'] = addressDetails.street_name;
				formStore.data['city'] = addressDetails.city;
				formStore.data['county'] = addressDetails.county;
				formStore.data['state'] = addressDetails.state;
				formStore.data['zip'] = addressDetails.zip;
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

				return;
			}
		});

		return () => {};
	});
</script>

<div class="form-header">
	<h1>Where is your property located?</h1>
	<i>If you're unsure (or don't want to), select an area close by.</i>
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
	<NextButton {formStore} />
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
		border-radius: var(--border-radius);
	}
</style>
