var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay : {
        delay: 3000,
    },
    speed: 800
});

// swiper.on('slideChange', function() {
//     console.log("안녕하세요");
// }); //슬라이드가 지나갈 때마다 "안녕하세요" 문구가 콘솔에 뜬다