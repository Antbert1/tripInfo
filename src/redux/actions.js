export const TRIP_INFO = 'TRIP_INFO';

export function setTripInfo(tripInfo) {
    return {
        type: TRIP_INFO,
        tripInfo,
    };
}
