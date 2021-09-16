let joe = {
    name: "Joe",
    parents: ["Linda", "Dave"],
    printParents: function () {for (let p in this.parents) {console.log(this.parents[p])};},
};

function nod(val) { // Constructs the object for link list
    this.val = val;
    this.next = null;
}
function LL(arr) {
    let node, temp;
    for (let i=arr.length -1; i >= 0; i--) { // Goes through array backwards
        if (!node) { // If the list is empty
            node = new nod(arr[i]); // Creates last value in linked list
        } else { // If node already has a linkedlist
            temp = new nod(arr[i]);
            temp.next = node;
            node = temp;
            // No clue
        };
    };
    return node; // Returns the list
};

function sortAround(obj, num) {
    /*  Obj is the linked list
        num is the value */
    let left = []; let right = []; // Arrays for lower and higher than
    while (obj !== null) { // While the linked list isn't empty
        if (obj.val <= num) { // if linkedlist value is less or equal to number
            left.push(obj.val); // Adds to lower number list
        } else { // if value is higher
            right.push(obj.val); // Adds to higher number list
        };
        obj = obj.next; // Sets the new linked list to the remaining values
    };
    return LL(left.concat(right));
    // Concat merges the lists together and LL turns arrays into linked lists
};

function printLinked(lili) { // Takes in a linked list
    while (lili) { // While theres values in linked list
        console.log(lili.val); // Outputs value
        lili = lili.next; // Peels it like onion
    };
};

const lis = [5,7,4,2,3,1,8,6,11,18,13,9]

printLinked(sortAround(LL(lis), 5));