const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport
  }).filter((journey, index, self)=> {
    return self.indexOf(journey) === index
  });
};


// new array created from map = ['train', 'train', 'aeroplane', 'car', 'ferry' ]
// .filter(journey, index, self) = journey = 'train' index = 0, self refers to array filter is called on (so new array created of just the transports) 
// self.indexOf(journey) === index - if condition is true, it will be added to new array of unique transport values, so if there is a duplicate and value does not match the index then it will be false and not added to new array



module.exports = Traveller;
