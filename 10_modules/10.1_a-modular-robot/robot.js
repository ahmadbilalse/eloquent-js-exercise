const { findRoute }  = require('./graph');
const { randomPick } = require('./random');

exports.randomRobot = function (state, memory) {
  return { direction: randomPick(state.roadGraph[state.place]) };
}

exports.routeRobot = function (state, memory, route) {
  if (memory.length == 0) {
    memory = route;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

exports.goalOrientedRobot = function ({ place, parcels, roadGraph }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}