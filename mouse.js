function mouse(){
    var life = true; 
}

mouse.prototype.dead = function(){
    this.dead = false;
}

exports.modoule = mouse;