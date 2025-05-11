document.addEventListener("DOMContentLoaded",()=>{
    gsap.from(".letter",1,{
        y:-20,
        opacity:0,
        ease:"power3.inOut",
        stagger:.1,
    })

    gsap.to(".top-left,.top-right",2,{
        top:"0",
        ease:"power4.inOut",
        delay:1.7,
    })

    gsap.to(".bottom-right",2,{
        bottom:"0",
        ease:"power4.inOut",
        delay:1.7,
    })

    gsap.to(".top-left",2,{
        left:"0",
        ease:"power4.inOut",
        delay:3.7,
    })

    gsap.to(".top-right,.bottom-right",2,{
        right:"0",
        ease:"power4.inOut",
        delay:3.7,
    })

    gsap.to(".block-left",2,{
        left:"-50%",
        ease:"power4.inOut",
        delay:3.7,
    })

    gsap.to(".block-right",2,{
        right:"-50%",
        ease:"power4.inOut",
        delay:3.7,
    })
})