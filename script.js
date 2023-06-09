
var mobileMenuBtn = document.querySelector(".hamburger");
var mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.innerHTML = "Close";
  } 
  else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.innerHTML = "Menu";
  }
});

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;
var navbar2 = document.querySelector("mobile-menu");
var sticky2 = navbar2.offsetTop;

function openLink(link){
  if (confirm("Open instagram in new tab?") == true) {
    window.open("http://"+link);
  }
}
function openMail(){
    if (confirm("Open email?") == true) {
        window.open("mailto:maisy.millage@gmail.com");
      }
}
function openNum(){
    if (confirm("Call: +1 (805)-746-4832 ?") == true) {
        window.open("tel:+1 (805)-746-4832");
      }
}

function playV1(){
    //window.alert("s1 pressed");
    $('.v1')[0].contentWindow.postMessage('{"event":"command","func":"'+'playVideo'+'",":""}','*');
}

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar2.classList.add("sticky2")
  } else {
    navbar.classList.remove("sticky");
    navbar2.classList.remove("sticky2");
  }
}
