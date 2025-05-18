import { mapClass,previews } from "./data.js";

console.log(mapClass,previews);

document.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector(".container");
    const previewBg = document.querySelector(".preview-bg");
    const items = document.querySelectorAll(".item");


    const alignmentsTop = ["0%","5%","25%","20%","15%","35%","30%","10%","25%","35%","15%","35%"];
    const alignmentsLeft = ["0%","65%","60%","73%","45%","55%","30%","5%","60%","70%","15%","55%"];

    const obj = previews[1]; //use kr object jo define kiya tha use ek varible m bherke usme index use kr bhai
    console.log(obj.title,obj.description,obj.tags);
   
    /*const clipPaths = [
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", 
    "polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", 
    "polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", 
    "polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)", 
    ];*/
    
    items.forEach((item,index)=>{
        item.addEventListener("mouseenter",()=>{
            let newImgsrc = `./assets/${index+1}.jpg`;

            changeBg(newImgsrc);
            applyStyles(index);
            applyTexts(index);
        })

        item.addEventListener("mouseleave",function (){
            changeBg("./assets/7.jpg");

            const imageElement = document.querySelector(`.preview.varient-${index + 1}.preview-img`);
            if (imageElement) {
                container.removeChild(imageElement);
            }
        })
    })

    function changeBg(newImgsrc){
        const newImg = document.createElement("img");
        newImg.src = newImgsrc;
        newImg.style.position = "absolute";
        newImg.style.width = "100%";
        newImg.style.height= "100%";
        newImg.style.objectFit = "cover";
        newImg.style.opacity = "0";

        previewBg.appendChild(newImg);

        gsap.to(newImg, {opacity:1,duration:0.5});

        if(previewBg.children.length > 1){
            const olImg = previewBg.children[0];
           gsap.to(olImg,{
               opacity:0,
                duration:0.5,
                onComplete:()=>{
                    previewBg.removeChild(olImg);
                }
            })
        }
    };

    function applyStyles(index){
       const imageElement = document.createElement("img");
       imageElement.src = `./assets/${index + 1}.jpg`;
       imageElement.classList.add(`preview`,`varient-${index + 1}`,`preview-img`);
       imageElement.style.width = "400px";
       imageElement.style.height = "500px";
       imageElement.style.position="fixed",
       imageElement.style.top = alignmentsTop[index + 1];
       imageElement.style.left = alignmentsLeft[index + 1]; 
       container.appendChild(imageElement);

       //const clipValue = clipPaths[index] || "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"; 

       gsap.to(imageElement,{
        clipPath:"polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        duration:1,
        ease:"power3.Out"
       });
    }

    items.forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            const preview = previews[index];
            addTextElements(preview, index);
        });

        item.addEventListener("mouseleave", () => {
            removeTextElements();
        });
    });


    function addTextElements(preview, index) {
    const textWrapper = document.createElement("div");
    const tagsWrapper = document.createElement("div");
    const descriptionWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");
    tagsWrapper.classList.add("text-wrapper");
    descriptionWrapper.classList.add("text-wrapper");
    textWrapper.style.position = "absolute";
    textWrapper.style.overflow = "hidden";
    tagsWrapper.style.position = "absolute";
    tagsWrapper.style.overflow = "hidden";
    descriptionWrapper.style.position = "absolute";
    descriptionWrapper.style.overflow = "hidden";

    const titleElement = createTextElement("title", preview.title);
    const tagsElement = createTextElement("tags", preview.tags);


    const descriptionLines = preview.description.split(', ');
    descriptionWrapper.classList.add("preview-description");
    descriptionLines.forEach(line => {
        const lineElement = createTextElement("description-line", line);
        descriptionWrapper.appendChild(lineElement);
    });


    positionElementRandomly(textWrapper);
    positionElementRandomly(tagsWrapper);
    positionElementRandomly(descriptionWrapper);


    textWrapper.appendChild(titleElement);
    tagsWrapper.appendChild(tagsElement);
    

    container.appendChild(textWrapper);
    container.appendChild(tagsWrapper);
    container.appendChild(descriptionWrapper);

    animateTextIn(titleElement);
    animateTextIn(tagsElement);

    gsap.to(descriptionWrapper.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.35 
    });
}

function positionElementRandomly(element) {
    element.style.top = `${Math.random() * 80}%`;
    element.style.left = `${Math.random() * 50}%`; 
}

function createTextElement(type, text) {
    const element = document.createElement("div");
    element.classList.add(`preview-${type}`);
    element.style.transform = "translateY(100%)"; 
    element.style.opacity = "0";
    element.innerHTML = `<p>${text}</p>`;
    return element;
}

function animateTextIn(element) {
    gsap.to(element, {
        y: 0,
        opacity:1,
        duration: 1,
        ease: "power4.out",
    });
}

   

    function removeTextElements() {
        const textWrappers = document.querySelectorAll(".text-wrapper");
        textWrappers.forEach(wrapper => {
            gsap.to(wrapper.children, {
                y: 100,
                opacity: 0,
                duration: 0.5,
                ease: "power4.in",
                onComplete: () => {
                    container.removeChild(wrapper);
                }
            });
        });
    }

});

