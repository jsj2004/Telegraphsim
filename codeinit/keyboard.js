document.addEventListener("keydown",keypressup);
function keypressup(event){
    let ch= event.key;
    if(65<=ch[0]<=90){
        ch=ch.toLowerCase();
    }
    ch="#key"+ch;
    let keyb=document.querySelector(ch);
    keyb.style.transform= "translateY(20px)";
    keyb.style.boxShadow= "0px 10px 5px black";
}
document.addEventListener("keyup",keypressdown);
function keypressdown(event){
    let ch= event.key;
    if(65<=ch[0]<=90){
        ch=ch.toLowerCase();
    }
    ch="#key"+ch;
    let keyb=document.querySelector(ch);
    keyb.style.transform= "translateY(0px)";
    keyb.style.boxShadow= "0px 25px 5px rgb(78, 63, 42)";
}
