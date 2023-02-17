const util = require('util')

// Basic Node class
class Node
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}

// LinkedList class
class LinkedList
{
    constructor()
    {
        this.head = null
    }
    getHeadNode()
    {
        return this.head
    }
    clear()
    {
        this.head = null
    }

    traverse()
    {
        // first Node in the list
        let walker = this.head
        while (walker)
        {
            // print current node's data value
            console.log('This node\'s data value is: ' + walker.data)
            // move walker to next Node
            walker = walker.next
        }
    }

    insertByIndex(index, val)
    {
        let i = 0
        let walker = this.head
        while (i < index && walker.next)
        {
            ++i
            walker = walker.next
        }
        // console.dir('Walker: ')
        // console.dir(walker)
        // console.log('walker next: ')
        // console.log(walker.next)

        let newNode = new Node(val)
        newNode.next = walker.next
        walker.next = newNode
    }
}

const node1 = new Node(4)
const node2 = new Node(7)
const node3 = new Node(12)

const myLinkedList = new LinkedList()

// head: 4 -> 7 -> 12 -> null

myLinkedList.head = node1

console.log(util.inspect(myLinkedList, { showHidden: false, depth: null, colors: true }))
myLinkedList.head.next = node2
myLinkedList.head.next.next = node3
// alternatively
// node1.next = node2
// node2.next = node3

console.log(util.inspect(myLinkedList, { showHidden: false, depth: null, colors: true }))

// console.log(myLinkedList.getHeadNode())

myLinkedList.traverse()

myLinkedList.insertByIndex(1, 69)

console.log(util.inspect(myLinkedList, { showHidden: false, depth: null, colors: true }))