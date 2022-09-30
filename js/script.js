import charracters from './modules/char';
import fetches from './modules/fetches';
import hamburger from './modules/hamburger';
import cityCheck from './modules/checkCity';


window.addEventListener('DOMContentLoaded', ()=>{
      cityCheck();
      charracters();
      fetches();
      hamburger();
});