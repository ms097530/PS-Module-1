import { Node, LinkedList, TextNode, ElementNode } from "./data_structures.js";

const node1 = new Node(4)
const node2 = new Node(7)
const node3 = new Node(12)

const myLinkedList = new LinkedList()

// head: 4 -> 7 -> 12 -> null

myLinkedList.head = node1

myLinkedList.traverse()
myLinkedList.head.next = node2
myLinkedList.head.next.next = node3
// alternatively
// node1.next = node2
// node2.next = node3

myLinkedList.traverse()

console.log(myLinkedList.getHeadNode())


myLinkedList.insertByIndex(1, 69)
myLinkedList.traverse()



myLinkedList.removeByValue(12)
myLinkedList.traverse()

myLinkedList.removeByValue(4)
myLinkedList.traverse()


// Text Node
const textNode = new TextNode('hello world')
console.log(textNode)

// Element Node
const elementNode = new ElementNode('div')
elementNode.setTextContent('Bob Dob in da house')

console.log(elementNode)