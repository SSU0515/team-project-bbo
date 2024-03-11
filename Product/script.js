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
//반응형 menu, category
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
//main 삼단바 버튼 + 반응형
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
// const CommonReTitle = document.querySelectorAll(".common-responsibility-menu");
// const CommonReList = document.querySelectorAll(
//   ".common-responsibility-menu-list "
// );
// const CommonMinusBtn = document.querySelectorAll(
//   ".common-responsibility-menu-plus span:nth-child(2)"
// );

//=====================product js==========================
const newMenu = document.querySelector(".new-product-hidden-menu");
const newMenuBtn = document.querySelector(".new-product");
newMenuBtn.addEventListener("click", () => {
  newMenu.classList.toggle("active");
});

const arrayMenu = document.querySelector(".pro-list-select");
const arrayMenuBtn = document.querySelector(".pro-icon-shin");

arrayMenuBtn.addEventListener("click", () => {
  if (arrayMenu.style.display === "none") {
    arrayMenu.style.display = "flex";
  } else {
    arrayMenu.style.display = "none";
  }
});

import products from "./product_list.js";

const ul = document.querySelector(".pro-product-list");
const createList = function (product) {
  const proLi = document.createElement("li");
  const spanNew = document.createElement("span");
  const a = document.createElement("a");
  const innerName = document.createElement("a");
  const img = document.createElement("img");
  const imgHover = document.createElement("img");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const proPrice = document.createElement("span");

  proLi.id = product.id;

  const attr = document.createAttribute("src");
  img.setAttributeNode(attr);
  attr.value = product.img;
  imgHover.className = "product-imgHover";

  const imgScale = (e) => {
    attr.value = product.imgHover;
    e.target.style.transform = "scale(1.1)";
  };
  img.addEventListener("mouseenter", imgScale);

  img.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
    attr.value = product.img;
  });

  div.className = "product-detail";
  spanNew.className = "product-new";
  span.className = "product-desc";
  innerName.className = "product-innerName";

  const price = new Intl.NumberFormat("us", {
    currency: "KRW",
  }).format(product.price);

  proPrice.className = "product-price";
  spanNew.innerText = product.newItem;
  span.innerText = product.desc;
  innerName.innerText = product.name;
  proPrice.innerHTML = `<b>${price}</b>원`;

  div.append(span, innerName);
  a.append(img, imgHover);
  a.onclick = function () {
    a.target = "_blank";
    a.href =
      "https://www.etude.com/shop/category/lip/%ea%b8%80%eb%a0%88%ec%9d%b4%ec%a6%88-%ed%94%8c%eb%9f%bc%ed%94%84-%ea%b8%80%eb%a1%9c%ec%8a%a4-4g/";
  };
  proLi.append(a, spanNew, div, proPrice);
  ul.appendChild(proLi);
  let colorG = document.createElement("div");
  colorG.className = "product-color-group";
  div.append(colorG);
  let colorList = product.color;
  for (let i = 0; i < colorList.length; i++) {
    let selectColor = document.createElement("img");
    selectColor.classList = "product-select-color";
    const attrs = document.createAttribute("src");
    selectColor.setAttributeNode(attrs);
    attrs.value = colorList[i];
    colorG.append(selectColor);
  }

  const firstArray = document.querySelector(".fa-list");

  firstArray.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    proLi.classList.add("active");
    img.classList.add("active");
    div.classList.add("active");
    a.classList.add("active");
    proPrice.classList.add("active");
  });
};
const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createList(product);
    }
  });
};

importData();

const page = Object.keys(products);
console.log(page);

const arr = [];
for (let ele of page) {
  arr.push(ele);
}
console.log(arr.price);

// importData();
// const importData2 = () => {
//   products.data2.map((product) => {
//     if (!document.getElementById(product.id)) {
//       createList(product);
//     }
//   });
// };

// const importData3 = () => {
//   products.data3.map((product) => {
//     if (!document.getElementById(product.id)) {
//       createList(product);
//     }
//   });
// };

const nextPageBtns = document.querySelectorAll(".inner-num li");

// const proPages = [importData, importData2, importData3];

const reset = () => {
  nextPageBtns.forEach((pageBtn, idx) => {
    nextPageBtns[idx].classList.remove("active");
  });
};

const pageChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < nextPageBtns.length; i++) {
    if (target == i) {
      nextPageBtns[i].classList.add("active");
    }
  }
};

nextPageBtns.forEach((pageBtn) => {
  pageBtn.addEventListener("click", pageChange);
});
