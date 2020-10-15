class Node {
  constructor(key){
    this.key = key;
    const children = [];
  }
}

//making the tree

let root = new Node(0);

root.children = [new Node(9), new Node(2), new Node(23)];

let current = root.children[0];
current.children = [new Node(3), new Node(1)];

current = current.children[0];
current.children = [new Node(7)];

current = current.children[0];
current.children = [new Node(25), new Node(12), new Node(17)];

current = root.children[0];
current = current.children[1];
current.children = [new Node(4), new Node(11)];

current = current.children[1];
current.children = [new Node(24), new Node(6)];

current = root.children[1];
current.children = [new Node(18)];

current = current.children[0];
current.children = [new Node(26), new Node(30)];

current = root.children[2];

current.children = [new Node(22), new Node(19)];

current = current.children[1];
current.children = [new Node(14), new Node(5)];

current = current.children[0];
current.children = [new Node(8)];

/* Tree should look like this:

                             (0)
                       /      \       \
                   (9)         (2       (23)
                 /   \          \       /   \
              (3)  (1)          (18)  (22)   (19)
            /     /   \         /  \        /   \
          (7)   (4)   (11)    (26) (30)   (14)  (5)
      /   |   \       /  \                        \
    (25) (12) (17)  (24) (6)                      (8)

*/

// doin bits

var key1 = 14;
var key2 = 5;

if(searchTree(root, key1) && searchTree(root, key2)){

  let lcaTemp = root.key;
  var lowestCommonAncestor = lca(root, key1, key2, lcaTemp);


  console.log("The lowest common ancestor of " + key1 + " and " + key2 + " is " + lowestCommonAncestor + ".");
}
else{
    console.log("The lowest common ancestor of " + key1 + " and " + key2 + " could not be found.");
}

// LCA section

function lca(current, key1, key2, lcaTemp){

  if(searchTree(current, key1) && searchTree(current, key2)){

    lcaTemp = current.key;
    var i;
    for(i = 0; i < current.children.length; i++){
      lcaTemp = lca(current.children[i], key1, key2, lcaTemp);
    }
  }
  return lcaTemp;
}

// check if a node with the given key exists in the tree

function searchTree(root, key){

  let found = false;
  var i;
  if(root.children && root.children.length > 0){

    for(i = 0; i < root.children.length; i++){
      if(root.children[i].key === key){
        return true;
      }
    }
    for(i = 0; i < root.children.length; i++){
      found = searchTree(root.children[i], key);
      if(found){
        return true;
      }
    }
  }
  return false;
}
