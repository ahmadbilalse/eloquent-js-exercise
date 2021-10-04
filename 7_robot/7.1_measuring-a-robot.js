// Need to be run on chapter 7.1 exercise code runner
function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1Total = 0;
  let robot2Total = 0;
  for (let i = 0; i < 100; i++) {
    const task = VillageState.random();
    robot1Total += runRobot(task, robot1, memory1);
    robot2Total += runRobot(task, robot2, memory2);
  }
  console.log('robot 1:', robot1Total / 100);
  console.log('robot 2:', robot2Total / 100);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);