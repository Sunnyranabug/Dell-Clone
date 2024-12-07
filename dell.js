function Canvas() {
    document.querySelector(".bar_menu").classList.toggle("bar_menu_show")

    document.querySelector(".dropdown").classList.toggle("dropdown_show")
    document.querySelector("body").classList.toggle("body_scroll")
}
function like(n) {
    document.querySelectorAll(".fa-heart")[n].classList.toggle("fa_heart_red")
}


function ProductOpen() {
    document.querySelector(".product_inside").classList.add("product_inside_show")
}
function ProductClose(e) {
    e.stopPropagation()
   
    e.target.parentElement.classList.remove("product_inside_show")
}

// function ProductOpen (e){
//     e.target.children[0].classList.add("product_inside_show")
// }

// function ProductOpen (e){
//     e.target.parentElement.classList.remove("product_inside_show")
// }


//------------+++++++++++++++++++++------------blue vali  Percentage value------------+++++++++++++++++++++++++++++++----------------
    
var Val1=0 ;
   function PrinT1(){
    if(Val1<64){
    document.querySelector(".per64").innerHTML= `${++Val1} %`;
   }
   
}
//    function Incrs1(){
//      setInterval (PrinT1, 50)
//    }
//    Incrs1()rv 

setInterval (PrinT1, 50)

   var Val2=0 ;
   function PrinT2(){
    if(Val2<39){
    document.querySelector(".per39").innerHTML= `${++Val2} %`;
   }
   
}
   function Incrs2(){
     setInterval (PrinT2, 50)
   }
   Incrs2()

   var Val3=0 ;
   function PrinT3(){
    if(Val3<59){
    document.querySelector(".per59").innerHTML= `${++Val3} %`;
   }
   
}
   function Incrs3(){
     setInterval (PrinT3, 100)
   }
   Incrs3()

//    ---------------++++++++++        FAQ's SECTION           ++++++++++++------------------

function acc (n){
document.querySelectorAll(".FAQ")[n].classList.toggle("FAQ_SHOW")
}


//---------+++++++++++++++          FORM         ++++++++++-------------

function Form(){
document.querySelector(".form").classList.toggle("form_show")
document.querySelector(".dropdownf").classList.toggle("dropdownf_show")
document.querySelector("body").classList.toggle("body_scroll")
}

setTimeout(Form, 4000)

function validation(){
let Pattern= /[a-z A-Z]+ [A-Z a-z]+/

let NAME=document.querySelector(".InputN").value ;

 if (NAME.length === 0) {
    document.querySelector(".error").innerHTML=" " ;
    
}
else if(Pattern.test(NAME)===false) {
    document.querySelector(".error").innerHTML= "enter valid data*" ;
    document.querySelector(".error").classList.add("P1") ;
    document.querySelector(".error").classList.remove("P1B") ;
}



else{
    document.querySelector(".error").innerHTML= "ok"
    document.querySelector(".error").classList.remove("P1") ;
    document.querySelector(".error").classList.add("P1B") ;
    
}
}

function ValPhn(){
let Pattern=/[6-9][0-9]{9}$/
let PHONE=document.querySelector(".InputP").value ;

if (PHONE.length === 0) {
    document.querySelector(".errorP").innerHTML=" " ;
    
}

else if(Pattern.test(PHONE)===false){
    document.querySelector(".errorP").innerHTML="not valid"
    document.querySelector(".errorP").classList.add("P1");
    document.querySelector(".errorP").classList.remove("P1B");
}
else{
    document.querySelector(".errorP").innerHTML="ok";
    document.querySelector(".errorP").classList.remove("P1") ;
    document.querySelector(".errorP").classList.add("P1B") ;
}
}



function ValEmail(){
let Pattern=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
let EMAIL=document.querySelector(".InputE").value ;

if (EMAIL.length === 0) {
    document.querySelector(".EError").innerHTML=" " ;
    
}

else  if(Pattern.test(EMAIL)===false){
    document.querySelector(".EError").innerHTML="Enter valid Email" ;
    document.querySelector(".EError").classList.add("P1")
    document.querySelector(".EError").classList.remove("P1B")    
}
else{
    document.querySelector(".EError").innerHTML="ok"
    document.querySelector(".EError").classList.add("P1B")
    document.querySelector(".EError").classList.remove("P1")
} 

console.log(Email());
}

//    ---------------======================     CROUSEL    ============----------------------------

document.addEventListener('DOMContentLoaded', () => {
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function updateCarousel() {
const offset = -currentIndex * 100;
carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
updateCarousel();
});

nextButton.addEventListener('click', () => {
currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
updateCarousel();
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
nextButton.click();
}, 3000);
});