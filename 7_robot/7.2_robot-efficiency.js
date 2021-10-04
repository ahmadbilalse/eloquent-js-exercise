// Need to be run on chapter 7.2 exercise code runner
function yourRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels.reduce((previous, current) => {
      current.steps = findRoute(roadGraph, place, current.place);
      return current.steps < previous.steps ? current : previous;
    });
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

runRobotAnimation(VillageState.random(), yourRobot, []);