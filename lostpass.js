// ----------sidemenu---------

let openBtn = document.querySelector('.fas2');
let closeBtn = document.querySelector('.fas');
let sideMenu = document.getElementById('sidemenu');

openBtn.addEventListener('click', () => {
    sideMenu.style.left = "0";
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.left = "-600px";
})


// ---------------searchbox--------------

let searchBox = document.querySelector('.searchbox');
let searchOpen = document.querySelector('#searchboxopen');
let searchClose = document.querySelector('.ser-close');

searchOpen.addEventListener('click', () => {
    searchBox.style.right = "0";
});

searchClose.addEventListener('click', () => {
    searchBox.style.right = "-70vw";
});


let serBtn = searchBox.querySelector('.ser-cat');
let options = searchBox.querySelectorAll('.option');
let selectBtn = searchBox.querySelector('.selectbtn');


serBtn.addEventListener('click', () => {
    searchBox.classList.toggle("active");
    searchBox.classList.remove("sborder");
});

options.forEach(option => {
    option.addEventListener('click', () => {
        let selbtn = option.querySelector(".sebtn").innerHTML;
        selectBtn.innerHTML = selbtn;
        selectBtn.style.color = "black";


        searchBox.classList.remove("active");
        console.log(selectBtn);
    })
});

let proBtn = document.querySelector('.ser-pro');

proBtn.addEventListener('click', () => {
    searchBox.classList.toggle("sborder");
    searchBox.classList.remove("active");
});


// -----------account box--------------


let accountBox = document.querySelector('.accountbox');
let accountOpen = document.querySelector('#accountboxopen');
let accountClose = document.querySelector('.acc-close');

accountOpen.addEventListener('click', () => {
    accountBox.style.right = "0";
});

accountClose.addEventListener('click', () => {
    accountBox.style.right = "-70vw";
});

let passBox = document.querySelector('.passwordout');
let passEye = passBox.querySelector('.showpass');
let passWord = passBox.querySelector('.password');

passEye.addEventListener('click', () => {
    if (passWord.type == "password") {
        passWord.type = "text";
        passEye.style.color = "black";
    } else {
        passWord.type = "password";
        passEye.style.color = "gray";
    }
})

let usernameOut = document.querySelector('.usernameout');
let passwordOut = document.querySelector('.passwordout');

usernameOut.addEventListener('click', () => {
    accountBox.classList.toggle("userb1");
    accountBox.classList.remove("userb2");
    accountBox.classList.remove("bgc");

});

passwordOut.addEventListener('click', () => {
    accountBox.classList.remove("userb1");
    accountBox.classList.toggle("userb2");
    accountBox.classList.toggle("bgc");

});

let createAcc = document.querySelector('.create-acc');
let alrAcc = document.querySelector('.alr-acc');
let accContaoner1 = document.querySelector('#loginp');
let accContaoner2 = document.querySelector('#cer-acc');

createAcc.addEventListener('click', () => {
    if (accContaoner1.style.visibility = "visible") {
        accContaoner1.style.visibility = "hidden";
        accContaoner2.style.visibility = "visible";
    }
});

alrAcc.addEventListener('click', () => {
    if (accContaoner2.style.visibility = "visible") {
        accContaoner2.style.visibility = "hidden";
        accContaoner1.style.visibility = "visible";

    }
})

let eBord = accContaoner2.querySelector('.email');

eBord.addEventListener('click', () => {
    accContaoner2.classList.toggle('emailb');
});

// --------------------cart box----------------

let cartBox = document.querySelector('.cartbox');
let cartOpen = document.querySelector('#cartboxopen');
let cartClose = document.querySelector('.cart-close');

cartOpen.addEventListener('click', () => {
    cartBox.style.right = "0";
});

cartClose.addEventListener('click', () => {
    cartBox.style.right = "-70vw";
});



let passCard = document.querySelector('.pass-box-out');
let eBox = passCard.querySelector('.email-input');

eBox.addEventListener('click', () => {
    passCard.classList.toggle('eborder');
});