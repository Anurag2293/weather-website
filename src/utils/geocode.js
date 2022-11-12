// Position Stack API for geocoding : https://positionstack.com/quickstart
import request from "postman-request";

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=1ae29fc941299790de2ef9512df49bfe&query='
                + encodeURIComponent(address) + '&limit=1';
    const params = {
        url,
        json : true
    }
    request(params, (error, { body }={}) => {
        if (error) {
            callback('Unable to connect to location Services. Please check your internet connection', undefined)
        } else if (!body.data) {
            callback('Unable to process your request at this moment. Please try again', undefined)
        } else {
            const res = body.data[0];

            if (!res) {
                callback('No data found. Please try again', undefined)
            } else {
                callback(undefined, {
                    latitude : res.latitude,
                    longitude : res.longitude,
                    location : res.label
                })
            }
        }
    }) 
}

export default geocode;