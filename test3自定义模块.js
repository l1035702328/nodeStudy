
module.exports = {
    hello(){
       console.log("hello")
   },
    world(){
       console.log("world")
   }
}

module.exports.aa = 1
module.exports.hello = function (aa) {
    console.log("hello world")
}

