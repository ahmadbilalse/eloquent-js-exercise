const arrayToList = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    return {
        value: arr[0],
        rest: arrayToList(arr.slice(1)),
    }
}

const listToArray = (list) => {
    if (list.rest === null) {
        return [list.value];
    }
    return [list.value, ...listToArray(list.rest)];
}

const prepend = (element, list) => {
    return {
        value: element,
        rest: list,
    }
}

const nth = (list, nthPosition) => {
    if (!list) return;
    if (nthPosition === 0) return list.value;
    return nth(list.rest, nthPosition - 1);
}