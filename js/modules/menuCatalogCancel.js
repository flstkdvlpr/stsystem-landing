function menuCatalogCancel(){
    const menu = document.querySelectorAll('.menu'),
          catalogName = document.querySelector('.hcatalog'),
          card = document.querySelectorAll('.card-1');
    menu.forEach(item =>{
        item.addEventListener('click', ()=>{
            (function showAllS(){
                card.forEach(item => {
                    item.closest(".col").style.display = 'block';
                    catalogName.innerHTML = "<a name='catalog'>Каталог</a>";
                });
            }())
        })
    })
}

export default menuCatalogCancel;