function preload(){
lipstickImage = loadImage("https://i.postimg.cc/CLrzmtmm/Lipstick-with-lips-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(300,300);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(lipstickImage,noseX,noseY,80,40 );

}

function take_snapshot(){
    save("my_lipstick_picture.jpeg");

}

function modelLoaded(){
    console.log("PoseNet Loaded!!");
}
noseX=0;
noseY=0;

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y+8;
    console.log("lips x="+results[0].pose.nose.x+10);
    console.log("lips y="+results[0].pose.nose.y+10);
}
}