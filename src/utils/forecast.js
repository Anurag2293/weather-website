// Weather Stack API for forecast : https://weatherstack.com/dashboard
import request from "postman-request";

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=88859bc61b8c85589acb33ad6c6ef809&query='
                + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m';
    
    const params = {
        url,
        json : true
    }

    request(params, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('We are unable to connect to servers. Please try again!', undefined);
        } else {
            const res = body.current;
            const responseString = res.weather_descriptions[0] + '. It is currently ' + res.temperature + 
            ' deg celcius and it feels like ' + res.feelslike + ' deg celcius out.' + ' The humidity is ' + 
            res.humidity + '%.';
            callback(undefined, responseString)
        }
    })
}

export default forecast;