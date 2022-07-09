export function getTripInfo(preUrl, id) {
    return fetch(`${preUrl}v1/trips/${id}`)
        .then(response => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.log(error);
            return ("Error");
        });
}