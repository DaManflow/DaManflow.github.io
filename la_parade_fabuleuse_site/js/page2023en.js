$(document).ready(function(){
    $('.slick-carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  function changeLanguage() {
    var languageSelect = document.getElementById("language-select");
    var selectedValue = languageSelect.options[languageSelect.selectedIndex].value;
    if (selectedValue === "fr") {
      window.location.href = "page2023.html";
    }
  }
  document.addEventListener("DOMContentLoaded", function() {

  
    console.log(document.getElementById("myBtn"));
    
    // Obtenez la popup
    var modal = document.getElementById("myModal");
    
    // Obtenez le bouton qui ouvre la popup
    var btn = document.getElementById("myBtn");
    
    // Obtenez le bouton de fermeture de la popup
    var span = document.getElementsByClassName("close")[0];
    
    // Lorsque l'utilisateur clique sur le bouton, ouvrez la popup
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // Lorsque l'utilisateur clique sur le bouton de fermeture, fermez la popup
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // Lorsque l'utilisateur clique en dehors de la popup, fermez-la
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    });
    