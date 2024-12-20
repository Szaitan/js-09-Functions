class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

n1 = ListNode()
n2 = ListNode(val=2)
n3 = ListNode(val=3)
n4 = ListNode(val=0)

n1.next= n2
n2.next = n3
n3.next = n4

# Solution which creates new nodelist
def mergeNodes(head):
    current_node = head
    current_sum = 0
    
    final_list = []
    counter = 0
    final_list.append(ListNode())

    while current_node is not None:
        current_sum += current_node.val
        if current_node.val == 0 and current_sum > 0:
            final_list[counter].val = current_sum
            if current_node.next is not None:
                final_list.append(ListNode())
                counter +=1
                final_list[counter-1].next = final_list[counter]
                current_sum = 0
        current_node = current_node.next

mergeNodes(n1)

# Solution for modifing existing list