const togglebtn = document.querySelector(".togglebtn");
const nav =document.querySelector(".navlinks");
const link =document.querySelector(".navlinks li");

togglebtn.addEventListener("click" , function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});
var type = new Typed(".input",{
    strings:["Frontend Developer" , " UI/UX Designer"],
    typedSpeed :70,
    backSpeed:50,
    loop:true
})