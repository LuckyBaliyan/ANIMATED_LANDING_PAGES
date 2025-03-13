/*
gsap.registerPlugin(CustomeEase);
const customeEase = CustomeEase.create("custome",".87,0,.13,1");
This will not work untill you install gsap through npm --- 
*/
const counter = document.getElementById("counter");
const customeEase = "cubic-bezier(.87,0,.13,1)";

//setting the initial state of video conatiner its just like gsap.from but better than
//that

gsap.set(".video-container",{
    scale:0,
    rotate:-20,
});


gsap.to(".hero",{
    clipPath:"polygon(0% 45%,25% 45%,25% 55%,0% 55%)",
    duration:1.5,
    ease:customeEase,
    delay:1,
});

gsap.to(".hero",{
    clipPath:"polygon(0% 45%,100% 45%,100% 55%,0% 55%)",
    duration:2,
    ease:customeEase,
    delay:3,

    onstart: ()=>{  // callback function starts when gsap.to function invokes
        gsap.to(".progress-bar",{
            width:"100vw",
            duration:2,
            ease:customeEase,
        });

        gsap.to(counter,{
            innerHTML:100,
            duration:2,
            ease:"Power4.Out",
            snap:{innerHTML:1}, // how much value the counter change
        });
    }
});

gsap.to(".hero",{
    clipPath:"polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    duration:1,
    ease:customeEase,
    delay:5,

    onstart: ()=>{
       gsap.to(".video-container",{
        scale:1,
        rotate:0,
        clipPath:"polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        duration:1.25,
        ease:customeEase,
       });

     gsap.to(".progress-bar",{
        opacity:0,
        duration:0.3, 
     });

     gsap.to(".logo",{
        left:"10%",
        duration:1.25,
        ease:customeEase,

        onstart: ()=>{
            gsap.to([".anim-out",".anim-in"],{
                y:"600%",
                duration:1,
                stagger:-0.025,
            })

            gsap.to(".logo1",{
                scale:2.3,
                duration:1,
                ease:customeEase,
            })
        }
     })
    },
});

// If neede two elems to animate same pass their array to object (gsap).

gsap.to([".header span",".coordinates span"],{ 
    y: "0%",
    duration:1,
    stagger:0.125,
    ease:"power3.out",
    delay:5.75,
})



