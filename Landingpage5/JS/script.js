document.addEventListener("DOMContentLoaded",()=>{
    let tl = gsap.timeline();

    const logo = document.querySelectorAll(".left nav h2");
    const header = document.querySelector(".left article");

    const paras = document.querySelectorAll(".info div p");
    const videoDiv = document.querySelector(".videodiv");

    const leftComponent = document.querySelector(".img-wrapper");
    const navselems = document.querySelectorAll(".right ul li");
    const cards = document.querySelectorAll(".cards");


    gsap.set(logo,{opacity:0,y:"-100%",});
    gsap.set(header,{y:150,opacity:0,});
    gsap.set(paras,{y:"100%",opacity:0});
    gsap.set(videoDiv,{y:100,opacity:0});
    gsap.set(".pop-up",{x:-50});
    

    gsap.set(leftComponent,{x:100,opacity:0,});
    gsap.set(navselems,{y:-200,opacity:0});
    gsap.set(cards,{y:100,opacity:0});
    gsap.set(".progress div",{opacity:0});

    tl.to(logo,{
        y:0,
        opacity:1,
        ease:"power4.InOut",
        duration:1,
        delay:.1,
    },'same');

    tl.to(header,{
        y:0,
        opacity:1,
        ease:"power4.InOut",
        duration:1,
        delay:.1,
        onComplete:()=>{
            gsap.to(".pop-up",{
                x:2,
                ease:"elastic.out(1, 0.8)",
                duration:.5,
                delay:.3,
            })
        }
    },'same');

    tl.to(videoDiv,{
        y:0,
        opacity:1,
        ease:"Expo.InOut",
        duration:.78,
    })

    tl.to(paras,{
        y:0,
        opacity:1,
        ease:"power4.InOut",
        duration:.5,
        stagger:.06,
    },"same2")

    tl.to(leftComponent,{
        x:0,
        opacity:1,
        ease:"power4.InOut",
        duration:2,
        delay:.6,
    },"same2")

    tl.to(navselems,{
        y:0,
        opacity:1,
        ease:"power4.InOut",
        duration:.8,
        stagger:.07,
    })

    tl.to(cards,{
        y:0,
        opacity:1,
        ease:"Power4.InOut",
        duration:1,
        stagger:1.2,
        onComplete:()=>{
            gsap.from(".progress div",{
                height:0,
                ease:"elastic.out(1, 0.8)",
                duration:1,
            }),
            gsap.to(".progress div",{
                opacity:1,
                ease:"Power4.InOut",
                duration:.5,
            })
        }
    })


})