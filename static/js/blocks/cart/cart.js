$(document).ready(function(){

    if(document.getElementsByClassName("cart__check").length !== 0){
        const checkBtns = document.querySelectorAll(".cart__check");
        const checkAllBtn = document.querySelector(".cart__btn-all");
    
        checkAllBtn.addEventListener('click', () => {
            const allSelected = Array.from(checkBtns).every((item) => item.classList.contains('cart__check--active') || item.classList.contains('cart__check--all') );
    
            if (allSelected) {
                checkBtns.forEach((item) => item.classList.remove('cart__check--active'));
            } else {
                checkBtns.forEach((item) => {
                    if (!item.classList.contains('cart__check--active')) {
                        item.classList.add('cart__check--active');
                    }
                });
            }
        });
    
        checkBtns.forEach((item) => {
            item.addEventListener('click', () => {
                if(item.classList.contains('cart__check--all')){
                    return;
                }
    
                if (item.classList.contains('cart__check--active')) {
                    item.classList.remove('cart__check--active');
                } else {
                    item.classList.add('cart__check--active');
                }
            });
        });    
    }
    if(document.getElementsByClassName("cart__quantity").length !== 0){
        quantityContainers = document.querySelectorAll(".cart__quantity")

        quantityContainers.forEach( quantityContainer => {
            let minus = quantityContainer.querySelector(".cart__minus");
            let plus = quantityContainer.querySelector(".cart__plus");
            let number = quantityContainer.querySelector(".cart__quantity-content span")
    
            minus.addEventListener("click", () =>{
                if( number.innerHTML > 1 ){
                    number.innerHTML = number.innerHTML - 1;
                }
            })
    
            plus.addEventListener("click", () =>{
                if (number.innerHTML < 99){
                    number.innerHTML =  parseFloat(number.innerHTML) + 1;
                }
            })
        })        
    }


});