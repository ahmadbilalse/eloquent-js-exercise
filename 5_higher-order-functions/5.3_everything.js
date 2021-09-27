// === With loop
// const every = (array, test) => {
// 	for(item of array) {
// 		if(!test(item)) return false;
// 	}
// 	return true;
// }

// === With array some
const every = (array, test) => {
	return !array.some((item) => !test(item));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true