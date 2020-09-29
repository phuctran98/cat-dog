const chalk = require('chalk');
function dog(name){
    this.name = name;
    this.stomach = [];
}
dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}
dog.prototype.sayHI = function(){
    console.log("my name is " + chalk.blue(this.name))
}
module.exports = dog;