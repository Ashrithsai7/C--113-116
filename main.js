col=""
function preloand(){

}
function setup(){
    canvas=createCanvas(450,450)
    canvas.position(410,150)
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,500,500)
    tint(col)
}
function apply_filter(){
    col=document.getElementById("Filter").value
}
function take_snapshot(){
    save("Your_pic.png")
}