$(document).ready(function () {
    const amenityDict = {};

    // Send a GET request to the API status endpoint
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
        // If the status is 'OK', add the class 'available' to the div#api_status
        if (data.status === 'OK') {
            $('div#api_status').addClass('available');
        } 
        // Otherwise, remove the class 'available' from the div#api_status
        else {
            $('div#api_status').removeClass('available');
        }
    });

    $('input[type=checkbox]').click(function () {
        if ($(this).is(':checked')) {
            amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
            console.log("Amenity id stored")
        } else {
            delete amenityDict[$(this).attr('data-id')];
            console.log("Amenity id removed")
        }
        $('.amenities h4').text(Object.values(amenityDict).join(', '));
    });
});