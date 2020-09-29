function cat(){
    this.stomach = [];
}

cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}
exports.module = cat;