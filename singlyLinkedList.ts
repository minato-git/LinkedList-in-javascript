class LinkedListNode {
    data: any;
    next: any;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    public head: any | null;
    private size: number | 0;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        let curr = this.head, size = 0;
        if (this.head == null) {
            this.size = 0;
            return 0;
        } else {
            while (curr.next) {
                size++;
                curr = curr.next;
            }
            size++;
            this.size = size;
            return size;
        }
    }

    addNode(data: any, index?: number) {
        let curr, node = new LinkedListNode(data);
        if (index >= 0) {
            if (index > this.size) {
                console.log(`cannot add because the ${index} is greater than Linked List size ${this.size}`);
                return;
            } else {
                if (index == 0) {
                    if (this.head == null) {
                        this.head = node;
                    } else {
                        node.next = this.head;
                        this.head = node;
                    }
                } else {
                    var innerIndex = 0, prev;
                    curr = this.head;
                    while (innerIndex < index) {
                        prev = curr;
                        curr = curr.next;
                        innerIndex++;
                    }
                    node.next = prev.next;
                    prev.next = node;
                    console.log(`Added the node ${node.data} at index ${index}`);
                }
            }
        } else {
            if (this.head == null) {
                this.head = node;
            } else {
                curr = this.head;
                while (curr.next) {
                    curr = curr.next;
                }
                curr.next = node;
            }
        }
        this.getSize();
        this.printLinkedList();
    }

    printLinkedList() {
        let curr = this.head;
        let linkedList = '';
        if (this.head) {
            while (curr.next) {
                linkedList = linkedList + curr.data.toString() + ' --> ';
                curr = curr.next;
            }
            linkedList = linkedList + curr.data.toString() + ' --> null';
        } else {
            linkedList = 'Nothing to print Empty Linked List';
        }
        console.log(linkedList);
    }

    deleteNode(index?: number) {
        let curr = this.head, prev: LinkedListNode;
        if (index >= 0 && this.size > 0 && index < this.size) {
            if (index == 0) {
                curr = curr.next;
                this.head = curr;
            } else {
                let innerIndex = 0, prev;
                while (innerIndex < index) {
                    prev = curr;
                    curr = curr.next;
                    innerIndex++;
                }
                prev.next = curr.next;
            }
        } else {
            if (this.head == null) {
                console.log('Nothing to delete in a empty linked list');
                return;
            }
            while (curr.next) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
        }
        console.log('Linked List after Deletion----');
        this.printLinkedList();
    }


    getNode(index: number) {
        let curr = this.head;
        if (index >= 0 && index< this.size) {
            if (index == 0) {
                console.log(curr.data);
            } else {
                let innerIndex = 0;
                while (innerIndex < index) {
                    curr = curr.next;
                    innerIndex++;
                }
                console.log(curr.data);
            }
        } else {
            console.log('Cannot find the node at index greater than Linked List Size');
        }
    }
}


var ll = new LinkedList();
ll.addNode(8);
ll.addNode(4);
ll.addNode(3);
ll.addNode(2);
ll.deleteNode(2);
ll.addNode(0, 2);
ll.getNode(2);
ll.getNode(1);
ll.getNode(0);