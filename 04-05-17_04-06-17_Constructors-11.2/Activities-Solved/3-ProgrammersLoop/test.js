function Graph(vertices, edges) {
  this.vertices = vertices;
  this.edges = edges;
}

// {}

Graph.prototype.createSketch = function() {
	return this.vertices[1] + this.edges[1];
}

Graph.prototype.methodIWantToCreate = function() {
	return "YAYYYYYYYY";
}

console.log(Graph.prototype);
console.log(Graph.prototype.methodIWantToCreate());

var someGraph = new Graph([2, 3], [3, 4]);
var someGraph2 = new Graph([1, 3], [5, 4]);
var someGraph3 = new Graph([4, 3], [7, 4]);
var someGraph4 = new Graph([5, 3], [8, 4]);

console.log(someGraph);
console.log(someGraph2);
console.log(someGraph3);
console.log(someGraph4);

console.log(someGraph.createSketch());


// var Cars = function(wheels, color) {
// 	this.wheels = wheels;
// 	this.color = color;
// }

// Cars.prototype.drive = function() {
// 	console.log("vrooom");
// }

// var BMWs = function(wheels, color, builtInNav) {
// 	BMWs.prototype.constructor = BMWs;
// 	Cars.call(this, wheels, color);
// 	this.builtInNav = builtInNav;
// }

// BMWs.prototype = Object.create(Cars.prototype);

// var Bughattis = function(wheels, color, turbo) {
// 	Bughattis.prototype.constructor = Bughattis;
// 	Cars.call(this, wheels, color);
// 	this.turbo = turbo;
// }

// Bughattis.prototype = Object.create(Cars.prototype);

// var bmwCar = new BMWs(4, "silver", true);
// console.log(bmwCar);
// console.log(bmwCar.__proto__);