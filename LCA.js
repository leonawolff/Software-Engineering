 class Node {
  constructor(key){
    this.key = key;
    const children = [];
  }
}

function createNode(key){
  return(new Node(key));
}

function lca(root, key1, key2){
  
  console.log("root = " + root.key + "\nkey1 = " + key1 + "\nkey2 = " + key2);

  if(searchTree(root, key1) && searchTree(root, key2)){

    let lcaTemp = root.key;
    var lowestCommonAncestor = findLCA(root, key1, key2, lcaTemp);

    return lowestCommonAncestor;
  }
  else{
    return null;
  }
  //   console.log("The lowest common ancestor of " + key1 + " and " + key2 + " is " + lowestCommonAncestor + ".");
  // }
  // else{
  //     console.log("The lowest common ancestor of " + key1 + " and " + key2 + " could not be found.");
  // }
}


function findLCA(current, key1, key2, lcaTemp){

  if(searchTree(current, key1) && searchTree(current, key2)){

    lcaTemp = current.key;
    var i;
    for(i = 0; i < current.children.length; i++){
      lcaTemp = findLCA(current.children[i], key1, key2, lcaTemp);
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

module.exports. createNode = createNode;
module.exports.lca = lca;