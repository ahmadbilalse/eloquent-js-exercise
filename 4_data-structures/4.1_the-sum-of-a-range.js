const range = (start, end, step = 1) => {
    if (step === 0) return;

    let arr = [];
    let currentNum = start;

    while (step > 0 ? currentNum <= end : currentNum >= end) {
        arr.push(currentNum);
        currentNum += step;
    }
    return arr;
}

const sum = (numbers) => {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
