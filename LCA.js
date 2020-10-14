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

// fine til here

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

var key1 = 6;
var key2 = 3;
console.log(root.children);
var lowestCommonAncestor = lca(root, key1, key2);

if(lowestCommonAncestor === -1){
  console.log("The lowest common ancestor of " + key1 + " and " + key2 + " could not be found.")
}
else{
  console.log("The lowest common ancestor of " + key1 + " and " + key2 + " is " + lowestCommonAncestor + ".")
}
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

// LCA section

function lca(root, key1, key2){

  if(searchTree(root, key1) && searchTree(root, key2)){

    console.log("key1 found = " + searchTree(root, key1) + "key2 found = " + searchTree(root, key2))

    let path1 = [];
    let path2 = [];

    path1 = findPath(root, key1, path1);
    path2 = findPath(root, key2, path2);

    var i;
    var j;

    for(i = path1.length - 1; i > 0; i--){
      for(j = path2.length - 1; i > 0; i--){
        if(path1[i] === path2[j]){
          return path1[i];
        }
      }
    }
  }
  return -1;
}


// check if a node with the given key exists in the Tree
function searchTree(root, key){

  let current = root;
  console.log("current.children = " + current.children);
  if(current.children.length > 0){
    var i;
    for(i = 0; i < current.children.length - 1; i++){
      if(current.children[i].key === key){
        return true;
      }
    }
    for(i = 0; i < current.children.length - 1; i++){
      searchTree(current.children[i], key);
    }
  }
  return false;
}

/*
1) Find path from root to n1 and store it in a vector or array.
2) Find path from root to n2 and store it in another vector or array.
3) Traverse both paths till the values in arrays are same. Return the common element just before the mismatch.
*/

function findPath(root, key, path){

  var i;
  let current = root;

  for(i = 0; i < current.children.length - 1; i++){
    if(current.children[i].key === key){
      path.push(key);
      return path;
    }
  }
  for(i = 0; i < current.children.length - 1; i++){
    path.push(current.children[i].key);
    findPath(current.children[i], key, path);
  }
}
