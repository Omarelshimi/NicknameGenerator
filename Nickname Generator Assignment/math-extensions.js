// Math Extensions Library

Math.randomDec = function(low, high) {
    return Math.random() * (high - low) + low;
}

 Math.randomInt = function(low, high ) {
    return Math.floor(Math.random() * (high - low) + low);
}

Math.roundTo = function(num, numPlaces) {
    num = num * 10 ** numPlaces;
    num = Math.round(num); 
    return num / 10 ** numPlaces
}

