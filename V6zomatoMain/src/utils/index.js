export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        const geolocation = navigator.geolocation;

        if(!geolocation) {
            reject(new Error('Not Supported'));
        }

        geolocation.getCurrentPosition((position) => {
            console.log(position)
            resolve(position.coords);
        }, () => {
            reject(new Error('Permission denied')
            );
        });
    });
}