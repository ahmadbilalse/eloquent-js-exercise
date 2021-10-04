class PGroup {
  constructor(array = []) {
    this._set = [...array];
  }
  add(value) {
    if (!this._set.includes(value)) return new PGroup(this._set.concat(value));
  }
  delete(value) {
    const newSet = this._set.filter(e => e !== value);
    return new PGroup(newSet);
  }
  has(value) {
    return this._set.indexOf(value) !== -1;
  }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false