var acc = document.getElementsByClassName("accordion");
var i;
     
var arrowRay = document.getElementsByClassName("arrow");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    console.log(acc[i]);
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }  

    if (panel.style.display === "block") {
      arrowRay[i].classList.add("rotate");
    } else {
      arrowRay[i].classList.remove("rotate");
    } 
    
  });

} 

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
    
//     var panel = this.nextElementSibling;

//     if (panel.style.display === "block") {
//       arrowRay[i].classList.add("rotate");
//     } else {
//       arrowRay[i].classList.remove("rotate");
//     }   
//   });
// } 

