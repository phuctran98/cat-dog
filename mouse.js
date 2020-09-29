function mouse(){
    var life = true; 
}

mouse.prototype.dead = function(){
    this.dead = false;
}
module.exports = mouse;