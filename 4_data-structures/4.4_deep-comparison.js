const deepEqual = (a, b) => {
    if (typeof a !== 'object' || typeof b !== 'object')
        return a === b;

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys) {
        if (!bKeys.includes(key)) return false;
        if (a[key] === null) {
            if (a[key] !== b[key]) return false;
        }
        else if (typeof a[key] === 'object')
            return deepEqual(a[key], b[key]);
        else if (a[key] !== b[key]) return false;
    }
    return true;
}