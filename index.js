// script for about section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//   script for menu bar for small devices

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

//   js for sticky navigation bar

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// JS for Working contact form

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbyd1gDESbwvW-zONu0OUIRUpAYN-SXa2Ys3kicMyBfp7wcTRmFifXANKSLW5Zd3D0l5/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Message sent successfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

// theme switch
const toogleswitch = document.querySelector(".toogleswitch");
toogleswitch.addEventListener("click", function () {
  document.body.classList.toggle("switch");
});















let menu = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menu.onclick = function () {
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
};

let list = document.querySelectorAll(".list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}
