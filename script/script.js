var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});

const darkMode = () => {
  const body = document.querySelector("body");
  const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const checkbox = document.querySelector("#mode");
  let theme = window.localStorage.getItem("theme");
  let preference;
  const preferencia = () => {
    if (systemDarkMode.matches) {
      preference = "dark";
    } else {
      preference = "light";
    }
  };
  const setPreferencia = (e) => {
    if (e.target.checked == true) {
      preference = "dark";
      window.localStorage.setItem("theme", "dark");
    } else if (e.target.checked == false) {
      preference = "light";
      window.localStorage.setItem("theme", "light");
    }
    setTheme(preference);
  };
  const setTheme = (pref) => {
    if (pref === "dark") {
      checkbox.checked = true;
      body.classList.add("oscuro");
    } else {
      checkbox.checked = false;
      body.classList.remove("oscuro");
    }
  };
  const estadoInicial = () => {
    if (theme === "dark") {
      checkbox.checked = true;
      body.classList.add("oscuro");
    } else {
      checkbox.checked = false;
      body.classList.remove("oscuro");
    }
  };
  checkbox.addEventListener("click", setPreferencia);
  window.addEventListener("DOMContentLoaded", preferencia);
  window.addEventListener("DOMContentLoaded", estadoInicial);
};
darkMode();

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
var lastScrollTop;
goup = document.getElementById("goup");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    goup.classList.add("visible");
  } else {
    goup.classList.remove("visible");
  }
  lastScrollTop = scrollTop;
});
function toggle() {
  document.querySelector("#burg").classList.remove("is-active");
}
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
