var bonusSport = document.querySelector(".wrapper-bonus-sport");
var bonusLaw = document.querySelector(".wrapper-bonus-law");
var bonusEconomy = document.querySelector(".wrapper-bonus-economy");
var bonusHealth = document.querySelector(".wrapper-bonus-health");
var bonusCulture = document.querySelector(".wrapper-bonus-culture");
var btnSport = document.querySelector(".btn-sport");
var btnLaw = document.querySelector(".btn-law");
var btnEconomy = document.querySelector(".btn-economy");
var btnHealth = document.querySelector(".btn-health");
var btnCulture = document.querySelector(".btn-culture");

btnSport.addEventListener('click', (e)=>{
    e.preventDefault();
    if(btnSport.innerText === "Xem thêm"){
    bonusSport.style.display = "flex";
    btnSport.innerText = "Ẩn bớt";
    }
    else if(btnSport.innerText === "Ẩn bớt"){
        bonusSport.style.display = "none";
        btnSport.innerText = "Xem thêm";
        }
});
// end sport
btnLaw.addEventListener('click', (e)=>{
    e.preventDefault();
    if(btnLaw.innerText === "Xem thêm"){
    bonusLaw.style.display = "flex";
    btnLaw.innerText = "Ẩn bớt";
    }
    else if(btnLaw.innerText === "Ẩn bớt"){
        bonusLaw.style.display = "none";
        btnLaw.innerText = "Xem thêm";
        }
});
// end law
btnEconomy.addEventListener('click', (e)=>{
    e.preventDefault();
    if(btnEconomy.innerText === "Xem thêm"){
    bonusEconomy.style.display = "flex";
    btnEconomy.innerText = "Ẩn bớt";
    }
    else if(btnEconomy.innerText === "Ẩn bớt"){
        bonusEconomy.style.display = "none";
        btnEconomy.innerText = "Xem thêm";
        }
});
// end economy
btnHealth.addEventListener('click', (e)=>{
    e.preventDefault();
    if(btnHealth.innerText === "Xem thêm"){
    bonusHealth.style.display = "flex";
    btnHealth.innerText = "Ẩn bớt";
    }
    else if(btnHealth.innerText === "Ẩn bớt"){
        bonusHealth.style.display = "none";
        btnHealth.innerText = "Xem thêm";
        }
});
// end health
btnCulture.addEventListener('click', (e)=>{
    e.preventDefault();
    if(btnCulture.innerText === "Xem thêm"){
    bonusCulture.style.display = "flex";
    btnCulture.innerText = "Ẩn bớt";
    }
    else if(btnCulture.innerText === "Ẩn bớt"){
        bonusCulture.style.display = "none";
        btnCulture.innerText = "Xem thêm";
        }
});
// end culture
var pageSport = document.querySelector(".page-sport");
var pageLaw = document.querySelector(".page-law");
var pageEconomy = document.querySelector(".page-economy");
var pageHealth = document.querySelector(".page-health");
var pageCulture = document.querySelector(".page-culture");
var wrapperSport = document.querySelector(".wrapper-sport");
var wrapperLaw = document.querySelector(".wrapper-law");
var wrapperEconomy = document.querySelector(".wrapper-economy");
var wrapperHealth = document.querySelector(".wrapper-health");
var wrapperCulture = document.querySelector(".wrapper-culture");
// click
pageSport.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapperLaw.classList.add("wrapper");
    wrapperEconomy.classList.add("wrapper");
    wrapperHealth.classList.add("wrapper");
    wrapperCulture.classList.add("wrapper");
    btnSport.classList.add("wrapper");
    bonusSport.style.display = "flex";
    wrapperSport.classList.remove("wrapper");
    pageSport.style.background = "silver";
    pageLaw.style.background = "white";
    pageEconomy.style.background = "white";
    pageHealth.style.background = "white";
    pageCulture.style.background = "white";
});
//
pageLaw.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapperSport.classList.add("wrapper");
    wrapperEconomy.classList.add("wrapper");
    wrapperHealth.classList.add("wrapper");
    wrapperCulture.classList.add("wrapper");
    btnLaw.classList.add("wrapper");
    bonusLaw.style.display = "flex";
    wrapperLaw.classList.remove("wrapper");
    pageLaw.style.background = "silver";
    pageSport.style.background = "white";
    pageEconomy.style.background = "white";
    pageHealth.style.background = "white";
    pageCulture.style.background = "white";
});
//
pageEconomy.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapperLaw.classList.add("wrapper");
    wrapperSport.classList.add("wrapper");
    wrapperHealth.classList.add("wrapper");
    wrapperCulture.classList.add("wrapper");
    btnEconomy.classList.add("wrapper");
    bonusEconomy.style.display = "flex";
    wrapperEconomy.classList.remove("wrapper");
    pageEconomy.style.background = "silver";
    pageSport.style.background = "white";
    pageLaw.style.background = "white";
    pageHealth.style.background = "white";
    pageCulture.style.background = "white";
});
//
pageHealth.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapperLaw.classList.add("wrapper");
    wrapperEconomy.classList.add("wrapper");
    wrapperSport.classList.add("wrapper");
    wrapperCulture.classList.add("wrapper");
    btnHealth.classList.add("wrapper");
    bonusHealth.style.display = "flex";
    wrapperHealth.classList.remove("wrapper");
    pageHealth.style.background = "silver";
    pageSport.style.background = "white";
    pageEconomy.style.background = "white";
    pageLaw.style.background = "white";
    pageCulture.style.background = "white";
});
//
pageCulture.addEventListener('click', (e)=>{
    e.preventDefault();
    wrapperLaw.classList.add("wrapper");
    wrapperEconomy.classList.add("wrapper");
    wrapperHealth.classList.add("wrapper");
    wrapperSport.classList.add("wrapper");
    btnCulture.classList.add("wrapper");
    bonusCulture.style.display = "flex";
    wrapperCulture.classList.remove("wrapper");
    pageCulture.style.background = "silver";
    pageSport.style.background = "white";
    pageEconomy.style.background = "white";
    pageLaw.style.background = "white";
    pageHealth.style.background = "white";
});

