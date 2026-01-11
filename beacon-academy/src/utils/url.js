
export const getBaseUrl = () => {
    // Check if running in a browser environment
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    // Fallback for server-side or other environments
    return 'https://www.beaconhometutoring.com'; // Replace with your actual domain
};
