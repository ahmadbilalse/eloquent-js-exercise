let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((previous, current) => {
	return previous.concat(current);
}))
// → [1, 2, 3, 4, 5, 6]

const flatten = (arr) => {
	let newArr = [];
	arr.forEach((e) => {
		if(Array.isArray(e)) {
			newArr = newArr.concat(flatten(e));
		}
		else {
			newArr.push(e);
		}
	})
	return newArr;
}

let deepNestedArray = [1, [[2, [3], 4, [[[5, 6], 7], 8]]], 9];
console.log(flatten(deepNestedArray));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9]