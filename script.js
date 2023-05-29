// Fonctionnalite 1

const element = document.getElementsByTagName("footer")[0];
let i = 0

element.addEventListener("click", function() {
  i++ ; console.log('clic numero ' + i)
});

// Fonctionnalite 2

let hamburgerStatus = false;
const getHamburger = document.getElementsByClassName('collapse bg-dark')[0];

function hamburgerToggle() {
    if (hamburgerStatus === false) {
        getHamburger.classList.toggle("collapse bg-dark");
        hamburgerStatus = true;
    }
    else {
        getHamburger.classList.toggle("bg-dark");
        hamburgerStatus = false;
    }
}

getHamburger.onclick = hamburgerToggle;

// Fonctionnalite 3

const getFirstCard = document.getElementsByClassName('col-md-4')[0];
const getFirstCardEdit = getFirstCard.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
const getFirstCardText = getFirstCard.getElementsByClassName('card-text')[0];

getFirstCardEdit.addEventListener("click", function() {
    getFirstCardText.classList.add("text-danger");   
 });

 // Fonctionnalite 4

 const getFirstCardBis = document.getElementsByClassName('col-md-4')[1];
const getFirstCardEditBis = getFirstCardBis.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
const getFirstCardTextBis = getFirstCardBis.getElementsByClassName('card-text')[0];

getFirstCardEditBis.addEventListener("click", function() {
    getFirstCardTextBis.classList.toggle("text-success");   
 });

 // Fonctionnalite 5

const getNavBar = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
const getBootstrap = document.getElementsByTagName('link')[0];

getNavBar.addEventListener("dblclick", function() {
    getBootstrap.setAttribute("href", " "); 
 });

 // Fonctionnalite 6

 const getCard = document.getElementsByClassName('col-md-4');

 let isHover = true;

 for( let i = 0; i < getCard.length; i++){

    const getViewCard = getCard[i].getElementsByClassName('btn btn-sm btn-success')[0];
    const getTextCard = getCard[i].getElementsByClassName("card-text")[0];
    const getImgCard = getCard[i].getElementsByClassName("card-img-top")[0];

    getViewCard.addEventListener('mouseover', function() {
        if (isHover) {
        getTextCard.style.display = 'none';
        isHover = false;
        getImgCard.style.width = '20%';
        } else {
        getTextCard.style.display = 'block';
        isHover = true;
        getImgCard.style.width = '100%';
        }   
    });
 }
// Fonctionnalite 7

const getJumbotronNoodle = document.getElementsByClassName('jumbotron text-center')[0];
const getButtonNoodle = getJumbotronNoodle.getElementsByClassName('btn btn-secondary my-2')[0];
// const getCard = document.getElementsByClassName('col-md-4'); CONST DEJA CREEE


   getButtonNoodle.addEventListener('click', function() {
const lastCard = getCard[getCard.length - 1];
const firstCard = getCard[0];
const parentElement = firstCard.parentElement;
    i++ ;      
    parentElement.insertBefore(lastCard, firstCard);
    });
 
// Fonctionnalite 8

