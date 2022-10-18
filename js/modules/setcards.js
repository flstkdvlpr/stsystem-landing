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

    const actionOnForCards = function (classTag){
        document.querySelector(classTag).classList.remove('hide');
        document.querySelector(classTag).classList.add('animate__animated', 'animate__zoomIn');
    }

    const actionOffOnForCards = function (classTag){
        document.querySelector(classTag).classList.add('hide');
    }

    setCards.forEach(item => {
        item.addEventListener('click', (e)=>{
            if(e.target && e.target.dataset.value == "proof"){
                setCards.forEach(item =>{
                    item.classList.add('animate__animated', 'animate__zoomOut');
                    setTimeout(hideAllSets, 500);
                    actionOnForCards('.set-item-proof');
                    setTimeout(hideAllSets, 500);
                })

                document.querySelector('.set-tittle').innerHTML = '<a href="http://stsystem-landing/#sets" name="sets" class="set-href">Вернуться к наборам</a>';
            }
        })
    })

    document.querySelector('.set-tittle').addEventListener('click', ()=>{
        setCards.forEach(item =>{
            item.classList.remove('animate__animated', 'animate__zoomOut');
            showAllSets();
            actionOffOnForCards('.set-item-proof');
            document.querySelector('.set-tittle').innerHTML = '<a name="sets">Наборы</a></h2>';
        })
    })

}

export default setcards;