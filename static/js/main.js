$(document).ready(function(){
    $(".carousel__items").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
    });

    $(".carousel--brands").owlCarousel({
        items: 5,
        dots: false,
        autoplay: true,
        margin: 20,
        responsive : {
            0 : {
                items: 2,
            },
            552 : {
                items: 3,
            },
            768 : {
                items: 4,
            },
            992 : {
                items: 5,
            },
        },
    });
    
    const control = document.querySelectorAll('.accordion__control');
    
    control.forEach(el =>{
        el.addEventListener('click', (e) =>{
            const control = e.currentTarget;
            const content = control.nextElementSibling;
            const icon = control.querySelector('.accordion__icon');
            const childContent = content.querySelectorAll('.accordion__content');
            let maxScrollHeight = 0;
    
            content.classList.toggle('open');
            
            if(icon){
                icon.classList.toggle('open');  
            }
    
            //Если открыт аккордион
            if(content.classList.contains('open')){
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                // Animations
                content.style.maxHeight = content.scrollHeight + 'px';
                if(childContent){
                    for (let i = 0; childContent.length > i; i++) {
                        // 40 это сумма верхний и нижний паддингов, скорее всего надо будет переделывать
                        // чтоб это число не надо было в коде прописывать
                        maxScrollHeight = maxScrollHeight + childContent[i].scrollHeight + 40;
                    }
                    content.style.maxHeight = (maxScrollHeight + content.scrollHeight) + 'px';
                }
            }else{
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                // Animations
                content.style.maxHeight = null;
            }
        })
    })
    
    window.addEventListener('resize', (e) =>{
        const content = document.querySelectorAll('.accordion__content');
        maxScrollHeight = 0;
    
        content.forEach(el => {
            if(el.classList.contains('open')){
                // Animations
                el.style.maxHeight = el.scrollHeight + 'px';
                const childContent = el.querySelectorAll('.accordion__content');
    
                if(childContent){
                    for (let i = 0; childContent.length > i; i++) {
                        // 40 это сумма верхний и нижний паддингов, скорее всего надо будет переделывать
                        // чтоб это число не надо было в коде прописывать
                        maxScrollHeight = maxScrollHeight + childContent[i].scrollHeight + 40;
                    }
                    el.style.maxHeight = (maxScrollHeight + el.scrollHeight) + 'px';
                }
            }
        });
    });
});


