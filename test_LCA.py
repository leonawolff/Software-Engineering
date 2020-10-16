import unittest
from LCA import *


class LCATest(unittest.TestCase):

    def test_bigTree(self):

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

        self.assertEqual(19, lca(root, 14, 5), msg="Test 1")
        self.assertEqual(9, lca(root, 25, 1), msg="Test 2")
        self.assertEqual(0, lca(root, 18, 23), msg="Test 3")
        self.assertEqual(9, lca(root, 7, 1), msg="Test 4")
        self.assertEqual(0, lca(root, 9, 23), msg="Test 5")
        self.assertEqual(0, lca(root, 5, 25), msg="Test 6")
        self.assertEqual(None, lca(root, 30, 31), msg="Test 6")

    def test_smallTree(self):

        root = Node(7)
        root.children = [Node(2), Node(8), Node(5)]
        current = root.children[1]
        current.children = [Node(4), Node(1)]
        current = root.children[2]
        current.children = [Node(6)]

        self.assertEqual(8, lca(root, 4, 1), msg="Test 1")
        self.assertEqual(7, lca(root, 2, 6), msg="Test 2")
        self.assertEqual(None, lca(root, 2, 11), msg="Test 3")

    def test_tinyTree(self):

        root = Node(0)
        root.children = [Node(1), Node(3)]


        self.assertEqual(0, lca(root, 1, 3), msg="Test 1")
        self.assertEqual(None, lca(root, 0, 1), msg="Test 2")




if __name__ == '__main__':
    unittest.main()
