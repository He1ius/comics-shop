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

    if(document.getElementsByClassName("catalog__items--buy-with-this-product").length !== 0){
        $('.catalog__items--buy-with-this-product').owlCarousel({
            items: 5,
            margin: 30,
            responsive : {
                0 : {
                    items: 1,
                },
                552 : {
                    items: 2,
                },
                768 : {
                    items: 4,
                },
                992 : {
                    items: 4,
                },
                1200 : {
                    items: 5,
                },
            },
        });
      }

    $('.detail__main-imgs').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.detail__slider'
    });

    $('.detail__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.detail__main-imgs',
        nextArrow:'<button class="slick-next slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style=""><svg class="svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#333333"/><line x1="21.6756" y1="14.755" x2="10.1849" y2="5.11314" stroke="#1A3AE5" stroke-width="3" stroke-linecap="round"/><line x1="1.5" y1="-1.5" x2="16.5" y2="-1.5" transform="matrix(0.766044 -0.642788 0.741557 0.67089 10.1504 26.9758)" stroke="#1A3AE5" stroke-width="3" stroke-linecap="round"/></svg>Next</button>',
        prevArrow:'<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style=""><svg class="svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#333333"/><line x1="8.26359" y1="15.2209" x2="19.7543" y2="24.8627" stroke="#1A3AE5" stroke-width="3" stroke-linecap="round"/><line x1="1.5" y1="-1.5" x2="16.5" y2="-1.5" transform="matrix(-0.766044 0.642788 -0.741557 -0.67089 19.7888 3)" stroke="#1A3AE5" stroke-width="3" stroke-linecap="round"/></svg>Previous</button>',
        focusOnSelect: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        
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


