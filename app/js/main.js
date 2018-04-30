var elem = document.getElementById('canvas')
var params = { width: elem.clientWidth, height: elem.clientHeight }
var two = new Two(params).appendTo(elem)

// create here elements


two.bind('update', (frameCount) => {
  // called every frame
}).play()