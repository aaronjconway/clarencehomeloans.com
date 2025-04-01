//takes in a mime type and returns the friendly name if allowed
export const mimeChecker = (mimeType: string) => {
    const mimeMap: Record<string, string> = {
        'text/plain': 'Plain Text',
        'application/pdf': 'PDF Document',
        'image/jpeg': 'JPEG Image',
        'image/png': 'PNG Image',
        'image/gif': 'GIF Image',
        'image/webp': 'WebP Image',
        'image/heic': 'HEIC Image',
        'image/heif': 'HEIF Image',
        'image/tiff': 'TIFF Image',
    }
    if (mimeMap[mimeType]) {
        return mimeMap[mimeType]
    } else {
        return
    }

}

export const formatFileSize = (bytes: number): string => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Bytes";

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}
