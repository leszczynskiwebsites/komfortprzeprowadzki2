        document.addEventListener("DOMContentLoaded", function () {
          const radioInputs = document.querySelectorAll('input[type="radio"][name="slider"]');
          let currentSlide = 0; // Zmienna do śledzenia aktualnego slajdu
      
          function changeSlide() {
            radioInputs[currentSlide].checked = false;
            currentSlide = (currentSlide + 1) % radioInputs.length;
            radioInputs[currentSlide].checked = true;
          }
      
          setInterval(changeSlide, 5000);
        });
    var copyright = document.getElementById('copyright');
    copyright.innerText = "Copyright © " + new Date().getFullYear();

    const hamburgerLabel = document.querySelector('.hamburger');
    const checkboxToggle = document.querySelector('#checkbox_toggle');

    hamburgerLabel.addEventListener('click', () => {
        if (checkboxToggle.checked) {
            hamburgerLabel.textContent = '☰'; // Change to "☰" when checked
        } else {
            hamburgerLabel.textContent = '✕'; // Change to "✕" when unchecked
        }
    });
 function aktywujPoPrzewinieciu() {
  const przewinietePiksele = window.scrollY;
  const navigation = document.getElementById("navigation");
  const midnav = document.getElementById("midnav");
  const linkInsideNavigation = midnav.querySelectorAll("a");
  const rightnav = document.getElementById("rightnav");
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  const nav1090px = menu.querySelectorAll("a");
  const hamburgericon = navbar.querySelectorAll("a");
  const linkInsideNavigation2 = rightnav.querySelectorAll("a");
  var leftNavImage = document.querySelector('#leftnav img');
  var logoImage = document.querySelector('.logo img');

  if (przewinietePiksele >= 100) {
    // Wykonaj akcję po przewinięciu strony o 100 pikseli
    navigation.style.backgroundColor = "white";
    navbar.style.backgroundColor = "white";
    menu.style.backgroundColor = "white";
    
    leftNavImage.src = '../ikony/logodark.png';
    logoImage.src = '../ikony/logodark.png';

    // Zmień kolor linków w #midnav na czarny
    linkInsideNavigation.forEach(link => {
      link.style.filter = "invert(100%)";
    });
    nav1090px.forEach(link => {
      link.style.filter = "invert(100%)";
    });
    hamburger.style.color = "black"
    linkInsideNavigation2.forEach(link => {
        link.style.filter = "invert(100%)";
    });
  } else {
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.326)";
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.438)";
    menu.style.backgroundColor = "rgba(0, 0, 0, 0.438)";
    hamburger.style.color = "white";
    leftNavImage.src = '../ikony/logo.png';
      logoImage.src = '../ikony/logo.png';
    nav1090px.forEach(link => {
      link.style.filter = "invert(0%)";
    });
    linkInsideNavigation2.forEach(link => {
        link.style.filter = "invert(0%)";
    });
    // Zmień kolor linków w #midnav na biały
    linkInsideNavigation.forEach(link => {
      link.style.filter = "invert(0%)";
    });
  }
}
//filter: invert(100%);
window.addEventListener("scroll", aktywujPoPrzewinieciu);


const seemoreaboutus = document.getElementById("seemoreaboutus");
seemoreaboutus.onclick = function()
{
    return false;
}

