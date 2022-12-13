"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value) {}
  pop() {}
  shift(value) {}
  unshift() {}
  get(value) {}
  set(value) {}
  insert(value) {}
  remove(value) {}
  reverse() {}
}
