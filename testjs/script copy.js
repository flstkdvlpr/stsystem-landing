window.addEventListener('DOMContentLoaded', ()=>{

    const house = document.querySelector('.house'),
        card = document.querySelectorAll('.card'),
        buyBtn = document.querySelectorAll('[modal-buy]'),
        cardOrders = document.querySelectorAll('.card-orders');

        console.log(cardOrders);


 /*    house.addEventListener('click', (e)=>{
        const target = e.target;
        if(target && target.dataset.item == 'roofpitched'){
            //hideAllItems();
            parent.document.location.href = "http://127.0.0.1:5500/index.html#catalog";
            console.log('click');
        }
    }); */


    function hideAllItems(){
        card.forEach(item =>{
            item.classList.add('hide');
        });
    }

    //hideAllItems();

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'speclink'){
                console.log(item.childNodes.childNodes);
                item.childNodes[3].classList.remove('hide');
                item.childNodes[1].classList.add('hide');

            }
        });
    }); 

    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.value == 'specendlink'){
                item.childNodes[1].classList.remove('hide');
                item.childNodes[3].classList.add('hide');
                console.log(item.childNodes[3]);
            }
        });
    }); 


    class MenuCardSide1{
        constructor(img, title, text1, text2, text3, price, parentSelector, ...classes){
            this.img = img;
            this.title = title;
            this.text1 = text1;
            this.text2 = text2;
            this.text3 = text3;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render(){
            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
            <img src=${this.img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.text1}</p>
            <p class="card-text">${this.text2}</p>
            <p class="card-text">${this.text3}</p>
            <div class="card-char" data-value="speclink">Характеристики</div>
                <div class="card-orders">
                    <div class="card-price">${this.price}</div>
                    <div class="btn btn-primary" modal-buy>Купить</div>
                </div>   
            </div>
            `;

            this.parent.append(element);
        }
    }

     class MenuCardSide2{
        constructor(text1, text2, text3, text4, text5, text6, text7, parentSelector,...classes){
            this.text1 = text1;
            this.text2 = text2;
            this.text3 = text3;
            this.text4 = text4;
            this.text5 = text5;
            this.text6 = text6;
            this.text7 = text7;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render(){
            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
            <div class="card-body">
                <h5 class="card-title" data-value="spectitle">Характеристики</h5>
                <p class="card-text">${this.text1}</p>
                <p class="card-text">${this.text2}</p>
                <p class="card-text">${this.text3}</p>
                <p class="card-text">${this.text4}</p>
                <p class="card-text">${this.text5}</p>
                <p class="card-text">${this.text6}</p>
                <p class="card-text">${this.text7}</p>
                  <ul>
                      <li>низкая теплопроводность</li>
                      <li>нулевое водопоглощение (однородная структура из герметичных ячеек);</li>
                      <li>высокая прочность на сжатие и изгиб;</li>
                      <li>долговечность;</li>
                      <li>экологичность;</li>
                      
                  </ul>
                  <div class="card-char" data-value="specendlink">Назад</div>
        </div>
            `;

            this.parent.append(element);
        }
    }

    new MenuCardSide1(
        "/img/osnova.jpeg",
        "Пеноплэкс Основа!®",
        "Теплоизоляция внешних и внутренних ограждающих конструкций.",
        "В продаже имеется материал с толщиной листа 20, 30, 40, 50, 100 мм.",
        "Область применения: стены, цоколи и первые этажи конструкций.",
        "240 ₽/лист",
        ".card",
        "card-side-1"
    ).render();

    new MenuCardSide2(
        "Производятся по ТУ 5767-006-54349294-2014",
        "Водопоглощение за 24 часа: 0,4%",
        "Группа горючести по 123-ФЗ: Г4",
        "Коэффициент теплопроводности: 0,034 Вт/(м×°К)",
        "Звукоизоляция перегородки: 41 дБ",
        "Плотность: 27-35 кг/м3",
        "Модуль упругости: 17 МПа",
        ".card",
        "card-side-2",
        "hide"
    ).render();

    const inputRub = document.querySelector('#rub'),
          inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', ()=>{
        const request = new XMLHttpRequest();
        request.open('GET', 'js/current.json'); //настройки для запроса GET/POST, URL, SYNC/ASYNC, login, pass
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
        request.send();
        request.addEventListener('load', ()=>{ //readystatechange
            if(request.status == 200){
                const res = JSON.parse(request.response);
                inputUsd.value = (inputRub.value/res.current.usd).toFixed(2);
            } else {
                inputUsd.value = 'Что-то пошло не так';
            }
        });
    });


    buyBtn.forEach(item =>{
        item.addEventListener('click', ()=>{
            console.log('click');
        });
    });


    card.forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target && e.target.dataset.buy){
                console.log(item.childNodes.childNodes);
           

            }
        });
    }); 

    /* inputRub.addEventListener('input', ()=>{
        const request = new XMLHttpRequest();
        request.open('GET', 'js/price.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
        request.send();
        request.addEventListener('load', ()=>{
            if(request.status == 200){
                const data = JSON.parse(request.response);
                //console.log(data.offers[0].price);
                data.offers.forEach(item =>{
                    if(item.price){
                        let list = item.price * item.value;
                        console.log(list);
                        inputUsd.value = list/item.list;
                        
                    } 
                });
            }
        });
    }); */

    /*     inputRub.addEventListener('input', ()=>{
        const request = new XMLHttpRequest();
        request.open('GET', 'js/current.json'); //настройки для запроса GET/POST, URL, SYNC/ASYNC, login, pass
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
        request.send();
        request.addEventListener('load', ()=>{ //readystatechange
            if(request.status == 200){
                const res = JSON.parse(request.response);
                inputUsd.value = (inputRub.value/res.current.usd).toFixed(2);
            } else {
                inputUsd.value = 'Что-то пошло не так';
            }
        });
    }); */

    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({name: "Alex"}),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));


        /* const getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Cold no fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    } */

    class PriceItems{
        constructor(price, parentSelector, ...classes){
            this.price = price;
            this.parent = document.querySelectorAll(parentSelector);
            this.classes = classes;
        }

        render(){
            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
            <div class="card-price">${this.price}</div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Купить</button>
            `;
            this.parent.append(element);

        }
    }

});