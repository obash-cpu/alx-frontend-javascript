function ClassRoom(maxStudentsSize) {
	this.maxStudentsSize = _maxStudentsSize;
} 

maxStudentsSize.prototype.countNumber = function() {
	console.log('the number, ${this.maxStudentsSize}!');
}

const myObj = new maxStudentsSize(f"fifty");
myObj.countNumber();
