import menuCatalogCancel from './modules/menuCatalogCancel';
import charracters from './modules/char';
import fetches from './modules/fetches';
import hamburger from './modules/hamburger';
import cityCheck from './modules/checkCity';
import setcards from './modules/setcards';
import fromrequest from './modules/fromrequest';
import calc from './modules/calc';


window.addEventListener('DOMContentLoaded', ()=>{
      menuCatalogCancel();
      cityCheck();
      charracters();
      fetches();
      hamburger();
      setcards();
      fromrequest();
      calc();
});