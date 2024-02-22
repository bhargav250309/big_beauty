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

// --------carausel-----------

let slider = document.querySelector('.slider');

let image = document.querySelector('.slide');
let right = document.querySelector('.slider-rightbtn');
let left = document.querySelector('.slider-leftbtn');

let carousel = [
    // '/bigbeauty/graphic1.png',
    // '/bigbeauty/graphic2.jpg',
    // '/bigbeauty/graphic3.png'
    '/bigbeauty/Screenshot 2023-12-25 135720.png',
    '/bigbeauty/Screenshot 2023-12-25 135741.png'
];

let count = 0;
image.src = carousel[count];

setInterval(() => {
    for (i = 0; i <= carousel.length; i++) {
        count++;
        if (count == 2) {
            count = 0;
        }
        image.src = carousel[count];
    }
}, 3000);

left.addEventListener('click', () => {
    for (i = carousel.length; i >= 2; i--) {
        if (count == 0) {
            count = 2;
        }
        count--;
        image.src = carousel[count];
    }
});

right.addEventListener('click', () => {
    for (i = 0; i <= carousel.length; i++) {
        count++;
        if (count == 2) {
            count = 0;
        }
        image.src = carousel[count];
    }
});

// -------best selling product----------

let nextBtn = document.querySelector('.selling-rightbtn');

let preBtn = document.querySelector('.selling-leftbtn');

var span = document.querySelector('.sliderbtn2');
var div = document.querySelectorAll('.bsproduct');
var l = 0;

setInterval(() => {
    l++;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-856px"; }
        if (l == 2) { i.style.left = "-1712px"; }
        if (l > 2) { l = -1; }

    }
}, 4000);

nextBtn.onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-856px"; }
        if (l == 2) { i.style.left = "-1712px"; }
        if (l > 2) { l = 2; }
    }
}

preBtn.onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-856px"; }
        if (l == 2) { i.style.left = "-1712px"; }
        if (l >= 2) { l = 2; }
    }
}

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

let loginBtn1 = document.querySelector('.loginbtn1');
let loginUser1 = document.querySelector('.username');
let loginPass1 = document.querySelector('.password');


loginBtn1.addEventListener('click', () => {
    let userData = {
        userName: loginUser1.value,
        userPass: loginPass1.value
    }
    console.log(userData);
    return 0;
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


let signinfunction = () => {
    let emailValue = accContaoner2.querySelector('.loginemail').value;
    if (emailValue.includes('@') && emailValue.includes('.com') && (!emailValue.includes(" "))){

    } 
    else {
        alert("Invalid Email");
    }
    console.log(emailValue);
    return 0;
}

let signBtn = accContaoner2.querySelector('.signin2');

signBtn.addEventListener('click', signinfunction);


document.addEventListener('keyup', (e) => {
    if (e.key == "Escape") {
        searchBox.style.right = "-70vw";
        accountBox.style.right = "-70vw";
        cartBox.style.right = "-70vw";
    }
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
