function cityCheck (){
    const telephoneField = document.querySelector('.header_tel'),
          select = document.querySelector('select'),
          headerTime = document.querySelector('.header_time');

    select.addEventListener('change', (e)=>{
        if(e.target.value == 1){
            telephoneField.innerHTML = '<a href="tel:+786326003320">+7 (863) 260-03-20</a>';
            headerTime.textContent = 'ул. Юго-восточная промзона, 12/4'
        } else if (e.target.value == 2){
            telephoneField.innerHTML = '<a href="tel:+78612900840">+7 (861) 290-08-40</a>';
            headerTime.textContent = 'ул. Тополиная, 36, офис 1'
        } else if (e.target.value == 3){
            telephoneField.innerHTML = '<a href="tel:+78652219088">+7 (865) 221-90-88</a>';
            headerTime.textContent = 'ул. Производственная, 11'
        } else if (e.target.value == 4){
            telephoneField.innerHTML = '<a href="tel:+73652887109">+7 (365) 288-71-09</a>';
            headerTime.textContent = 'ул. Трансформаторная, 6'
        }
    })
    
   

    
}

export default cityCheck;