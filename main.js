Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,

   constraints:{
       facingMode:"enviroment"
   }

});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+" >";
    })
}
console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("mobileNet",modelLoaded);


function modelLoaded(){
    console.log("model loaded");
}

function identify(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult)
}

function gotResult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("objects").innerHTML= results[0].label;
    }
}