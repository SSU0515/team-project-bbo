const section01Img = document.querySelector(".seiction01-subimg");
const section02Txt = document.querySelector(".section02-txt");
const scrollPosition = window.scrollY;

const section01EventFirst = () => {
  section01Img.style.right = "0%";
};
section01EventFirst();

section01Event01 = (e) => {
  if (innerWidth > 768 && scrollY < 1080) {
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
  if (innerWidth > 768) {
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
};

section01Event02 = (e) => {
  if (innerWidth < 768) {
    if (scrollY < 1368) {
      if (e.deltaY > 0) {
        window.scroll({
          top: 1368,
          behavior: "smooth",
        });
      } else if (scrollY > 1368 && e.dataY < 0) {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }
};

window.addEventListener("wheel", section01Event01);
window.addEventListener("wheel", section01Event02);

const section05Img = document.querySelector(".section05-bgbox");

//section 05 event;
window.addEventListener("scroll", () => {
  if (innerWidth > 768 && scrollY > 4000) {
    section05Img.style.width = "100%";
    section05Img.style.height = "100%";
  } else if (innerWidth > 768 && scrollY < 4000) {
    section05Img.style.width = "80%";
    section05Img.style.height = "91%";
  }
});

//section 06 event

const card01 = document.querySelector(".card01");
const card02 = document.querySelector(".card02");
const card03 = document.querySelector(".card03");
const card04 = document.querySelector(".card04");
const card05 = document.querySelector(".card05");
const card06 = document.querySelector(".card06");

window.addEventListener("scroll", () => {
  if (scrollY > 5000 && innerWidth > 1024) {
    card01.style.opacity = "1";
    card01.style.transform = `translateY(0%)`;
    card02.style.opacity = "1";
    card02.style.transform = `translateY(20%)`;
    card03.style.opacity = "1";
    card03.style.transform = `translateY(5%)`;
  } else if (scrollY < 4000 && innerWidth > 1024) {
    card01.style.opacity = "0";
    card01.style.transform = `translateY(20%)`;
    card02.style.opacity = "0";
    card02.style.transform = `translateY(40%)`;
    card03.style.opacity = "0";
    card03.style.transform = `translateY(25%)`;
  }
});

window.addEventListener("scroll", () => {
  if (scrollY > 5500 && innerWidth > 1024) {
    card04.style.opacity = "1";
    card04.style.transform = `translateY(20%)`;
    card05.style.opacity = "1";
    card05.style.transform = `translateY(40%)`;
    card06.style.opacity = "1";
    card06.style.transform = `translateY(25%)`;
  } else if (scrollY < 4000 && innerWidth > 1024) {
    card04.style.opacity = "0";
    card04.style.transform = `translateY(40%)`;
    card05.style.opacity = "0";
    card05.style.transform = `translateY(60%)`;
    card06.style.opacity = "0";
    card06.style.transform = `translateY(45%)`;
  }
});

const event06_1 = document.querySelector(".section06Simg01");
const event06_2 = document.querySelector(".section06Simg02");

window.addEventListener("scroll", () => {
  if (scrollY > 6800 && innerWidth > 768) {
    event06_1.classList.add("imgWrap02Event");
    event06_2.classList.add("imgWrap02Event");
  } else if (scrollY < 6800) {
    event06_1.classList.remove("imgWrap02Event");
    event06_2.classList.remove("imgWrap02Event");
  }
});
