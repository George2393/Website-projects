var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gwd-icon.jpg') {
    myImage.setAttribute ('src','images/gwd-icon.jpg');
   } else {
    myImage.setAttribute ('src','images/gwd-icon2.jpg');
   }
 }