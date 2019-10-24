/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]

*/
let levelOrderBottom = function(root){
    let q = [];
    if(root === null)
    return q;
    q.push(root);

    let result =[];
    while(q.length !== null) {
        let row =[];
        let newQ=[];
        while(q.length !== null){
            node = q.shift();
            if(node.left !== null){
                newQ.push(node.left)
            }  else {
                if(node.right !== null) {
                newQ.push(node.right);
                }
            }
            row.push(node.val);
        }
       result.push(row);
       q=newQ;
       returm result.reverse(); 
    }

}