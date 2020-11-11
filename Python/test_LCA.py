import unittest
from LCA import *


class LCATest(unittest.TestCase):

    def test_dag1(self):

        d = makeDag()  

        n0 = Node(0)
        n1 = Node(1)
        n2 = Node(2)
        n3 = Node(3)
        n4 = Node(4)
        n5 = Node(5)
        n6 = Node(6)
        n7 = Node(7)

        n0.children = [n1, n2]
        n1.children = [n3, n7]
        n2.children = [n4, n5]
        n3.children = [n6]
        n6.children = [n7]

        d.add(d, n0)
        d.add(d, n1)
        d.add(d, n2)
        d.add(d, n3)
        d.add(d, n4)
        d.add(d, n5)
        d.add(d, n6)
        d.add(d, n7)

        self.assertEqual(0, lca(d, 1, 2), msg="Test 1")
        self.assertEqual(6, lca(d, 6, 7), msg="Test 2")
        self.assertEqual(2, lca(d, 4, 5), msg="Test 3")
        self.assertEqual(None, lca(d, 10, 2), msg="Test 4")

    def test_dag2(self):
        
        d = makeDag()  
        d.nodes.clear()
        
        n0 = Node(0)
        n1 = Node(1)
        n2 = Node(2)
        n3 = Node(3)

        n0.children = [n1, n2]

        d.add(d, n0)
        d.add(d, n1)
        d.add(d, n2)
        d.add(d, n3)

        self.assertEqual(0, lca(d, 1, 2), msg="Test 1")
        self.assertEqual(None, lca(d, 2, 3), msg="Test 2")
        self.assertEqual(None, lca(d, 5, 6), msg="Test 3")

    def test_dag3(self):

        d = makeDag()  
        d.nodes.clear()
        
        n0 = Node(0)
        n1 = Node(1)
        n2 = Node(2)
        n3 = Node(3)
        n4 = Node(4)
        n5 = Node(5)
        n6 = Node(6)

        n0.children = [n1, n3]
        n1.children = [n2]
        n5.children = [n3]
        n6.children = [n4, n5]

        d.add(d, n0)
        d.add(d, n1)
        d.add(d, n2)
        d.add(d, n3)
        d.add(d, n4)
        d.add(d, n5)
        d.add(d, n6)


        self.assertEqual(6, lca(d, 3, 4), msg="Test 1")
        self.assertEqual(None, lca(d, 2, 6), msg="Test 2")
        self.assertEqual(0, lca(d, 2, 3), msg="Test 3")
        self.assertEqual(None, lca(d, 5, 2), msg="Test 4")
        self.assertEqual(None, lca(d, 7, 2), msg="Test 5")



if __name__ == '__main__':
    unittest.main()
