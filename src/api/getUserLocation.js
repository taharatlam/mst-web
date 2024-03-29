export default{
    GET_USER_LOCATION: (latitude,longitude,apiKey) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`,

    SEARCH_USER_LOCATION : (text) => `http://mvs.bslmeiyu.com/api/v1/config/place-api-autocomplete?search_text=${text}`,
}
                                                                                                                           