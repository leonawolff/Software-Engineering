var lcaFile= require('./LCA.js');

const root = lcaFile.createNode(0);

root.children = [lcaFile.createNode(9), lcaFile.createNode(2), lcaFile.createNode(23)];

let current = root.children[0];
current.children = [lcaFile.createNode(3), lcaFile.createNode(1)];

current = current.children[0];
current.children = [lcaFile.createNode(7)];

current = current.children[0];
current.children = [lcaFile.createNode(25), lcaFile.createNode(12), lcaFile.createNode(17)];

current = root.children[0];
current = current.children[1];
current.children = [lcaFile.createNode(4), lcaFile.createNode(11)];

current = current.children[1];
current.children = [lcaFile.createNode(24), lcaFile.createNode(6)];

current = root.children[1];
current.children = [lcaFile.createNode(18)];

current = current.children[0];
current.children = [lcaFile.createNode(26), lcaFile.createNode(30)];

current = root.children[2];

current.children = [lcaFile.createNode(22), lcaFile.createNode(19)];

current = current.children[1];
current.children = [lcaFile.createNode(14), lcaFile.createNode(5)];

current = current.children[0];
current.children = [lcaFile.createNode(8)];

/* Tree should look like this:

                             (0)
                        /      |      \
                   (9)         (2)       (23)
                 /   \          \        /   \
              (3)  (1)          (18)   (22)   (19)
            /     /   \         /  \          /   \
          (7)   (4)   (11)    (26) (30)      (14)  (5)
      /   |   \       /  \                           \
    (25) (12) (17)  (24) (6)                         (8)

*/


test('Find LCA of 14 and 5', () => {
  expect(lcaFile.lca(root, 14, 5)).toBe(19);
});

test('Find LCA of 14 and 5', () => {
  expect(lcaFile.lca(root, 25, 8)).toBe(0);
});

test('Find LCA of 14 and 5', () => {
  expect(lcaFile.lca(root, 30, 31)).toBe(null);
});

test('Find LCA of 14 and 5', () => {
  expect(lcaFile.lca(root, 26, 30)).toBe(18);
});