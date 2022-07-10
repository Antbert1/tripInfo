export const TRIP_INFO = 'TRIP_INFO';
export const ERROR = 'ERROR';

export function setTripInfo(tripInfo) {
    return {
        type: TRIP_INFO,
        tripInfo,
    };
}

export function setError(error) {
    return {
        type: ERROR,
        error,
    };
}
