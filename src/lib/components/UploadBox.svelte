<script lang="ts">
    import { Dashboard } from '@uppy/svelte'
    import Uppy from '@uppy/core'
    import Tus from '@uppy/tus'

    import '@uppy/core/dist/style.css'
    import '@uppy/dashboard/dist/style.css'
    import { invalidate } from '$app/navigation'

    const { data } = $props()
    const supabaseStorageURL = `${data.supabase.storageUrl}/upload/resumable`

    //hashmap
    let c: Record<string, number> = {}
    //func for adding file number if dupes
    const t = (x: string, n: number) => x + ' (' + n + ')'
    //load the hash map
    data.documents.map((i: File) => {
        c[i.name] = 1
        return
    })

    console.log(c)

    const uppy = new Uppy({
        onBeforeFileAdded(currentFile) {
            let n = 1
            const name = currentFile.name as string
            if (c[name]) {
                while (c[t(name, n)]) {
                    n++
                }
                c[t(name, n)] = 1
                const newItemId = crypto.randomUUID()
                const modifiedFile = {
                    ...currentFile,
                    id: `${currentFile.id}-${newItemId}`,
                    name: `${t(name, n)}`,
                }
                return modifiedFile
            } else {
                //else just renturn normal
                const newItemId = crypto.randomUUID()
                const modifiedFile = {
                    ...currentFile,
                    id: `${currentFile.id}-${newItemId}`,
                    name: `${name}`,
                }
                return modifiedFile
            }
        },
        restrictions: {
            allowedFileTypes: ['image/*', 'application/pdf'],
        },
    }).use(Tus, {
        endpoint: supabaseStorageURL,
        headers: {
            authorization: data.session.access_token,
            'x-upsert': 'true',
        },
        uploadDataDuringCreation: true,
        removeFingerprintOnSuccess: true,
        chunkSize: 6 * 1024 * 1024,
        allowedMetaFields: [
            'bucketName',
            'objectName',
            'contentType',
            'cacheControl',
        ],
    })

    uppy.on('file-added', (file) => {
        const supabaseMetadata = {
            bucketName: 'documents',
            objectName: `${data.session.user.id}/${file.name}`,
            contentType: file.type,
        }

        file.meta = {
            ...file.meta,
            ...supabaseMetadata,
        }
    })

    uppy.on('complete', (result) => {
        invalidate('supabase:documents')
    })

    const dasboardConfig = { height: 400 }
</script>

<div class="wrapper">
    <Dashboard props={dasboardConfig} {uppy} />
</div>

<style>
    :global(.uppy-Dashboard-inner) {
        width: 100% !important;
        min-height: 200px !important;
    }

    :global(.uppy-Container) {
        width: 100% !important;
        min-height: 200px !important;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>
