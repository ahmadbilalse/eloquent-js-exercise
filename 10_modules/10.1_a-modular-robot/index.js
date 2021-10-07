const { randomRobot, routeRobot, goalOrientedRobot }  = require('./robot');
const { VillageState, runRobot, buildRoadGraph } = require('./village');
const { roads, mailRoute } = require('./my-village.json');

const roadGraph = buildRoadGraph(roads)
const state = VillageState.random(5, roadGraph, Object.keys(roadGraph)[0]);
const robots = [
  randomRobot, 
  (state, memory) => routeRobot(state, memory, mailRoute), 
  goalOrientedRobot,
];

robots.forEach((robot, index) => {
  const steps = runRobot(state, robot, []);
  console.log(`Robot ${index + 1} done in ${steps} turn`);
})
