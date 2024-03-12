const section01Img = document.querySelector(".section01-sub img");

const section01EventFirst = (e) => {
  if (e) {
    section01Img.style.left = `"0"`;
  }
};

section01EventFirst();

console.log(section01Img);
