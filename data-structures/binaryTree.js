class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      // no head, create new head

      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (true) {
      if (current.value > value) {
        // go left

        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        // go right

        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }

  toObject() {
    return this.root;
  }
}

const tree = new Tree();
tree.add(4);
tree.add(6);
tree.add(3);
tree.add(10);
tree.add(1);
tree.add(5);

console.log(tree.toObject());
