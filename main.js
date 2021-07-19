NoseX = 0;
NoseY = 0;
EyeX = 0;
EyeY = 0;
EyeforhatX = 0;
EyeforhatY = 0;
function preload() {
    clown_nose = loadImage("https://i.postimg.cc/Bbv3rr9w/clown-nose-png.png");
    sunglasses = loadImage("https://i.postimg.cc/Kj4WmF9w/unnamed-sunglasses.png");
    hat = loadImage("https://i.postimg.cc/HW9WnCpK/Weird-hat.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, NoseX, NoseY, 25, 25);
    image(sunglasses, EyeX, EyeY, 90, 35);
    image(hat, EyeforhatX, EyeforhatY, 200, 250);
}
function take_snapshot() {
    save("Clown nose filter image.png");
}
function modelLoaded() {
    console.log("PoseNet is initialized!");
}
function gotResults(results) {
    if(results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x - 14;
        NoseY = results[0].pose.nose.y - 12;
        EyeX = results[0].pose.rightEye.x - 25;
        EyeY = results[0].pose.rightEye.y - 16;
        EyeforhatX = results[0].pose.rightEye.x - 80;
        EyeforhatY = results[0].pose.rightEye.y - 120;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
        console.log("Eye X = " + results[0].pose.rightEye.x);
        console.log("Eye Y = " + results[0].pose.rightEye.y);
    }
}