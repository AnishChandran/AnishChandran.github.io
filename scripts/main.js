console.log("DOCUMENT IS " , document);
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
console.log("IMAGE IS "  , myImage);
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if ( mySrc == 'images/Motivation1.png') {
    myImage.setAttribute('src', 'images/cheetahMoti.jpg')
  } else {
    myImage.setAttribute('src', 'images/Motivation1.png')
  }
}
