class Node:
    children = []
    def __init__(self, key):
        self.key = key

root = Node(0)
root.children = [Node(9), Node(2), Node(23)]

current = root.children[0]
current.children = [Node(3), Node(1)]

current = current.children[0]
current.children = [Node(7)]

current = current.children[0]
current.children = [Node(25), Node(12), Node(17)]

current = root.children[0]
current = current.children[1]

current.children = [Node(4), Node(11)]

current = current.children[1]
current.children = [Node(24), Node(6)]

current = root.children[1]
current.children = [Node(18)]

current = current.children[0]
current.children = [Node(26), Node(30)]

current = root.children[2]

current.children = [Node(22), Node(19)]

current = current.children[1]
current.children = [Node(14), Node(5)]

current = current.children[0]
current.children = [Node(8)]

key1 = 14;
key2 = 5;

def searchTree(root, key, found):

    if(root.children is not None) and (len(root.children) > 0):
        for i in root.children:
            if i.key == key:
                found=True
            else:
                for i in root.children:
                    found = searchTree(i, key, found)
    return found

print(searchTree(root, 31, False))

def lca(current, key1, key2, lcaTemp):

    if searchTree(current, key1, False) and searchTree(current, key2, False):
        lcaTemp = current.key
        for i in current.children:
            lcaTemp = lca(i, key1, key2, lcaTemp)
    return lcaTemp

if searchTree(root, key1, False) and searchTree(root, key2, False):
    lowestCommonAncestor = lca(root, key1, key2, root.key)
    print("The lowest common ancestor of ",key1," and ",key2," is ",lowestCommonAncestor,".")
else:
    print("The lowest common ancestor of ",key1," and ",key2," could not be found.")
