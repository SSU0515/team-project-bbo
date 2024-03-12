const mainProduct = document.querySelector(".common-product-hover");
const productList = document.querySelector(".common-product-hover-menu");
const header = document.querySelector("header");

const mainbrand = document.querySelector(".common-brand-hover");
const brandList = document.querySelector(".common-brand-hover-menu");
const mainMake = document.querySelector(".common-makeup-hover");

//MainPage Product Click Event
mainProduct.addEventListener("mouseenter", () => {
  productList.classList.add("active");
  header.style.height = "464px";
  brandList.classList.remove("common-active-brand");
  header.style.background = "rgba(255, 255, 255, 0);";
});
mainProduct.addEventListener("mouseleave", () => {
  productList.classList.remove("active");
  header.style.height = "100px";
  he;
});

//MainPage Brand Click Event
console.log(mainbrand);
mainbrand.addEventListener("mouseenter", () => {
  brandList.classList.add("common-active-brand");
  header.style.height = "155px";
});
brandList.addEventListener("mouseleave", () => {
  brandList.classList.remove("common-active-brand");
  header.style.height = "100px";
});
//MainPage Makeup Click Event
mainMake.addEventListener("mouseenter", () => {
  brandList.classList.remove("common-active-brand");
  header.style.height = "100px";
});
mainMake.addEventListener("mouseleave", () => {
  header.style.height = "100px";
});

//MainPage Search Click Event
const searchClickClose = document.querySelector(".common-search-click-icon i");
const searchContent = document.querySelector(".common-search-click");
const searchClickOpen = document.querySelector(".common-search-btn i ");
console.log(searchContent);
searchClickOpen.onclick = () => {
  searchContent.classList.add("common-active-searchContent");
};
searchClickClose.onclick = () => {
  searchContent.classList.remove("common-active-searchContent");
};

//MainPage tigger Click Event
const mainTrigger = document.querySelector(".common-toggle-btn");
console.log(mainTrigger);
const mainGnb = document.querySelector(".common-toggle-btn-click");

// mainTrigger.addEventListener("click", () => {
//   mainTrigger.classList.toggle("active");
//   if (mainGnb.style.display === "none" || mainGnb.style.display === "") {
//     mainGnb.style.display = "block";
//     window.removeEventListener("scroll", scrollHead);
//   } else {
//     mainGnb.style.display = "none";
//     window.addEventListener("scroll", scrollHead);
//   }
// });
//MainPage Store Brand
const brandStore = document.querySelector(".common-brand-store-select");
const brandStoreMenu = document.querySelector(".common-brand-store-select p");
const brandStoreIcon = document.querySelector(".common-brand-store-select i");
const brandStoreList = document.querySelector(".common-store-list");

brandStore.addEventListener("click", () => {
  brandStore.classList.toggle("common-active-store-list");
  brandStoreList.classList.toggle("common-active-store-list");
  brandStoreMenu.classList.toggle("common-active-store-list");
  brandStoreIcon.classList.toggle("common-active-store-list");
});

//gototop

const gototopBtn = document.querySelector("#common-gototop");

const scrollHead = () => {
  if (window.scrollY > 0) {
    gototopBtn.classList.add("active");
    header.classList.add("active");
    brandList.style.background = "none";
    productList.style.background = "none";
  } else {
    gototopBtn.classList.remove("active");
    header.classList.remove("active");
    brandList.style.background = "rgba(255, 255, 255, 0)";
    productList.style.background = "rgba(255, 255, 255, 0)";
  }
};

if ((mainGnb.style.display = "none")) {
  window.addEventListener("scroll", scrollHead);
} else {
  window.removeEventListener("scroll", scrollHead);
}

gototopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});

//responsibility
const commonMenu = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-menu"
);
const commonMenuList = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-list-menu"
);
const commonCate = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-cate"
);
const commonCateList = document.querySelector(
  ".common-responsibility-toggle-menu-inner-title-list-cate "
);
const commonReToggleBtn = document.querySelector(
  ".common-responsibility-toggle-menu"
);
const commonReXbtn = document.querySelector(
  ".common-responsibility-search-box-icon-x"
);
console.log(commonReToggleBtn);

