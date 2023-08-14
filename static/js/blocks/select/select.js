document.addEventListener('DOMContentLoaded', () =>{
    const selects = document.querySelectorAll('.select');
    
    document.addEventListener('click', (e) =>{
        selects.forEach(select =>{
            if (!(select.contains(e.target))) {
                if(select.classList.contains("select--active")){
                    closeSelect(select)
                }
            }
        })
    });
    
    selects.forEach(select =>{
        select.addEventListener('click', () =>{
            closingOpenSelects(selects)

            if(select.classList.contains('select--active')){
                closeSelect(select)
            }else{
                openSelect(select)
            }

            changeText(select)
        })
    })

    function openSelect(select) {
        const itemsContainer = select.querySelector('.select__items');
        const input = select.querySelector('.select__input')

        select.classList.add("select--active")
        itemsContainer.style.maxHeight = itemsContainer.scrollHeight + 'px';
        input.style.zIndex = 3;
    }

    function closeSelect(select){
        const itemsContainer = select.querySelector('.select__items');
        const input = select.querySelector('.select__input')

        select.classList.remove("select--active")
        itemsContainer.style.maxHeight = null;
    }

    function changeText(select){
        const items = select.querySelectorAll('.select__item')
        const inputText = select.querySelector('.select__text');

        items.forEach(item =>{
            item.addEventListener('click', () =>{
                items.forEach(item =>{
                    item.classList.remove("select__item--active");
                })
                
                item.classList.add("select__item--active");

                inputText.innerHTML = item.innerHTML;
                inputText.classList.add("select__text--select")
            })
        })
    }

    function closingOpenSelects(selects) {
        selects.forEach(select =>{
            select.addEventListener('click', () =>{
                selects.forEach(elem =>{
                    if(elem != select){
                        closeSelect(elem)

                        const input = elem.querySelector('.select__input')
                        input.style.zIndex = null;
                    }
                })
            })
        })
    }

})
