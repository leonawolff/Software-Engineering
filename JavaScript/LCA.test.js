//import { Node, findLCA} from './LCA.js';

//making the tree

const Node = require('./LCA.js');
const lca = require('./LCA.js');

const root = new Node(0);

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


test('Find LCA of 14 and 5', () => {
  expect(lca(root, 14, 5)).toBe(19);
});
