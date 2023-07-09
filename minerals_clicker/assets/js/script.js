const MINERAIS_IMG = document.querySelector('#click_minerais');
const BOUTON_AMELIORATION_1 = document.querySelector('#amelioration_minerais_cliquable_1');
const BOUTON_AMELIORATION_2 = document.querySelector('#amelioration_minerais_cliquable_2');
const PIOCHE_AMELIORABLE = document.querySelector('#cout_pioche_ameliorable');
const MINEUR_AMELIORABLE = document.querySelector('#cout_mineur_ameliorable');
const WAGON_AMELIORABLE = document.querySelector('#cout_wagon_ameliorable');

let minerais_test = 0;
let minerais_par_clique_test = 1;
let cout_amelioration_1 = 10;
let cout_amelioration_2 = 100;
var nombre_amelioration_1 = document.getElementById('cout_pioche_ameliorable');
var nombre_amelioration_2 = document.getElementById('cout_mineur_ameliorable');

///////////////////////////// Fonction //////////////////////

function actualiser_le_cout_amelioration_1() {
    nombre_amelioration_1.innerHTML = cout_amelioration_1;
}

function actualiser_le_cout_amelioration_2() {
    nombre_amelioration_2.innerHTML = cout_amelioration_2;
}

function actualiser_la_page() {
    nb_minerais.innerHTML = `${minerais_test + " minerais"}`;
}

function bouton_off() {
    if(minerais_test < cout_amelioration_1){
        PIOCHE_AMELIORABLE.style.color = "red";
        actualiser_la_page();
    } else{
        PIOCHE_AMELIORABLE.style.color = "white";
    }
    if(minerais_test < cout_amelioration_2){
        MINEUR_AMELIORABLE.style.color = "red";
        actualiser_la_page();
    } else{
        MINEUR_AMELIORABLE.style.color = "white";
    }
    if(minerais_test < cout_amelioration_1){
        WAGON_AMELIORABLE.style.color = "red";
        actualiser_la_page();
    } else{
        WAGON_AMELIORABLE.style.color = "white";
    }
}

///////////////////////////// Afficher les éléments //////////////////////

bouton_off();
actualiser_le_cout_amelioration_1();
actualiser_le_cout_amelioration_2();

///////////////////////////// Update au click //////////////////////

MINERAIS_IMG.addEventListener('click', event => {
    console.log(minerais_test)
    minerais_test = minerais_test + minerais_par_clique_test;
    actualiser_la_page();
    bouton_off();
});

BOUTON_AMELIORATION_1.addEventListener('click', event => {
    if(minerais_test >= cout_amelioration_1){
        nombre_amelioration_1.innerHTML += cout_amelioration_1;
        minerais_test -= cout_amelioration_1;
        minerais_par_clique_test = minerais_par_clique_test + 1;
        cout_amelioration_1 = cout_amelioration_1*4;
        actualiser_la_page();
        actualiser_le_cout_amelioration_1();
        bouton_off();
    }else{
        console.log("pas assez de minerais pour l'amélioration 1")
    }
});

BOUTON_AMELIORATION_2.addEventListener('click', event => {
    if(minerais_test >= cout_amelioration_2){
        minerais_test -= cout_amelioration_2;
        cout_amelioration_2 = cout_amelioration_2*2;
        setInterval(function(){
            minerais_test = minerais_test + 1;
            actualiser_la_page();
            actualiser_le_cout_amelioration_2();
            bouton_off();
            console.log(cout_amelioration_2)
        },1000)
    }else{
        console.log("pas assez de minerais l'amélioration 2")
    }
});