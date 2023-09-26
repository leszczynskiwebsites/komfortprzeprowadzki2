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

  
  
  const seemoreaboutus = document.getElementById("seemoreaboutus");
  seemoreaboutus.onclick = function()
  {
      return false;
  }


  function openModal(imageSrc) {
    var modal = document.createElement("div");
    modal.classList.add("modal");
  
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
  
    var modalImg = document.createElement("img");
    modalImg.classList.add("modal-img");
    modalImg.src = imageSrc;
  
    var modalClose = document.createElement("span");
    modalClose.classList.add("modal-close");
    modalClose.innerHTML = "&times;";
    modalClose.addEventListener("click", closeModal);
  
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalClose);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
  
  function closeModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    modal.remove();
  }
  