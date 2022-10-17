function setcards(){

    const setCards = document.querySelectorAll('.set_card');
    console.log(setCards[0].children[3]);

    function hideAllSets (){
        setCards.forEach(item =>{
            item.closest(".set-dachbords").style.display = 'none';
        })
    }

    function showAllSets (){
        setCards.forEach(item =>{
            item.closest(".set-dachbords").style.display = 'block';
        })
    }

    const actionForCards = function (classTag){
        document.querySelector(classTag).classList.remove('hide');
        document.querySelector(classTag).classList.add('animate__animated', 'animate__zoomIn');
    }

    setCards.forEach(item => {
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == "proof"){
                setCards.forEach(item =>{
                    item.classList.add('animate__animated', 'animate__zoomOut');
                    setTimeout(hideAllSets, 500);
                    actionForCards('.set-item-proof');
                })

                document.querySelector('.set-tittle').innerHTML = "<a name='catalog'>Каталог</a>";
            }
        })
    })

}

export default setcards;