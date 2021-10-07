const { randomPick } = require('./random');
const { buildGraph }  = require('./graph');

class VillageState {
  constructor(place, parcels, roadGraph) {
    this.place = place;
    this.parcels = parcels;
    this.roadGraph = roadGraph;
  }

  move(destination) {
    if (!this.roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return { place: destination, address: p.address };
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels, this.roadGraph);
    }
  }
}

VillageState.random = function (parcelCount = 5, roadGraph, robotPosition) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState(robotPosition, parcels, roadGraph);
};

exports.VillageState = VillageState;

exports.runRobot = function (state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

exports.buildRoadGraph = function (roads) {
  return buildGraph(roads.map(r => r.split("-")));
}
