// Master list of all locations visited
function LocationList() {
    this.locations = [];
}

// Location Object Constructor takes the following vars
//     * location: string
//     * year: four digit int
//     * landmarks: array of strings
//     * season: string, season/ time of year when visting
//     * notes: string of additional notes

function Location(name, year, landmarks, season, notes) {
    this.name = name;
    this.year = year;
    this.landmarks = landmarks;
    this.season = season;
    this.notes = notes;
}

// Arrow function generates error re initialized array @TODO: Debug
// LocationList.prototype.addLocation = (location) => {
//     this.locations.push(location)
// };

LocationList.prototype.addLocation = function(location) {
    this.locations.push(location)
};

let myLocations = new LocationList();

const dc = new Location('Washington, DC', '2013', ['Fords Theatre', 'Natural History Museum', 'Air and Space Museum', 'American History Museum', 'Vietnam Memorial', 'Korean War Memorial', 'National Archives', 'Library of Congress', 'Capitol Building', 'FDR Memorial', 'Jefferson Monument'],
    'Fall', 'I saw Buzz Aldrin at the National Air and Space Museum.  There was so much to see and not enough time, I want to go back again sometime');
const hawaii = new Location('Hawaii', '1996', ['Volcanoes National Park', 'Two Step Beach', 'Kahalluu Beach Park'], 'Summer', 'They have cute tiny geckos everywhere');
const stThomas = new Location('St. Thomas', '1998', ['99 Steps', 'Devils Beach', 'Blackbeards Castle'], 'Spring', 'Its gorgeous, the people are super friendly and the food is delicious');
const playaDelCarmen  = new Location('Playa Del Carmen', '2005', ['Mayan Ruins', 'Spider Monkey Research Station', 'Xcaret'], 'summer', 'Resorts are overrated but the surronding area was really cool');
const seattle = new Location('Seattle', '2016', ['Settle Convention Center', 'Pike Place', 'Pacific Science Center', 'POP Culture Museum', 'Space Needle'], 'summer', 'Its very similar to Portland but more hilly. Gone several times to attend PAX West');
const boston = new Location('Boston', '2019', ['Boston Convention Center', 'Spirit of Boston Ship'], 'spring', 'Cool old architecture everywhere, pizza and dunkin donuts on every corner, went to attend Pax East');
const sanFrancisco = new Location('San Francisco', '2001', ['Pier 39', 'Chinatown', 'Fast Elevators', 'Golden Gate Bridge'], 'summer', 'I left my heart in San Francisco');
const anaheim = new Location('Anaheim', '2002', ['DisneyLand', 'California Adventure', 'The Beach'], 'summer', 'Southern Californians do not know how to deal with rain  and the ocean water is warm');
const lassen = new Location('Lassen National Forest', '2004', ['Lassen National Park', 'Bernie Falls'], 'summer', 'The water at Bernie falls is melted snow and super cold');
const newYork = new Location('New York City', '2006', ['Broadway', 'Grants Tomb', 'Grand Central Station', 'Brooklyn Bridge', 'Times Square', 'FAO Schwartz'], 'spring', 'Best pie every');
const davis = new Location('Davis', '2019', ['UC Davis', 'farmers market', 'tomato statue'], 'fall', 'Its a biketown :)');
const reno = new Location('Reno', '1995', ['Biggest little city in the world sign'], 'fall', 'Biggest little city in the world');


myLocations.addLocation(dc);
myLocations.addLocation(hawaii);
myLocations.addLocation(stThomas);
myLocations.addLocation(playaDelCarmen);
myLocations.addLocation(seattle);
myLocations.addLocation(sanFrancisco);
myLocations.addLocation(boston);
myLocations.addLocation(anaheim);
myLocations.addLocation(lassen);
myLocations.addLocation(newYork);
myLocations.addLocation(davis);
myLocations.addLocation(reno);

console.log(myLocations);

//loop over data and append to dom
