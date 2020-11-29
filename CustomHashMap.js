const SLL = require("./LinearDS/CustomSLL");
const SLLNode = require("./LinearDS/CustomSLLNode");

class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size)
        //fills or initializes the new array with null values so they can be replaced later
        .fill(null)
        .map(() => new SLL);
    }

    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            //actual hashing of the string
            hashCode += hashCode + key.charCodeAt(i);
        }
        //compression is done here before being returned
        return hashCode % this.hashmap.length;
    }

    assign(key, value) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        //add new node with key-value pair stored in it as the new head for the linkedList if it doesn't have a head
        if (!linkedList.head) {
            linkedList.addToHead(new SLLNode({key, value}));
            return;
        }
        let current = linkedList.head;
        //do the following operation while the linkedList has a head
        while (current) {
            //if the current node has the same key as the user input, then replace the existent value for that key
          if (current.data.key === key) {
            current.data = {key, value};
          }
          //if the end of the linkedList has been reached, add the user input as a new node to the tail
          if (!current.next) {
            current.next = new Node({key, value});
            break;
          }
          current = current.next;
        }
    }

    retrieve(key) {
        const arrayIndex = this.hash(key);
        let current = this.hashmap[arrayIndex].head;
        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = HashMap;