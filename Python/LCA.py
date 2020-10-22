class Node:
    children = []
    def __init__(self, key):
        self.key = key

def lca(root, key1, key2):
    if searchTree(root, key1, False) and searchTree(root, key2, False):
        lowestCommonAncestor = findLCA(root, key1, key2, root.key)
    else:
        lowestCommonAncestor = None
    return lowestCommonAncestor


def findLCA(current, key1, key2, lcaTemp):
    if searchTree(current, key1, False) and searchTree(current, key2, False):
        lcaTemp = current.key
        for i in current.children:
            lcaTemp = findLCA(i, key1, key2, lcaTemp)
    return lcaTemp


def searchTree(root, key, found):
    if(root.children is not None) and (len(root.children) > 0):
        for i in root.children:
            if i.key == key:
                found=True
            else:
                for i in root.children:
                    found = searchTree(i, key, found)
    return found
