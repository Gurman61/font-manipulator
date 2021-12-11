var diffrence=0;
var leftWristX=0;
var rightWrist=0;
var nosex=0;
var nosey=0;
function setup()
{
    canvas=createCanvas(400,400);
    canvas.position(800,180);
    video=createCapture(VIDEO);
    video.size(450,400);
    video.position(150,180);

    poseNet=ml5.poseNet(video,ModalLoaded);
    poseNet.on("pose",gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex,nosey);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        diffrence=floor(leftWristX-rightWristX);
        console.log(leftWristX,rightWristX,diffrence);
    }
}

function ModalLoaded()
{
    console.log("Modal is loaded");
}

function draw()
{
    background("#FFD700");
    fill("#fc0303");
    stroke("#fc0303");
    text("Yuvi",nosex,nosey);
    textSize(diffrence);
    document.getElementById("text").innerHTML="The size of the text is "+diffrence;
    
}