const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title:"Nike Journey Run",
    price: 629,
    colors: [
      {
        code: "orange",
        img: "./img/Product/dowload1.png",
      },
      {
        code: "darkgreen",
        img: "./img/Product/image-removebg-preview.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jorden 1 high",
    price: 939,
    colors: [
      {
        code: "white",
        img: "./img/Product/jordan.png",
      },
      {
        code: "pink",
        img: "./img/Product/brons.png",
      },
    ],
  },
  {
    id: 3,
    title: "Nike Dunk Low Twist",
    price: 459,
    colors: [
      {
        code: "black",
        img: "./img/Product/download3.png",
      },
      {
        code: "white",
        img: "./img/Product/giannis2.png",
      },
    ],
  },
  {
    id: 4,
    title: "  Nike Air Max SC",
    price: 659,
    colors: [
      {
        code: "lightblue",
        img: "./img/Product/download7.png",
      },
      {
        code: "transparent",
        img: "./img/Product/ja.png",
      },
    ],
  },
  {
    id: 5,
    title:"Nike Court Legacy",
    price: 899,
    colors: [
      {
        code: "black",
        img: "./img/Product/download8.png",
      },
      {
        code: "transparent",
        img: "./img/Product/kd.png",
      },
    ],
  },
  {
    id: 6,
    title: "Hippie",
    price: 579,
    colors: [
      {
        code: "gray",
        img: "./img/Product/hippie.png",
      },
      {
        code: "black",
        img: "./img/Product/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".sizes");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});