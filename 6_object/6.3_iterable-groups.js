class Group {
  constructor() {
    this._set = [];
  }
  add(value) {
    if (!this._set.includes(value)) this._set.push(value);
  }
  delete(value) {
    const newSet = this._set.filter(e => e !== value);
    this._set = newSet;
  }
  has(value) {
    return this._set.indexOf(value) !== -1;
  }
  getValue(key) {
    return this._set[key];
  }
  get length() {
    return this._set.length;
  }
  static from(values) {
    const newGroup = new Group();
    values.forEach(e => {
      newGroup.add(e);
    })
    return newGroup;
  }
}

class GroupIterator {
  constructor(group) {
    this._i = 0;
    this._group = group;
  }
  next() {
    if (this._i === this._group.length) return { done: true };
    const value = this._group.getValue(this._i);
    this._i++;
    return {
      value,
      done: false,
    }
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
