const section01Img = document.querySelector(".seiction01-subimg");
const section02Txt = document.querySelector(".section02-txt");
const section01 = document.querySelector(".section01");
const section02 = document.querySelector(".section02");
const section03 = document.querySelector(".section03");

const section01EventFirst = () => {
  section01Img.style.right = "0%";
};
section01EventFirst();

section01Event01 = (e) => {
  if (innerWidth > 790 && scrollY < 1080) {
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
  if (innerWidth > 790) {
    if (scrollY < 2160 && scrollY > 1080) {
      if (e.deltaY > 0) {
        console.log(e);
        window.scroll({
          top: 2160,
          behavior: "smooth",
        });
        section02Txt.style.top = "-60%";
        section02Txt.style.transition = "all 1s";
      } else if (e.deltaY < 0) {
        window.scroll({
          top: 1080,
          behavior: "smooth",
        });
        section02Txt.style.top = "40%";
        section02Txt.style.transition = "all 1s";
      }
    }
  }
};
console.log(section01Event01);
window.addEventListener("wheel", section01Event01);

const section05Img = document.querySelector(".section05-bgbox");

//section 05 event;
window.addEventListener("scroll", () => {
  if (scrollY > 4000) {
    section05Img.style.width = "100%";
    section05Img.style.height = "100%";
  } else {
    section05Img.style.width = "80%";
    section05Img.style.height = "91%";
  }
});
