function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    let root = null;

    let insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = function (key) {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };
    //In Order Traverse ascending order smallest to largest
     this.inOrderTraverse = function (cb) {
         console.log(cb);
         inOrderTraverseNode(root, cb);
     }

    let inOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            inOrderTraverseNode(node.left, cb);
            cb(node.key);
            inOrderTraverseNode(node.right, cb);
        }
    };

    //preOrder traversal visits the node prior to its descendents. Helps print a structured document
    this.preOrderTraverse = function (cb) {
        preOrderTraverseNode(root, cb);
    };

    let preOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            cb(node.key);
            preOrderTraverseNode(node.left, cb);
            preOrderTraverseNode(node.right, cb);
        }
    };

    //post-Order Traversal visits the node after its descendents

    this.postOrderTraverse = function (cb) {
        postOrderTraverseNode(root, cb);
    }
    let postOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            postOrderTraverseNode(node.left, cb);
            postOrderTraverseNode(node.right, cb);
            cb(node.key);
        }
    };

    //to find a minimum value of the node
    this.minNode = function () {
        let node = root;
        if(node === null) {
            return null;
        }

        while (node.left !== null) {
            node = node.left;
            console.log("", node.key);
        }
        if(node)
            return node.key;
    }
    //Searching for a maximum value
    this.maxNode = function() {
        let node = root;
        if(node === null) {
        return null;}
    
    while (node.right !== null) {
        node = node.right;
    }
    if(node) {
        return node.key;
    }
};


//Implementing a search methid
this.search = function(key) {
    return searchNode(root,key);
}

//helper
let searchNode= function(node,key) {
    if (node===null) {
        return false;
    }
    if (key<node.key) {
        return searchNode(node.left,key)
    } else if (key>node.key) {
        return searchNode(node.right,key); 
    } else{
        return true;
    }
};


//Remove a Method
this.remove= function(key) {
    return root= removeNode(root,key);
};

//helper
let removeNode= function(node,key) {
    if(node === null) {
        return null;
    }
    if (key<node.key) {
        node.left= removeNode(node.left,key);
        return node;
    } else if ( key> node.key) {
        node.right= removeNode(node.right, key);
        return node;
    } else {// key is equal to node.key
        if(node.left===null && node.right=== null) {
            node=null;
            return node;
        }
        //a node with only 1 child
        if(node.left=== null) {
            node= node.right;
            return node;
        } else if (node.right===null) {
            node=node.left;
            return node;
        }
        //a node with 2 children
        let a = findMinNode(node.right);
        node.key=a.key;
        node.right=removeNode(node.right,a.key);
    return node;
    }
};



}


function printNode(value) {
    console.log(value);
}

function findMinNode (node) {
    while (node && node.left !== null) {
        node= node.left;
    }
    return node;
};

let tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);

tree.insert(20);
tree.insert(18);
tree.insert(25);
console.log(tree);
tree.minNode();

tree.inOrderTraverse(printNode);
tree.preOrderTraverse(printNode);
tree.postOrderTraverse(printNode);
tree.search(0);

