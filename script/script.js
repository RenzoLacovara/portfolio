var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});

var modal = document.getElementById("miModal");
var modalImg = document.getElementById("modalzoom");
const imgs = document.getElementsByClassName("imagen");
const zoomImg = (e) => {
  var img = document.getElementById(e.target.id);
  modal.style.display = "block";
  modalImg.src = img.src;
};
for (let img of imgs) {
  img.addEventListener("click", zoomImg);
}
function cerrarimg() {
  modalzoom.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    modalzoom.className = "modal-content";
  }, 400);
}

let mybutton = document.getElementById("goup");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function toggle() {
  document.querySelector("#burg").classList.remove("is-active");
}

$(document).ready(function () {
  var $sm = 660;
  var $md = 768;

  function resizeThis() {
    $imgH = $(".middle img").width();
    if ($(window).width() >= $sm) {
      $(".left,.right,.section").css("height", "350px");
    }
  }

  resizeThis();

  $(window).resize(function () {
    resizeThis();
  });

  $(window).scroll(function () {
    $(".section").each(function () {
      var $elementPos = $(this).offset().top;
      var $scrollPos = $(window).scrollTop();

      var $sectionH = $(this).height();
      var $h = $(window).height();
      var $sectionVert = $h / 2 - $sectionH / 4;

      if (
        $elementPos - $sectionVert <= $scrollPos &&
        $elementPos - $sectionVert + $sectionH > $scrollPos
      ) {
        $(this).addClass("animated");
      } else {
        $(this).removeClass("animated");
      }
    });
  });
});
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
