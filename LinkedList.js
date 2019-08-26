

function LinkedList() {
    let Node = function(element){ 
    this.element = element;
    this.next = null;
  
    };
    let length = 0; 
    let head = null; 
    //Adding the node
    this.append = function(element){
        let node = new Node(element), 
        current; //{2}
        if (head === null){ //first node on list //{3}
        head = node;
        } else {
        current = head;
        while(current.next!== null){
            current = current.next;
            }
            //get last item and assign next to node to make the link
            current.next = node; //{5}
            }
           length++;
        }
        //size
    this.size=function() {
        return length;
    };
        //Removing an ELement
        this.removeAt = function(position) {
            
            if (position>=0 && position <= length) {
                let current=head;
                let previous;
                let index=0;
                if(position===0) {
                    head=current.next;
                } else {
                  while(index++ <position) {
                      previous=current;
                  current=current.next;
                }
                //link previous with current's next
                previous.next=current.next;
            }
            length--;
            return current.element; }
            else {
                return null;
            }

        } 

        //Inserting an element

       this.insert= function(position,element) {
           if(position >= 0 && position <=length) {
               let node= new Node(element);
               let current=head;
               let previous;
               let index=0;
             

               if (position===0) {
               //node.next=current;
               node.next=head;
               head=node;
               } else {
                   while (index++ < position) {
                       previous=current;
                       current=current.next;
                   }
                   node.next=current;
                   previous.next=node;
               }
               length ++;
               return true;
           } else {
               return false;
           }
       }
       //toString methos converts the LinkedList object into the string
       this.toString = function(){
           let current=head;// current variable as our index and naviagate thru the list
           string='';
           while(current) {
           string+= current.element + (current.next ? 'n' : '');
           current= current.next;
           }
           return string;
       };

       this.indexOf= function(element) {
           let current=head;
           index=-1;
           while (current) {
               if (element===current.element){
               return index;
           }
           index++;
           current=current.next;
       }
            return -1;
    }
        this.remove= function(element){
            let index= this.indexOf(element);
            return this.removeAt(index);
        }
        this.getHead = function(){
            return head;
            };
}
let list = new LinkedList();
list.append(15);
list.append(10);
(list.size());
list.removeAt(0);
list.size();
list.insert(1,3);
list.size();
list.insert(2,3);
list.size();
list.toString();



