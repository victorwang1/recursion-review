// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodeList = [];
  
  var findElement = function(node) {
    if (node.classList && node.classList.contains(className)) {
      nodeList.push(node);
    } 
    node.childNodes.forEach((el) => findElement(el));
  };

  findElement(document.body);
  return nodeList;    
};