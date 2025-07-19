 const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.header .search-form');
    const closeBtn = document.querySelector('.header .search-form .close-btn');

    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        searchForm.classList.remove('active');
    });

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm .classList.toggle('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
},
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
     },
    },
  });

 swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
},
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
     },
    },
  });