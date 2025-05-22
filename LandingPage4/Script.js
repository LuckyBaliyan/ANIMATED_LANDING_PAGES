
function Animate(){

    const block = document.querySelectorAll(".block");

    TweenMax.staggerFrom(block,0.8,{
        width:0,
        ease:Power1.easeIn,
        delay:2,
    },0.04);

    TweenMax.to(".loading",1,{
        x:2,
        opacity:0,
        ease:Expo.easeInOut,
        delay:1.5
    });

    TweenMax.staggerFrom("nav > a,.about p,.sub-header > a",2,{
        opacity:0,
        y:30,
        ease:Expo.easeInOut,
        delay:3,
    },0.06);

    TweenMax.to(".box img",1, {
        clipPath:"inset(0% 0% 0% 0%)",
        ease: "power4.inOut",
        delay:4.5,
    });
}

document.addEventListener("DOMContentLoaded",Animate);