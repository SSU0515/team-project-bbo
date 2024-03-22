const section01Img = document.querySelector(".seiction01-subimg");
const section02Txt = document.querySelector(".section02-txt");
const scrollPosition = window.scrollY;

const section01EventFirst = () => {
  section01Img.style.right = "0%";
};
section01EventFirst();

window.addEventListener("wheel", section01Event01);
