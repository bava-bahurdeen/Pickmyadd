var header=document.querySelector("#header");
var windowheight=window.innerHeight;
var sticky_nav=document.querySelector("#sticky-nav");
var serach_bar=document.querySelector("#serach-bar")
var element=document.querySelector("#influncer-box");
var influncer_image=document.querySelector("#influncer-image")
var tabview=window.matchMedia("(max-width:784px)")
console.log(tabview);

window.addEventListener("scroll",()=>{
    let headerBotttom=header.getBoundingClientRect().bottom;
if(window.pageYOffset>10){
sticky_nav.style.boxShadow="5px 0px 5px rgba(0,0,0,0.9)"
sticky_nav.style.backgroundColor="white"
}
else if(window.pageYOffset<10){
    sticky_nav.style.boxShadow="none"
sticky_nav.style.backgroundColor="transparent"

}
if(headerBotttom<175){
    serach_bar.style.display="block"
}
else if(headerBotttom>176){
    serach_bar.style.display="none"
}

    let elementtop=element.getBoundingClientRect().top;
    let elementbottom=element.getBoundingClientRect().bottom;

    if(elementtop>810||elementbottom<500){
        element.classList.remove('radius')
    }
    else if(elementtop<700){
        element.classList.add('radius')
 
    }
   
if(tabview.matches){
    // element.style.transform="scale(1.3)"
    if(elementtop>810||elementbottom<500){
     element.style.transform="scale(0.8)"
    }
    else if(elementtop<700){
element.style.transform="scale(1)" 
    }
}     
})
