exports.randomPick = function (array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}