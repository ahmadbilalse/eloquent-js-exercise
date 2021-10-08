const reverseArray = (arr) => {
    arr = [...arr];
    const newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.pop());
    }

    return newArr;
}

const reverseArrayInPlace = (arr) => {
    let i = 0;
    while (i <= Math.floor(arr.length / 2)) {
        let temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
        i++;
    }
}