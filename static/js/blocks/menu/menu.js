$(document).ready(function(){
    if(document.getElementsByClassName("menu").length !== 0){
        const menu = document.querySelector(".menu");
        const menuContents = menu.querySelectorAll(".menu__text");
        let textBtns = menu.querySelectorAll('.menu__item');
    
        textBtns.forEach((textBtn) =>{
            textBtn.addEventListener('click', () =>{
                textBtns.forEach(elem => {
                    elem.classList.remove('menu__item--active');
                });   
    
                textBtn.classList.toggle("menu__item--active");
    
                menuContents.forEach(menuElem =>{
                    menuElem.classList.remove("menu__text--active");
    
    
                    if(menuElem.classList[0] == textBtn.classList[1]){
                        menuElem.classList.add("menu__text--active");
                    }
                })
    
            })
        })
    }    

});

