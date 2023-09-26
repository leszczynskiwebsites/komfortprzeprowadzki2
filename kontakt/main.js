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