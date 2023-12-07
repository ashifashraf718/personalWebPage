// let sections=document.querySelectorAll("");
// window.onscroll=()=>{
//     sections.forEach((sec)=>{
//         let top=window.scrollY
//         let offSet=sec.offsetTop - 200;
//         let height=sec.offsetHeight;

//         if(top>=offSet && top<= offSet + height){
//             sec.classList.add("show-animation")
//         }else{
            
//             sec.classList.remove("show-animation")
//         }
//     })
// }
window.addEventListener("scroll",reveal);


function reveal(){
    var reveals=document.querySelectorAll(".reveal"); 

    for(var i=0; i<reveals.length; i++){
        var windowHeight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top; 
        var revealpoint=150;

        if(revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active')
        }else{
            reveals[i].classList.remove('active')

        }
    }
}