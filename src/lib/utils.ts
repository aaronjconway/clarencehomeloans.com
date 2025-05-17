import yaml from 'js-yaml';

export function jsonToPrettyYaml(json: object): string {
    try {
        return yaml.dump(json, {
            indent: 2,        // number of spaces for indentation
            noArrayIndent: false,
            lineWidth: 80,    // wrap lines at this width
            noRefs: true,     // don't use anchors & references
        });
    } catch (e) {
        console.error('Failed to convert JSON to YAML:', e);
        return '';
    }
}




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
    const result = {}

    if (!addressComponents) {
        result.street_number = ""
        result.street_name = ""
        result.state = ""
        result.city = ""
        result.county = ""
        result.zip = ""
        return
    }

    addressComponents.forEach(component => {
        component.types.forEach(type => {
            switch (type) {
                case 'street_number':
                    result.street_number = component.long_name;
                    break;
                case 'route':
                    result.street_name = component.long_name;
                    break;
                case 'administrative_area_level_1':
                    result.state = component.long_name;
                    break;
                case 'locality':
                    result.city = component.long_name;
                    break;
                case 'administrative_area_level_2':
                    result.county = component.long_name;
                    break;
                case 'postal_code':
                    result.zip = component.long_name;
                    break;
                default:
                    break;
            }
        });
    });

    return result;
}

export function generateTOC(containerClass) {
    const containers = document.getElementsByClassName(containerClass);
    const allHeadings = [];

    // Gather all h2, h3, h4 from all matched containers
    Array.from(containers).forEach(container => {
        const headings = container.querySelectorAll('h2, h3, h4');
        headings.forEach(h => allHeadings.push(h));
    });

    const toc = [];
    const stack = [{ level: 1, children: toc }];

    allHeadings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.slice(1));
        const id = heading.id || `heading-${index}`;
        heading.id = id;

        const node = {
            id,
            text: heading.textContent,
            level,
            children: [],
        };

        while (stack.length && level <= stack[stack.length - 1].level) {
            stack.pop();
        }

        stack[stack.length - 1].children.push(node);
        stack.push(node);
    });

    return toc;
}

export function amortization({ years = 30, amount = 100000, rate = 5 }) {
    const monthlyRate = rate / 100 / 12; // Monthly interest rate
    const numberOfPayments = years * 12; // Total number of payments (months)

    // Monthly payment calculation using the amortization formula
    const monthlyPayment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    // Return the initial full payment (principal + interest)
    return monthlyPayment.toFixed(2);
}

export function getStateAbbr(state: string) {
    const states: Record<string, string> = {
        "alabama": "AL", "alaska": "AK", "arizona": "AZ", "arkansas": "AR", "california": "CA",
        "colorado": "CO", "connecticut": "CT", "delaware": "DE", "florida": "FL", "georgia": "GA",
        "hawaii": "HI", "idaho": "ID", "illinois": "IL", "indiana": "IN", "iowa": "IA",
        "kansas": "KS", "kentucky": "KY", "louisiana": "LA", "maine": "ME", "maryland": "MD",
        "massachusetts": "MA", "michigan": "MI", "minnesota": "MN", "mississippi": "MS", "missouri": "MO",
        "montana": "MT", "nebraska": "NE", "nevada": "NV", "new hampshire": "NH", "new jersey": "NJ",
        "new mexico": "NM", "new york": "NY", "north carolina": "NC", "north dakota": "ND", "ohio": "OH",
        "oklahoma": "OK", "oregon": "OR", "pennsylvania": "PA", "rhode island": "RI", "south carolina": "SC",
        "south dakota": "SD", "tennessee": "TN", "texas": "TX", "utah": "UT", "vermont": "VT",
        "virginia": "VA", "washington": "WA", "west virginia": "WV", "wisconsin": "WI", "wyoming": "WY"
    };

    const normalized = state.trim().toLowerCase();
    return states[normalized] || "";
}
