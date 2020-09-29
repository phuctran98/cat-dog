function cat(){
    var stomach = [];
}

cat.prototype.eat = function(mouse){
    stomach.push(mouse);
}
exports.module = cat;