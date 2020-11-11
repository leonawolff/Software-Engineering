class Node:
    def __init__(self, key):
        self.key = key
        self.children = []

class DAG:
    nodes = []
    def __init__(self):
        self.length = 0

    def add(self, node):
        self.nodes.append(node)

def makeDag():
    d = DAG
    return d

def nodeExists(d, k):
    for i in d.nodes: 
        if(i.key == k):
            return True
    return False

def lca(d, key1, key2):
    if nodeExists(d, key1) and nodeExists(d, key2):
        for i in d.nodes:
            lowestCommonAncestor = findLCA(i, key1, key2, None)
            if lowestCommonAncestor is not None:
                return lowestCommonAncestor
    else:
        return None


def findLCA(current, key1, key2, lcaTemp): 
    if search(current, key1) and search(current, key2):
        lcaTemp = current.key
        for i in current.children:
            lcaTemp = findLCA(i, key1, key2, lcaTemp)
    return lcaTemp


def search(root, key):
    if root.key == key:
        return True
    if(root.children is not None) and (len(root.children) > 0):
        for i in root.children:
            if search(i, key):
                return True
    return False