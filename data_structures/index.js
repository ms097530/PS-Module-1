import { Node, LinkedList } from "./data_structures.js";

const node1 = new Node(4)
const node2 = new Node(7)
const node3 = new Node(12)

const myLinkedList = new LinkedList()

// head: 4 -> 7 -> 12 -> null

myLinkedList.head = node1

console.log(myLinkedList)
myLinkedList.head.next = node2
myLinkedList.head.next.next = node3
// alternatively
// node1.next = node2
// node2.next = node3

console.log(myLinkedList)

// console.log(myLinkedList.getHeadNode())

myLinkedList.traverse()

myLinkedList.insertByIndex(1, 69)
console.log(myLinkedList)