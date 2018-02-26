class Sorter {
  constructor() {
    this.comparator = (a,b) => a - b;
    this.array = [];
    // your implementation
  }

  add(element) {
      this.array.push(element)
    // your implementation
  }

  at(index) {
return this.array[index]
    // your implementation
  }

  get length() {
    return this.array.length
    // your implementation
  }

  toArray() {
    return this.array
    // your implementation
  }

  sort(indices) {
    var sortArr = [];
    indices.sort((a,b) => a - b);
    for(var i=0; i<indices.length; i++){
        sortArr.push(this.array[indices[i]])
    }
      sortArr.sort(this.comparator);
    for(var i=0; i<indices.length; i++){
      this.array[indices[i]] = sortArr.shift();
    }
    // your implementation
  }

  setComparator(compareFunction) {
    this.comparator= compareFunction;
    // your implementation
  }
}

module.exports = Sorter;