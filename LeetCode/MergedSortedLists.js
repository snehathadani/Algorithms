/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4


*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}


let mergedLists = (l1, l2) => {
    let mergedList = new ListNode();
    let current = mergedList;

    while (l1 || l2) {
        if(!l1 || !l2) {
        if (l1) {
            current.next = l1;
            break;
        } else {
            
                current.next = l2;
                break;
            }
         } else if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
        }
        current = current.next;
    }
    return mergedList.next;
}


mergedLists(l1, l2);