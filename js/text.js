// navbar 
let navabar = document.getElementById("navbar");
let menu = document.getElementById("menu");
let items = document.querySelector(".items ul");

window.onscroll = function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navabar.classList.add("active");

    }else{
        navabar.classList.remove("active")
    }
}

menu.onclick  = function () {
    items.classList.toggle("none");
    items.classList.toggle("show-nav");
}

// header setinterval text 
let write = document.querySelector(".text");
let text = "Computer and laptop shop now";
i = 0;

window.onload = function () {
    let tybeText = setInterval(() => {
        write.innerHTML += text[i]; 
        i += 1;

        if (i > text.length - 1) {
            clearInterval(tybeText);
          }
    }, 100);
}

// start in header
let contentImg = document.querySelector(".img-about img");
let arrayImg = ["images/about.jpg" , "images/abouut-2.jpg" , "images/about-3.jpg"];

setInterval(() => {
    let randimg = arrayImg[Math.floor(Math.random() * arrayImg.length)];
    let setimg =  contentImg.setAttribute("src" , randimg);
    contentImg.style.b
}, 2000);