commonMenu.addEventListener("click", () => {
  commonMenu.classList.toggle("active");
  commonMenuList.classList.toggle("active");
  commonMenuList.style.display = "block";
  commonCateList.style.display = "none";
  commonCate.style.borderBottom = "2px solid #777";
  commonCate.style.color = "#777";
});
commonCate.addEventListener("click", () => {
  commonCate.classList.toggle("active");
  commonMenuList.style.display = "none";
  commonCateList.style.display = "block";
  commonCate.style.borderBottom = "2px solid #111";
  commonCate.style.color = "#111";
});

const desktopToggle = () => {
  mainTrigger.classList.toggle("active");
  if (mainGnb.style.display === "none" || mainGnb.style.display === "") {
    mainGnb.style.display = "block";
    window.removeEventListener("scroll", scrollHead);
  } else {
    mainGnb.style.display = "none";
    window.addEventListener("scroll", scrollHead);
  }
};

mainTrigger.addEventListener("click", desktopToggle);
// console.log("click");

let Width = window.innerWidth;
window.addEventListener("resize", function () {
  if (innerWidth <= 1024) {
    mainTrigger.removeEventListener("click", desktopToggle);
    mainTrigger.onclick = () => {
      commonReToggleBtn.classList.add("active");
    };
  } else {
    commonReToggleBtn.classList.remove("active");
  }
});

commonReXbtn.onclick = () => {
  commonReToggleBtn.classList.remove("active");
};

window.addEventListener("resize", function () {
  if (innerWidth > 1024) {
    mainTrigger.addEventListener("click", desktopToggle);
    mainTrigger.onclick = () => {
      commonReToggleBtn.classList.remove("active");
    };
  } else {
    commonReToggleBtn.classList.remove("active");
  }
});

// window.addEventListener("resize", () => {
//   let width = window.innerWidth;
//   // width = window.innerWidth;
//   console.log(width);
//   if (width < 1024) {
//     mainTrigger.addEventListener("click", () => {
//       console.log("click");
//       mainTrigger.onclick = () => {
//         commonReToggleBtn.classList.add("active");
//       };
//     });
//   } else if (width > 1024) {
//     commonReToggleBtn.classList.remove("active");
//     commonReToggleBtn.style.display = "none";
//   }
// });
// let width = window.innerWidth;
// window.addEventListener("resize", () => {
//   // width = window.innerWidth;
//   console.log(width);
//   if (width < 1024) {
//     mainTrigger.onclick = () => {
//       mainGnb.style.display = "none";
//       commonReToggleBtn.classList.add("active");
//     };
//   } else {
//     mainTrigger.removeAttribute;
//     mainGnb.style.display = "blocks";
//     commonReToggleBtn.classList.remove("active");
//   }
// });

//responsibility-Store Brand
const RebrandStore = document.querySelector(
  ".common-responsibility-brand-store-select"
);
const RebrandStoreMenu = document.querySelector(
  ".common-responsibility-brand-store-select p"
);
const RebrandStoreIcon = document.querySelector(
  ".common-responsibility-brand-store-select i"
);
const RebrandStoreList = document.querySelector(
  ".common-responsibility-store-list"
);
console.log(RebrandStoreList);

RebrandStore.addEventListener("click", () => {
  RebrandStore.classList.toggle("active");
  RebrandStoreList.classList.toggle("active");
  RebrandStoreMenu.classList.toggle("active");
  RebrandStoreIcon.classList.toggle("active");
});

const addtocart = document.querySelector("#common-addtocart");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    addtocart.style.bottom = "80px";
  } else {
    addtocart.style.bottom = "10px";
  }
});
//반응형 삼단바 리스트 마우스 오버
const CommonReTitle = document.querySelectorAll(".common-responsibility-menu");
const CommonReList = document.querySelectorAll(
  ".common-responsibility-menu-list "
);
const CommonMinusBtn = document.querySelectorAll(
  ".common-responsibility-menu-plus span:nth-child(2)"
);
// CommonReTitle.addEventListener("click", () => {
//   for (let i = 0; i < 9; i++) {
//     CommonReList.classList.toggle("active");
//     CommonMinusBtn.classList.toggle("active");
//   }
// });
