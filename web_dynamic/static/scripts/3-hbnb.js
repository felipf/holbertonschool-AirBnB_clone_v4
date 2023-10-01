$(document).ready(function () {
    const amenityDict = {};
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

    // Send a POST request to the API places_search endpoint
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: '{}',
        success: (data) => {
            $('section.places').append(data.map(place => {
                return `<article>
                <div class="title_box"></div>
                  <h2>${place.name}</h2>
                  <div class="price_by_night">${place.price_by_night}</div>
                </div>
                <div class="information">
                  <div class="max_guest">${place.max_guest}</div>
                    <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                </div>
                <div class="description">
                  ${place.description}
                </div>
                </article>`;
            })
            );
        }
    });
});