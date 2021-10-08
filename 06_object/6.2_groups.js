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
  static from(values) {
    const newGroup = new Group();
    values.forEach(e => {
      newGroup.add(e);
    })
    return newGroup;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
