function cat(name){
    this.name = name;
    this.stomach = [];
}

cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}


cat.prototype.sayHi = function(){
    console.log("my name is: " + this.name)
}
module.exports = cat;