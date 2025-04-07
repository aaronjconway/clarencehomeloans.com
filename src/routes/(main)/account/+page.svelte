<script lang="ts">
    import { mimeChecker } from '$lib/utils.js'
    import UploadBox from '$lib/components/UploadBox.svelte'
    import { format } from 'date-fns'
    import UserDetails from '$lib/components/UserDetails.svelte'
    import { enhance } from '$app/forms'

    const { data } = $props()
    const docs = $derived(data.documents)
</script>

<h1>Welcome to your account!</h1>

<section>
    <h3>Upload Documents</h3>
    <UploadBox {data} />
</section>

<h3>My Uploaded Documents</h3>
<div class="table-wrapper">
    <!-- need for compatibility with s3. we are forced to have empty folder -->
    {#if docs && docs.length > 0 && docs[0]?.name != '.emptyFolderPlaceholder'}
        <table class="documents">
            <thead>
                <tr>
                    <th>Document</th>
                    <th>Upload Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {#each docs as doc}
                    {#if doc.name != '.emptyFolderPlaceholder'}
                        <tr>
                            <td>{doc.name}</td>
                            <td
                                >{format(
                                    doc.created_at,
                                    'MMMM dd yyyy hh:mm a'
                                )}</td
                            >
                            <td
                                >{mimeChecker(doc.metadata.mimetype) ??
                                    'Unknown'}</td
                            >
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    {:else}
        Upload some documents!
    {/if}

    {#if docs && docs.length > 0 && docs[0]?.name != '.emptyFolderPlaceholder'}
        <div class="form-wrapper">
            <form action="?/deleteDocuments" method="post" use:enhance>
                <button class="warn primary" type="submit"
                    >Delete All Documents</button
                >
            </form>
        </div>
    {/if}
</div>

<UserDetails {data} />

<style lang="scss">
    .form-wrapper {
        margin-top: var(--space-sm);
    }
    h3 {
        margin-top: var(--space-lg);
    }

    @keyframes l15 {
        100% {
            transform: rotate(1turn);
        }
    }

    .table-wrapper {
        margin-top: var(--space);
        width: 100%;
    }
</style>
