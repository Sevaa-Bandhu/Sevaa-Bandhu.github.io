// show menu options if screen in not phone
window.addEventListener('resize', () => {
    if(window.innerWidth > '625'){
        btnLogin.style.display='inline-flex';
        navLinks.style.display='block';
        menuStatus = 'show';
    }
});
// show or hide the menu options in phone screen
const btnLogin = document.querySelector('.log-sign-in');
const navLinks = document.querySelector('#nav-links-container');
let btnMenu = document.querySelector('#menu');
let menuStatus = 'none';
const showMenu = () => {
    if(menuStatus == 'none'){
        btnLogin.style.display='inline-flex';
        navLinks.style.display='block';
        menuStatus = 'show';
    }
    else{
        btnLogin.style.display='none';
        navLinks.style.display='none';
        menuStatus = 'none';
    }
};

btnMenu.addEventListener("click", showMenu);

//toggle the Search bar in navigation bar
let secondNavbar = document.querySelector('#search-item');
let translate = document.querySelector('#fa-language');
let langStatus = " हिंदी";
const toggleTranslate = () => {
    if(langStatus === ' हिंदी'){
        langStatus = ' English';
        translate.innerText = langStatus;
    }
    else{
        langStatus = ' हिंदी';
        translate.innerText = langStatus;
    }
};
translate.addEventListener("click", toggleTranslate);

//underlining the active link
let active = document.querySelectorAll(".nav-links");
const highlightNavLink = (requestActive) => {
    let currActive = document.querySelector(".active-nav-link");
    let reqId = requestActive.getAttribute("id");
        requestActive.classList.add("active-nav-link");
        if(currActive != requestActive)
            currActive.classList.remove("active-nav-link");
};
for(let activeItem of active){
    activeItem.addEventListener("click", () => {
        highlightNavLink(activeItem);
    });
}