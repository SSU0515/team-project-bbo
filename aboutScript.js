const section01Img = document.querySelector(".section01-sub img");
const section02Txt = document.querySelector(".section02-txt");

const section01EventFirst = () => {
  section01Img.style.left = "20px";
};
section01EventFirst();

window.addEventListener("wheel", (e) => {
  if (innerWidth > 1024) {
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
  }
});

window.addEventListener("wheel", (e) => {
  if (innerWidth > 1024) {
    if (scrollY < 2160 && scrollY > 1080) {
      if (e.deltaY > 0) {
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
});

const section05Img = document.querySelector(".section05-bgbox");

window.addEventListener("scroll", () => {
  if (scrollY > 4100) {
    section05Img.style.width = "100%";
    section05Img.style.height = "100%";
    // section05Img.style.transition = "all 0.5s;";
  } else {
    section05Img.style.width = "1536px";
    section05Img.style.height = "720px";
  }
});

// section05ImgEvent();

// if (scrollY > 4304) {
//   section05Img.style.width = "100%";
//   section05Img.style.height = "100%";
// } else {
//   section05Img.style.width = "1536px";
//   section05Img.style.height = "720px";
// }

//section 06 card event
const section06TopImg = document.querySelectorAll(".cardTop");
const section06BottomImg = document.querySelectorAll(".cardBottom");

window.addEventListener("scroll", () => {
  if (innerWidth > 1024) {
    if (scrollY > 5000) {
      section06TopImg.forEach((e) => {
        e.classList.add("card0103");
      });
    } else if (scrollY < 4100) {
      section06TopImg.forEach((e) => {
        e.classList.remove("card0103");
      });
    }
  } else {
    section06TopImg.forEach((e) => {
      e.classList.add("card0103");
    });
  }
});

window.addEventListener("scroll", () => {
  if (scrollY > 5800) {
    section06BottomImg.forEach((e) => {
      e.classList.add("card0406");
    });
  } else if (scrollY < 4100) {
    section06BottomImg.forEach((e) => {
      e.classList.remove("card0406");
    });
  }
});

//section 06 event2

// const section06Event2 = document.querySelectorAll(".img-wrap02 img");
const section06Event2 = document.querySelector(".img-wrap02");

console.log(section06Event2);

window.addEventListener("scroll", () => {
  if (scrollY > 6500) {
    section06Event2.classList.add("imgWrap02Event");
  }
});
