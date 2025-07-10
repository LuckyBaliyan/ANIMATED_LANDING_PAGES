import { gsap } from "https://esm.sh/gsap";
import { SplitText } from "https://esm.sh/gsap/SplitText";
import { Flip } from "https://esm.sh/gsap/Flip";

gsap.registerPlugin(Flip, SplitText);

const setUpTextSplitting = ()=>{
    const textElements = document.querySelectorAll("h1, h2, p, a");
    textElements.forEach((elem)=>{
        SplitText.create(elem,{
            type: "lines",
            linesClass: "line",
        });

        const lines = elem.querySelectorAll(".line");
        lines.forEach((line)=>{
            const textContent = line.textContent;
            line.innerHTML = `<span>${textContent}</span>`;
        });
    });
};

const createCounterDigits = ()=>{
    const counter1 = document.querySelector(".counter-1");
    const num0 = document.createElement("div");
    num0.className = "num";
    num0.textContent = "0";
    counter1.appendChild(num0);

    const num1 = document.createElement("div");
    num1.className = "num num1offset1";
    num1.textContent = "1";
    counter1.appendChild(num1);

    const counter2 = document.querySelector(".counter-2");
    for(let i = 0;i<=10;i++){
        const numDiv = document.createElement("div");
        numDiv.className = i===1?"num numoffset2":"num";
        numDiv.textContent = i === 10 ? "0" : i;
        counter2.appendChild(numDiv);
    }

    const counter3 = document.querySelector(".counter-3");
    for(let i  = 0;i<=9;i++){
       const numDiv = document.createElement("div");
       numDiv.className = "num";
       numDiv.textContent = i%10;
       counter3.appendChild(numDiv);
    }

    const finalnum = document.createElement("div");
    finalnum.className = "num";
    finalnum.textContent = "0";
    counter3.appendChild(finalnum);
};

const animateCounter = (counter,duration,delay = 0)=>{
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance = 
      (counter.querySelectorAll(".num").length - 1)*numHeight;

    gsap.to(counter,{
        y:-totalDistance,
        duration:duration,
        delay:delay,
        ease:"power2.inOut",
    });
};

function animateImages(){
    const images = document.querySelectorAll(".img");

    images.forEach((img)=>{
        img.classList.remove("animate-out");
    });

    const state = Flip.getState(images);

    images.forEach((img)=>{
        img.classList.add("animate-out");
    });

    const mainTimeline = gsap.timeline();

    mainTimeline.add(
        Flip.from(state,{
            duration:1,
            stagger:0.1,
            ease:"power3.inOut",
        }),
    );

    images.forEach((img,index)=>{
        const scaleTimeline = gsap.timeline();

        scaleTimeline.to(
            img,{
                scale:2,
                duration:0.45,
                ease:"power3.in",
            },
            0.025
        ).to(
            img,{
                scale:1,
                duration:0.45,
                ease:"power3.Out",
            },
            0.5
        );

        mainTimeline.add(scaleTimeline,index*0.1);
    });

    return mainTimeline;
}

document.addEventListener("DOMContentLoaded",()=>{
    setUpTextSplitting();
    createCounterDigits();

    animateCounter(document.querySelector(".counter-3"),2.5);
    animateCounter(document.querySelector(".counter-2"),3);
    animateCounter(document.querySelector(".counter-1"),2,1.5);

    const tl = gsap.timeline();

    gsap.set(".img",{scale:0});

    tl.to(".hero-bg",{
        scaleY:"100%",
        duration:3,
        ease:"power2.inOut",
        delay:0.25,
    });

    tl.to(".img",{
        scale:1,
        duration:1,
        stagger:0.125,
        ease:"powe3.out",
        overwrite:"auto",
    },
    "<",
   );

   tl.to(".counter",{
    opacity:0,
    duration:0.3,
    ease:"power3.out",
    delay:0.3,
    onStart:()=>{
        animateImages();
    },
   });

   tl.to(".sidebar .divider",{
    scaleY:"100%",
    duration:1,
    ease:"power3.inOut",
    delay:1.25,
   },"<");

   tl.to(["nav .divider",".site-info .divider"],{
    scaleX:"100%",
    duration:1,
    scale:0.5,
    ease:"power3.inOut",
   },"<");

   tl.to(".logo",{
    scale:1,
    duration:1,
    ease:"power4.inOut",
   },"<");

   tl.to([".logo-name a span",".links a span, .links p span",".cta a span"],
    {
        y:"0%",
        duration:1,
        stagger:0.1,
        ease:"power4.out",
        delay:0.5,
    },"<"
   );

   tl.to([".header span",".site-info span",".hero-footer span"],{
    y:"0%",
    duration:1,
    stagger:0.1,
    ease:"power4.out",
   },"<");
});