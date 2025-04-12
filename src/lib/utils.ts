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

export function formatToUSD(value: string | number) {
    const number = parseFloat(value);
    if (isNaN(number)) return 'Invalid number';
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}




export const formatFileSize = (bytes: number): string => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Bytes";

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}

export function mapGoogleAddressToTypes(addressComponents) {
    const result = {};
    if (!addressComponents) {
        result.state = ""
        result.city = ""
        result.county = ""
        result.zip = ""
        return
    }

    addressComponents.forEach(component => {
        component.types.forEach(type => {
            // Check and map only relevant address components (State, City, County, and ZIP)
            switch (type) {
                case 'administrative_area_level_1':  // State
                    result.state = component.long_name;
                    break;
                case 'locality':  // City
                    result.city = component.long_name;
                    break;
                case 'administrative_area_level_2':  // County
                    result.county = component.long_name;
                    break;
                case 'postal_code':  // ZIP
                    result.zip = component.long_name;
                    break;
                default:
                    break;
            }
        });
    });

    return result;
}
