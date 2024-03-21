const rect = document.querySelector("div").getBoundingClientRect();
console.log(rect);

const section01Img = document.querySelector(".section01-sub img");
const section02Txt = document.querySelector(".section02-txt");

const section01EventFirst = () => {
  section01Img.style.width = "90%";
};
section01EventFirst();

section01Event01 = (e) => {
  if (innerWidth > 1024 && scrollY < 1080) {
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
  if (innerWidth > 1024) {
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
  if (innerWidth > 768 && innerWidth < 1024) {
    if (scrollY < 980) {
      if (e.deltaY > 0) {
        console.log();
        window.scroll({
          top: 980,
          behavior: "smooth",
        });
      } else if (e.dataY < 0) {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }
};
console.log(section01Event01);
window.addEventListener("wheel", section01Event01);

const section05Img = document.querySelector(".section05-bgbox");

//section 05 event;
window.addEventListener("scroll", () => {
  if (scrollY > 3800) {
    section05Img.style.width = "100%";
    section05Img.style.height = "100%";
  } else {
    section05Img.style.width = "1536px";
    section05Img.style.height = "720px";
  }
});

// section 06 card event
const section06TopImg = document.querySelectorAll(".cardTop");
const section06BottomImg = document.querySelectorAll(".cardBottom");

console.log(section06TopImg);

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

const event06_1 = document.querySelector(".section06Simg01");
const event06_2 = document.querySelector(".section06Simg02");

window.addEventListener("scroll", () => {
  if (scrollY > 6800) {
    event06_1.classList.add("imgWrap02Event");
  } else if (scrollY < 6800) {
    event06_1.classList.remove("imgWrap02Event");
  }
});

window.addEventListener("scroll", () => {
  if (scrollY > 6800) {
    event06_2.classList.add("imgWrap02Event");
  } else if (scrollY < 6800) {
    event06_2.classList.remove("imgWrap02Event");
  }
});

console.log();
