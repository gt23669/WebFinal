var slideArr = ["./Pictures/raccooncity1.jpg", "./Pictures/raccooncity2.jpg", "./Pictures/raccooncity3.jpg"]
var slideContainer = document.getElementById("slideshow");
var imageIndex = 0;

function changeImage() {
    document.getElementById("slideshow").innerHTML = "<img class='slideshowimages' src="+slideArr[imageIndex]+ "/>"; 
    imageIndex++;
    if (imageIndex >= slideArr.length) {
        imageIndex = 0;
    }
}
window.onload = function() {
 
   setInterval(changeImage,2500);
 
}
