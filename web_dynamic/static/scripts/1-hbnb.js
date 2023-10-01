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
});