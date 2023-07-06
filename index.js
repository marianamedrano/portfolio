const menu = document.querySelector('nav');
const descnipell = document.querySelector('.nipell')
const descduxlab = document.querySelector('.duxlab')
const desceconotrip = document.querySelector('.econotrip')
const desccontajusta = document.querySelector('.contajusta')
const descmaggu = document.querySelector('.maggu')
const descportfolio = document.querySelector('.portfolio')

function changedisplay(){
    menu.classList.toggle('nav')
}


function mostrarnipell() {
    if(descnipell.style.display == 'none'){
        descnipell.style.display = 'flex';
    }
    else{
        descnipell.style.display = 'none';
    }
} 


function mostrarduxlab() {
    if(descduxlab.style.display == 'none'){
        descduxlab.style.display = 'flex';
    }
    else{
        descbduxlab.style.display = 'none';
    }
} 

function mostrareconotrip() {
    if(desceconotrip.style.display == 'none'){
        desceconotrip.style.display = 'flex';
    }
    else{
        desceconotrip.style.display = 'none';
    }
} 

function mostrarcontajusta() {
    if(desccontajusta.style.display == 'none'){
        desccontajusta.style.display = 'flex';
    }
    else{
        desccontajusta.style.display = 'none';
    }
} 

function mostrarmaggu() {
    if(descmaggu.style.display == 'none'){
        descmaggu.style.display = 'flex';
    }
    else{
        descmaggu.style.display = 'none';
    }
} 

function mostrarportfolio() {
    if(descportfolio.style.display == 'none'){
        descportfolio.style.display = 'flex';
    }
    else{
        descportfolio.style.display = 'none';
    }
} 
