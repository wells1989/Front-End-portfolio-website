  
/* const about = document.getElementById('about').innerHTML = "TEST"

let changeBackground = function() {
    about.style.color= "red";
    about.style.fontSize= "50px";
};

about.addEventListener('click', changeBackground):*/

getElementsByClassName

function toggle() {
    var x = document.getElementsByClassName("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }