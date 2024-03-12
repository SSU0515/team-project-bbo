const section01Img = document.querySelector(".section01-sub img");
const section02Txt = document.querySelector(".section02-txt");

const section01EventFirst = () => {
  section01Img.style.left = "20px";
};
section01EventFirst();

window.addEventListener("wheel", (e) => {
  if (scrollY < 1080) {
    if (e.deltaY > 0) {
      window.scroll({
        top: 1080,
        behavior: "smooth",
      });
      section01Img.style.left = "600px";
      section02Txt.style.top = "40%";
      section02Txt.style.transition = "all 1s";
    } else if (e.deltaY < 0) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      section01Img.style.left = "20px";
      section02Txt.style.top = "140%";
      section02Txt.style.transition = "all 1s";
    }
  }
});

window.addEventListener("wheel", (e) => {
  if (scrollY < 2160 && scrollY > 1080) {
    if (e.deltaY > 0) {
      window.scroll({
        top: 2160,
        behavior: "smooth",
      });
    } else if (e.deltaY < 0) {
      window.scroll({
        top: 1080,
        behavior: "smooth",
      });
    }
  }
});

const section05Img = document.querySelector(".section05-bgbox");

window.addEventListener("scroll", () => {
  if (scrollY > 4100) {
    section05Img.style.width = "100%";
    section05Img.style.height = "100%";
  } else {
    section05Img.style.width = "1536px";
    section05Img.style.height = "720px";
  }
});

section05ImgEvent();

// if (scrollY > 4304) {
//   section05Img.style.width = "100%";
//   section05Img.style.height = "100%";
// } else {
//   section05Img.style.width = "1536px";
//   section05Img.style.height = "720px";
// }
