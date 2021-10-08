let size = 8;
for (let i = 0; i < size; i++) {
  let rowString = '';
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) rowString += ' ';
    else rowString += '#';
  }
  console.log(rowString);
}