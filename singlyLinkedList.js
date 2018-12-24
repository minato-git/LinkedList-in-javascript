var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.getSize = function () {
        var curr = this.head, size = 0;
        if (this.head == null) {
            this.size = 0;
            return 0;
        }
        else {
            while (curr.next) {
                size++;
                curr = curr.next;
            }
            size++;
            this.size = size;
            return size;
        }
    };
    LinkedList.prototype.addNode = function (data, index) {
        var curr, node = new LinkedListNode(data);
        if (index >= 0) {
            if (index > this.size) {
                console.log("cannot add because the " + index + " is greater than Linked List size " + this.size);
                return;
            }
            else {
                if (index == 0) {
                    if (this.head == null) {
                        this.head = node;
                    }
                    else {
                        node.next = this.head;
                        this.head = node;
                    }
                }
                else {
                    var innerIndex = 0, prev;
                    curr = this.head;
                    while (innerIndex < index) {
                        prev = curr;
                        curr = curr.next;
                        innerIndex++;
                    }
                    node.next = prev.next;
                    prev.next = node;
                    console.log("Added the node " + node.data + " at index " + index);
                }
            }
        }
        else {
            if (this.head == null) {
                this.head = node;
            }
            else {
                curr = this.head;
                while (curr.next) {
                    curr = curr.next;
                }
                curr.next = node;
            }
        }
        this.getSize();
        this.printLinkedList();
    };
    LinkedList.prototype.printLinkedList = function () {
        var curr = this.head;
        var linkedList = '';
        if (this.head) {
            while (curr.next) {
                linkedList = linkedList + curr.data.toString() + ' --> ';
                curr = curr.next;
            }
            linkedList = linkedList + curr.data.toString() + ' --> null';
        }
        else {
            linkedList = 'Nothing to print Empty Linked List';
        }
        console.log(linkedList);
    };
    LinkedList.prototype.deleteNode = function (index) {
        var curr = this.head, prev;
        if (index >= 0 && this.size > 0 && index < this.size) {
            if (index == 0) {
                curr = curr.next;
                this.head = curr;
            }
            else {
                var innerIndex = 0, prev_1;
                while (innerIndex < index) {
                    prev_1 = curr;
                    curr = curr.next;
                    innerIndex++;
                }
                prev_1.next = curr.next;
            }
        }
        else {
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
    };
    LinkedList.prototype.getNode = function (index) {
        var curr = this.head;
        if (index >= 0 && index < this.size) {
            if (index == 0) {
                console.log(curr.data);
            }
            else {
                var innerIndex = 0;
                while (innerIndex < index) {
                    curr = curr.next;
                    innerIndex++;
                }
                console.log(curr.data);
            }
        }
        else {
            console.log('Cannot find the node at index greater than Linked List Size');
        }
    };
    return LinkedList;
}());
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