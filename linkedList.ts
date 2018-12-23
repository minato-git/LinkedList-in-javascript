class LinkedListNode {
    data: any;
    next: any;
     constructor(data) {
         this.data = data;
         this.next = null;
     }
}

class LinkedList {
    head: any | null;
    size: number | 0;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {

    }

    addNode(data: any, index?: number) {
        let curr, node = new LinkedListNode(data);
        if(index) { 
           if(index > 0 && index > this.size ) {
               console.log(`cannot add because the ${index} is greater than Linked List size ${this.size}`);
               return;
           } else {
               if (index == 0) {
                    if(this.head == null) {
                        this.head = node;
                    } else {
                        node.next = this.head;
                        this.head = node;
                    }
               } else {
                   let prev, innerIndex = 0;
                   curr = this.head;
                   while(innerIndex < index) {
                       curr = curr.next;
                       innerIndex++;
                   }
                   node.next = curr.next;
                   curr.next = node;
                   console.log(`Added the node ${node.toString()} at index ${index}`);
               }
           }
        } else {
            if(this.head == null) {
                this.head = node;
            } else {
                curr = this.head;
                while(curr.next) {
                    curr = curr.next;
                } 
                curr.next = node;
            }
        }
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
}