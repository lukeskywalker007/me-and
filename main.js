Webcam.set({
width:350,
height:300,
image_fromat:"png",
png_quality:90
});
camera=document.getElementById("black");
Webcam.attach("black");
function takepicture()
{
    console.log("function picture working")
    Webcam.snap
    (function(data_uri)
    {
      
        document.getElementById("five").innerHTML= "<img id='capture'src='"+data_uri+"'>"
        
    });
  
    
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/n6rDLHtNL/",modelloaded)
function modelloaded()
{
    console.log("modelloaded");
}
function indentify()
{
 img= document.getElementById("capture");   
 classifier.classify(img,gotresult)
}
function gotresult(error,result)
{
if (error )
{
    

}
else
{
    console.log(result);
    document.getElementById("object").innerHTML=result[0].label;
    document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
}
}