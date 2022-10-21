function setcards(){

    const setCards = document.querySelectorAll('.set_card');

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

    function closeSetShowSubset(classOfSelect, valueOfHref){
        setCards.forEach(item => {
            item.addEventListener('click', (e)=>{
                if(e.target && e.target.dataset.value == valueOfHref){
                    setCards.forEach(item =>{
                        item.classList.add('animate__animated', 'animate__zoomOut');
                        setTimeout(hideAllSets, 500);
                        actionOnForCards(classOfSelect);
                        setTimeout(hideAllSets, 500);
                    })
                    document.querySelector('.set-tittle').innerHTML = '<a href="http://stsystem-landing/#sets" name="sets" class="set-href">Вернуться к наборам</a>';
                }
            })
        })
    }

    function showSetcloseSubset(classOfSelect){
        document.querySelector('.set-tittle').addEventListener('click', ()=>{
            setCards.forEach(item =>{
                item.classList.remove('animate__animated', 'animate__zoomOut');
                showAllSets();
                actionOffOnForCards(classOfSelect);
                document.querySelector('.set-tittle').innerHTML = '<a name="sets">Наборы</a></h2>';
            })
        })

    }

    closeSetShowSubset('.set-item-proof', "proof");
    showSetcloseSubset('.set-item-proof');
    closeSetShowSubset('.set-item-froof', "froof");
    showSetcloseSubset('.set-item-froof');
    closeSetShowSubset('.set-item-wall', "wall");
    showSetcloseSubset('.set-item-wall');
    closeSetShowSubset('.set-item-floor', "floor");
    showSetcloseSubset('.set-item-floor');
    closeSetShowSubset('.set-item-attic', "attic");
    showSetcloseSubset('.set-item-attic');
    closeSetShowSubset('.set-item-fnd', "fnd");
    showSetcloseSubset('.set-item-fnd');

    

    

    

}

export default setcards;