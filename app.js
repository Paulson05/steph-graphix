
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "120px";
    document.getElementById("main").style.marginLeft = "120px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


const tabitems = document.querySelectorAll(".tab-item");
const tabContentitems = document.querySelectorAll(".tab-content-item");
function selectItem(e){
    removeBorder();
    removeShow();
 this.classList.add("tab-border");
  const tabContentitems = document.querySelector(`#${this.id}-content`);
  tabContentitems.classList.add("show");
}
function removeBorder(){
    tabitems.forEach(item =>item.classList.remove("tab-border"));
}
function removeShow(){
    tabContentitems.forEach(item =>item.classList.remove("show"));
}
tabitems.forEach(item => item.addEventListener
    ("click", selectItem))


var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 2000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
}

const secondtabitems = document.querySelectorAll(".second-tab-item");

const secondtabContentitems = document.querySelectorAll(".second-tab-content-item");

function secondselectItem(e){
    secondremoveBorder();
    secondremoveShow();
 this.classList.add("second-tab-border");
  const secondtabContentitems = document.querySelector(`#${this.id}-content`);
  secondtabContentitems.classList.add("second-show");
}
function secondremoveBorder(){
    secondtabitems.forEach(item =>item.classList.remove("second-tab-border"));
}
function secondremoveShow(){
    secondtabContentitems.forEach(item =>item.classList.remove("second-show"));
}
secondtabitems.forEach(item => item.addEventListener
    ("click", secondselectItem));