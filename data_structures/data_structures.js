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
        let divider = '--------------------------------'

        console.log(`%c${divider}`, 'color: orange;')

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

        let newNode = new Node(val)
        newNode.next = walker.next
        walker.next = newNode
    }

    removeByValue(val)
    {
        // * starting state
        // * walker
        // ?  4  ->   7  ->  12  -> null
        // * head
        let walker = this.head
        let prev = null

        while (walker && walker.data !== val)
        // move walker and prev until walker matches the desired value
        // or walker reaches the end of the list (null)
        {
            prev = walker
            walker = walker.next

            // * state after 1 run of loop
            // * prev   walker
            // ?  4  ->   7  ->  12  -> null
            // * head
            // -------------------------------------
            // * state after 2 runs of loop
            // *         prev  walker
            // ?  4  ->   7  ->  12  -> null
            // * head
        }

        if (walker !== null)
        // matching value is found
        {
            // reassign point to matched node to the following node
            if (prev)
            {
                prev.next = walker.next
            }
            else
            // first (head) node was the match, so prev is null
            // head becomes second node
            {
                this.head = walker.next
            }

            // remove matched node's reference to next node
            walker.next = null
        }
    }
}


// EXTRA NODES
export class TextNode
{
    constructor(data)
    {
        this.data = data
        this.length = data.length
    }
}

export class ElementNode
{
    constructor(name)
    {
        this.elementName = name
        this.textContent = null
        this.outerHTML = null
    }

    setTextContent(text)
    {
        this.textContent = text
        this.#setOuterHtml()
    }

    #setOuterHtml()
    {
        this.outerHTML = `<${this.elementName}>${this.textContent}</${this.elementName}>`
    }
}