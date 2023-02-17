// Basic Node class
export class Node
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}

// LinkedList class
export class LinkedList
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