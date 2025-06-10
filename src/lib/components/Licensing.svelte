<script lang="ts">
	let dialog: HTMLDialogElement;

	async function handleReadMore() {
		dialog.open ? dialog.close() : dialog.showModal();
	}
</script>

<button
	class="link"
	onclick={handleReadMore}
>
	Licensing
</button>
<dialog bind:this={dialog}>
	<div class="inner-dialog">
		<div class="container">
			<header>
				<h1>Licensing</h1>
			</header>
			<div class="content">
				<p>
					The <a
						href="https://www.nmlsconsumeraccess.org/"
						rel="nofollow noopener noreferrer external"
						target="_blank"
					>
						Nationwide Multistate Licensing System &amp; Registry (NMLS)
					</a>
					 allows consumers to verify anyone’s licensing through its consumer access
					portal.
				</p>
				<p>
					Each year, brokers must complete numerous hours of continuing
					education to stay informed and maintain accuracy when assisting
					consumers. However, banks are not required to undergo this additional
					educational process.
				</p>
				<p>Austin Clarence NMLS - 1509690</p>
				<hr />
				<h2>State Specific Licensing</h2>
				<p>
					State-specific licensing requirements vary to ensure brokers
					understand local regulations and market conditions. These rules help
					protect consumers by ensuring compliance with state laws, which banks
					are not always subject to.
				</p>
				<table>
					<thead>
						<tr>
							<th>State</th>
							<th>License</th>
							<th>Original Issue Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Arizona</td>
							<td>0937532</td>
							<td>08/24/2016</td>
						</tr>
						<tr>
							<td>California</td>
							<td>CA-DBO1509690</td>
							<td>10/24/2016</td>
						</tr>
						<tr>
							<td>Colorado</td>
							<td>100504667</td>
							<td>10/24/2016</td>
						</tr>
						<tr>
							<td>Texas</td>
							<td>SML</td>
							<td>01/18/2023</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<form method="dialog">
		<button>close</button>
	</form>
</dialog>
