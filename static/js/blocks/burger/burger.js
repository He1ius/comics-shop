document.addEventListener('DOMContentLoaded', () =>{
    
    const burgerContainers = document.querySelectorAll(".burger");

    burgerContainers.forEach(burgerContainer =>{
        const burgerBtn = burgerContainer.querySelector(".burger__name");
        const burgerShadow = burgerContainer.querySelector(".burger__shadow");
        const burgerContent = burgerContainer.querySelector(".burger__content");
        const burgerClose = burgerContainer.querySelector(".burger__close")
        
        burgerBtn.addEventListener("click", ()=>{
            burgerContainer.classList.add("burger--visible");
        })
        burgerShadow.addEventListener("click", ()=>{
            burgerContainer.classList.remove("burger--visible");
        })
        burgerClose.addEventListener("click", ()=>{
            burgerContainer.classList.remove("burger--visible");
        })

        
    
        burgerContentWidth = burgerContent.offsetWidth;
        burgerContent.style.cssText = `left: -${burgerContentWidth}px`;
    })

})
