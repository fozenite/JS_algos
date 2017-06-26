function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  // Regardless this is the new head now
  this.head = newNode;

};

var ll = new LinkedList();

// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll);function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// var myLL = new LinkedList();

// myLL.addToTail(10);
// myLL.addToTail(20);
// myLL.addToTail(30);

// myLL.addToHead(100);

// console.log(myLL.tail.prev.prev.prev);

LinkedList.prototype.removeHead = function () {
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

// var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);

// ll.removeHead();
// console.log(ll.removeHead());

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

// var ll = new LinkedList();

// ll.addToHead('one');
// ll.addToHead('two');
// ll.addToHead('three');

// console.log(ll.removeTail());

// return value if it exists in the linked list
LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while(currentNode){
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

// var myLL = new LinkedList();

// // myLL.addToHead(123);
// // myLL.addToHead(70);
// // myLL.addToHead('hello');
// // myLL.addToTail(19);
// // myLL.addToTail('world');
// // myLL.addToTail(20);

// // console.log(myLL.search(70));
// // console.log(myLL.search('world'));
// // console.log(myLL.search(10));


// return an array with the indexes of where the value was present

LinkedList.prototype.indexOf = function(value) {
  let indexArray = [];
  let indexCount = 0;
  var currentNode = this.head;

  while(currentNode){
    if (currentNode.value === value) indexArray.push(indexCount);
    indexCount ++;
    currentNode = currentNode.next;
  }
  return indexArray;

};

var myLL = new LinkedList();
myLL.addToHead(8);
myLL.addToHead(3);
myLL.addToHead(5);
myLL.addToHead(3);
//console.log(myLL);
console.log(myLL.indexOf(3));