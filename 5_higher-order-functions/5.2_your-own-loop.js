const loop = (n, test, update, action) => {
	while(test(n)) {
		action(n);
		n = update(n);
	}
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1