const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let j = 0;

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]
    let invalidLocation;

    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    } else {
        j++
    }
}

console.log(`There were ${j} locations displayed`)