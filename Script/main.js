var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/Foto1.PNG') {
      myImage.setAttribute ('src','Images/Foto2.PNG');
    } else {
      myImage.setAttribute ('src','Images/Foto1.PNG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Qual seu nome?');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Bem-Vindos, ' + myName;
  }
  if(!localStorage.getItem('name') || localStorage.getItem('name')==='null') {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Bem-Vindo, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
