$(document).ready(function(){
    if (document.querySelector(".header__profile")  !== null ) {
        var btnsOpen = document.querySelectorAll(".header__profile")
    }   

    const modals = document.querySelectorAll(".modal")

    const modalRegister = document.querySelector('#register')
    const modalAuth = document.querySelector('#auth')

    const registerBtn = document.querySelector('.form__reg')
    const authBtn = document.querySelector('.form__auth')

    registerBtn.addEventListener('click', ()=>{
        modalAuth.classList.remove("open")
        modalRegister.classList.add("open")
    })

    authBtn.addEventListener('click', ()=>{
        modalAuth.classList.add("open")
        modalRegister.classList.remove("open")
    })

    modals.forEach(modal =>{
        btnsOpen.forEach(btnOpen =>{
            btnOpen.addEventListener("click", ()=>{
                modalAuth.classList.add("open")
            })
        })    

        const modalClose = modal.querySelector(".modal__close")
        const modalContainer = modal.querySelector(".modal__container")
        
        modalClose.addEventListener("click", ()=>{
            modal.classList.remove("open")
        })
    
        window.addEventListener('keydown', (e)=>{
            if(e.key === "Escape") {
                modal.classList.remove("open")
            }
        })

        modalContainer.addEventListener('click', (e)=>{
            e._isClickWithInModal = true;
        })
    
        modal.addEventListener('click', (e)=>{
            if(e._isClickWithInModal) return;
            e.currentTarget.classList.remove('open');
        })
    })
})