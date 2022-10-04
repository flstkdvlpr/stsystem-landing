import menuCatalogCancel from './modules/menuCatalogCancel';
import charracters from './modules/char';
import fetches from './modules/fetches';
import hamburger from './modules/hamburger';
import cityCheck from './modules/checkCity';


window.addEventListener('DOMContentLoaded', ()=>{
      menuCatalogCancel();
      cityCheck();
      charracters();
      fetches();
      hamburger();
});