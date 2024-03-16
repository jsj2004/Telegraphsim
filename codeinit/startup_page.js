let cnvrt=document.querySelector("#convert");
cnvrt.addEventListener("click",funct);

function funct(){
    let head=document.querySelector(".heading");
    if(head.innerHTML=="- . .-.. . --. .-. .- .--. ....") head.innerHTML="T E L E G R A P H";
    else head.innerHTML="- . .-.. . --. .-. .- .--. ....";
}