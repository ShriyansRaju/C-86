var canvas=new fabric.Canvas("myCanvas")
player_x=10
player_y=10
var blockImageWidth=30
var blockImageHeight=30
var playerObject=""
var blockImageObject=""

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
      playerObject=Img;
      playerObject.scaleToWidth(150)
      playerObject.scaleToHeight(140)
      playerObject.set({
        top:player_y,
        left:player_x
      });
      canvas.add(playerObject)
    })
}
