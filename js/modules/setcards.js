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

    setCards.forEach(item => {
        item.addEventListener('click', ()=>{
            setCards.forEach(item =>{
                item.classList.add('animate__animated', 'animate__zoomOut');
                setTimeout(hideAllSets, 500);
            })
        })
    })

}

export default setcards;