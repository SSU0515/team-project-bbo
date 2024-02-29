//MainPage Product Click Event
const mainProduct = document.querySelector(".common-product-hover");
const productList = document.querySelector(".common-product-hover-menu");
const header = document.querySelector("header");
//MainPage Brand Click Event
const mainbrand = document.querySelector(".common-brand-hover");
const brandList = document.querySelector(".common-brand-hover-menu");
const mainMake = document.querySelector(".common-makeup-hover");

mainProduct.addEventListener("mouseenter", () => {
  productList.classList.add("common-active-product");
  header.style.height = "464px";
  header.classList.remove("active");
  brandList.style.display = "none";
  productList.style.display = "flex";
});
productList.addEventListener("mouseleave", () => {
  productList.classList.remove("common-active-product");
  header.style.height = "100px";
});

// //MainPage Brand Click Event
// const mainbrand = document.querySelector(".brand-hover");
// const brandList = document.querySelector(".brand-hover-menu");

mainbrand.addEventListener("mouseenter", () => {
  brandList.classList.add("common-active-brand");
  brandList.style.display = "flex";
  header.style.height = "464px";
  header.classList.remove("active");
  productList.style.display = "none";
});
brandList.addEventListener("mouseleave", () => {
  brandList.classList.remove("common-active-brand");
  header.style.height = "100px";
});

mainMake.addEventListener("mouseenter", () => {
  mainMake.classList.add("common-makeup-active");
  brandList.classList.remove("common-active-brand");
});
mainMake.addEventListener("mouseleave", () => {
  mainMake.classList.remove("common-makeup-active");
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
  } else {
    gototopBtn.classList.remove("active");
    header.classList.remove("active");
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
  commonCateList.style.display = "none";
  commonMenuList.style.display = "block";
  commonCate.style.borderBottom = "2px solid #777";
});
commonCate.addEventListener("click", () => {
  commonCateList.style.display = "block";
  commonMenuList.style.display = "none";
  commonCate.style.borderBottom = "2px solid #111";
  commonCate.classList.toggle("active");
  commonCateList.classList.toggle("active");
  commonMenu.removeEventListener("click");
});

// let size = document.getElementById("size");

// window.onresize = function () {
//   innerWidth <= "1024"
//     ? (mainGnb.style.opacity = "0")
//     : (mainGnb.style.opacity = "1");
// };
let innerWidth = window.innerWidth;

mainTrigger.addEventListener("click", () => {
  mainTrigger.classList.toggle("active");
  if (mainGnb.style.display === "none" || mainGnb.style.display === "") {
    mainGnb.style.display = "block";
    window.removeEventListener("scroll", scrollHead);
  } else {
    mainGnb.style.display = "none";
    window.addEventListener("scroll", scrollHead);
  }
});

if (innerWidth <= "1024") {
  mainTrigger.addEventListener("click", () => {
    commonReToggleBtn.classList.add("active");
    mainGnb.style.opacity = "0";
  });
} else {
  commonReToggleBtn.classList.remove("active");
}
commonReXbtn.onclick = () => {
  commonReToggleBtn.classList.remove("active");
  mainGnb.style.opacity = "0";
};

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
