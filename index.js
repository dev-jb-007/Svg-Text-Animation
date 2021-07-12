const svg=document.querySelectorAll(".text svg");
svg.forEach(element=>{
    let length=element.children[0].getTotalLength();
    element.children[0].style.strokeDasharray=length;
    element.children[0].style.strokeDashoffset=length;
});