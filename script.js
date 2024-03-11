const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elemcontainer = document.querySelector(".elemcontainer");
let fixed = document.querySelector(".fixedimage");
elemcontainer.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
elemcontainer.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})
let elems = document.querySelectorAll(".elem")
elems.forEach(function(e) {
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("dataimage");
        console.log(image);
        fixed.style.backgroundImage = `url(${image})`;
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 80,
  });

let loader = document.querySelector(".loader");
setTimeout(function() {
    loader.style.top = "-100%"
}, 4200);