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

function Location({name, year, landmarks, season, notes}) {
  this.name = name;
  this.year = year;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Location.prototype.renderLocationCard = function() {
    const randomNum = (""+Math.random()).substring(2,7);
  return `
    <div class="places__card card">
      <div class="places__card--header" id="heading-${randomNum}">
        <h5>
          <button class="places__location--title btn btn-link collapsed" data-toggle="collapse"
            data-target="#collapse-${randomNum}" aria-expanded="false" aria-controls="collapse-${randomNum}">
            ${this.name}
          </button>
        </h5>
      </div>
      <div id="collapse-${randomNum}" class="collapse" aria-labelledby="heading-${randomNum}" data-parent="#accordion">
        <div class="places__location--body card-body">
          <ul class="places__card--list">
            <li class="places__location--detail places__location--visited"> Visited: ${this.season} ${this.year} </li>
            <li class="places__location--detail places__location--landmarks"> Highlights: ${this.landmarks.join(', ')}</li>
            <li class="places__location--detail places__location--notes"> Notes: ${this.notes} </li>
          </ul>
        </div>
      </div>
    </div>
  `;
};

// Arrow function generates error re initialized array //TODO: Debug
// LocationList.prototype.addLocation = (location) => {
//     this.locations.push(location)
// };

LocationList.prototype.addLocation = function(locationData) {
    console.log(locationData);
  this.locations.push(new Location(locationData));
};

LocationList.prototype.addLocations = function(locationDataList) {
  for(let locationData of locationDataList) {
    myLocations.addLocation(locationData);
  }
  console.log(locationDataList);
};

// Implementation Logic
let myLocations = new LocationList();
myLocations.addLocations(locations);
console.log(myLocations.locations);


for( const location of myLocations.locations) {
  $(".places__accordion").append(location.renderLocationCard());
}
