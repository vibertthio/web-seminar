var fade = function (node) {
  var level = 1;
  var step = function ( ) {
    var hex = level.toString(16);
    node.style.backgroundColor = '#FFFF' + hex + hex;
    if (level < 15) {
      console.log(node);
      console.log(level);
      level += 1;
      setTimeout(step, 100);
    }
  };
  setTimeout(step, 100);
};

var hd = document.getElementById('header');
hd.addEventListener("click", function(){
  fade(this);
})

var div = document.getElementById('itm');
div.addEventListener("click", function(){
  fade(this);
})
