const MINERAIS_IMG = document.querySelector('#click_minerais');
const NB_MINERAIS = document.querySelector('#nombre_minerais');
const AFFICHER_MINERAIS_PAR_SECONDE = document.querySelector('#nombre_minerais_par_seconde')
const BOUTON_AMELIORATION_1 = document.querySelector('#amelioration_minerais_cliquable_1');
const BOUTON_AMELIORATION_2 = document.querySelector('#amelioration_minerais_cliquable_2');
const BOUTON_AMELIORATION_3 = document.querySelector('#amelioration_minerais_cliquable_3');
const PIOCHE_AMELIORABLE = document.querySelector('#cout_pioche_ameliorable');
const MINEUR_AMELIORABLE = document.querySelector('#cout_mineur_ameliorable');
const WAGON_AMELIORABLE = document.querySelector('#cout_wagon_ameliorable');

let minerais_test = 0;
let minerais_par_clique_test = 1;
let cout_amelioration_1 = 10;
let cout_amelioration_2 = 100;
let cout_amelioration_3 = 400;
var nombre_amelioration_1 = document.getElementById('cout_pioche_ameliorable');
var nombre_amelioration_2 = document.getElementById('cout_mineur_ameliorable');
var nombre_amelioration_3 = document.getElementById('cout_wagon_ameliorable');
var afficher_lvl_amelioration_1 = document.querySelector('#lvl_pioche');
var afficher_lvl_amelioration_2 = document.querySelector('#lvl_mineur');
var afficher_lvl_amelioration_3 = document.querySelector('#lvl_wagon');
let lvl_amelioration_1 = 1;
let lvl_amelioration_2 = 1;
let lvl_amelioration_3 = 1;


///////////////////////////// Fonction //////////////////////

function actualiser_le_cout_amelioration_1() {
    nombre_amelioration_1.innerHTML = cout_amelioration_1;
    afficher_lvl_amelioration_1.innerHTML = `${"lvl " + lvl_amelioration_1}`;
}

function actualiser_le_cout_amelioration_2() {
    nombre_amelioration_2.innerHTML = cout_amelioration_2;
    afficher_lvl_amelioration_2.innerHTML = `${"lvl " + lvl_amelioration_2}`;
}

function actualiser_le_cout_amelioration_3() {
    nombre_amelioration_3.innerHTML = cout_amelioration_3;
    afficher_lvl_amelioration_3.innerHTML = `${"lvl " + lvl_amelioration_3}`;
}

function actualiser_la_page() {
    NB_MINERAIS.innerHTML = `${minerais_test + " charbon"}`;
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
    if(minerais_test < cout_amelioration_3){
        WAGON_AMELIORABLE.style.color = "red";
        actualiser_la_page();
    } else{
        WAGON_AMELIORABLE.style.color = "white";
    }
}

function minerais_aleatoire() {
    let rubi_aleatoire = Math.random();
    if(rubi_aleatoire <= 0.10){
        console.log("+ 1 rubi")
    }else{
        console.log("+ 1 charbon")
    }
}

///////////////////////////// function au clique //////////////////////

tabCharbon = []
tabNbClique = []

graviteCharbon = 0.2;
vitesseCharbon = 5;
dureedevieNbClique = 100;
function apparaitreObjets() {
    // je créer une div, lui donne une classe et une vitesse
    var charbon = document.createElement("div");
    charbon.className = "minerais_de_charbon";
    charbon.speed = vitesseCharbon;
    // je créer une div, lui donne une classe et une vitesse
    var nbClique = document.createElement("div");
    nbClique.className = "conteneur_nb_clique";
    // je donne le texte +1 et j'assimile la durée de vie 
    nbClique.innerHTML = minerais_par_clique_test;
    nbClique.dureedevieNbClique = dureedevieNbClique;
    // position de la souris pour charbon
    charbon.style.left = event.clientX + "px";
    charbon.style.top = event.clientY + "px";
    // position de la souris pour nbClique
    nbClique.style.left = event.clientX + "px";
    nbClique.style.top = event.clientY * 0.9 + "px";
    // j'ajoute au body mes deux variables
    document.body.appendChild(charbon);
    document.body.appendChild(nbClique);
    // j'ajoute les valeurs dans le tableau
    tabCharbon.push(charbon);
    tabNbClique.push(nbClique);
    console.log(tabCharbon & tabNbClique);
}

function bougerCharbon(charb) {
    charb.speed -= graviteCharbon;
    charb.style.top = charb.offsetTop - charb.speed + "px";
}

function bougerNbClique(nombre) {
    nombre.style.top = nombre.offsetTop - 2 + "px";
}

function disparaitreObjets() {
    // tant que l'objet charbon est à l'écran je le fait descendre puis le supprime
    tabCharbon.forEach(charb => {
        bougerCharbon(charb);
        // si l'objet charbon dépasse la hauteur de l'écran
        if(charb.offsetTop > window.innerHeight) {
            // je supprime l'objet charbon
            charb.remove();
            // je supprime l'objet charbon du tableau ou il était stocké
            tabCharbon.splice(tabCharbon.indexOf(charb), 1);
        }
    });
    // tant que l'objet nbClique est à l'écran je le fait descendre puis le supprime
    tabNbClique.forEach(nombre => {
        bougerNbClique(nombre);
        // si l'objet nbClique reste un certain temps sur l'écran
        if(nombre.dureedevieNbClique --< 0) {
            // je supprime l'objet nbClique
            nombre.remove();
            // je supprime l'objet nbClique du tableau ou il était stocké
            tabNbClique.splice(tabNbClique.indexOf(nombre), 1);
        }
    });
}

setInterval(disparaitreObjets, 10);


let play = document.querySelector('#click_minerais');

function audio_au_clique() {
    let audioAuClique = new Audio("assets/audio/bruit_de_pioche.mp3");
    audioAuClique.play();
}

///////////////////////////// Afficher les éléments //////////////////////

bouton_off();
actualiser_le_cout_amelioration_1();
actualiser_le_cout_amelioration_2();
actualiser_le_cout_amelioration_3();

///////////////////////////// Update au click //////////////////////

MINERAIS_IMG.addEventListener('click', event => {
    console.log(minerais_test)
    minerais_test = minerais_test + minerais_par_clique_test;
    actualiser_la_page();
    bouton_off();
    minerais_aleatoire();
    apparaitreObjets();
    audio_au_clique();
});

BOUTON_AMELIORATION_1.addEventListener('click', event => {
    if(minerais_test >= cout_amelioration_1){
        nombre_amelioration_1.innerHTML += cout_amelioration_1;
        minerais_test -= cout_amelioration_1;
        minerais_par_clique_test = minerais_par_clique_test + 1;
        cout_amelioration_1 = cout_amelioration_1*4;
        lvl_amelioration_1 = lvl_amelioration_1 + 1;
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
        lvl_amelioration_2 = lvl_amelioration_2 + 1;
        setInterval(function(){
            minerais_test = minerais_test + 1;
            actualiser_la_page();
            actualiser_le_cout_amelioration_2();
            bouton_off();
            console.log(cout_amelioration_2)
        },1000)
    }else{
        console.log("pas assez de minerais pour l'amélioration 2")
    }
});

BOUTON_AMELIORATION_3.addEventListener('click', event => {
    if(minerais_test >= cout_amelioration_3){
        minerais_test -= cout_amelioration_3;
        cout_amelioration_3 = cout_amelioration_3*2.5;
        lvl_amelioration_3 = lvl_amelioration_3 + 1;
        setInterval(function(){
            minerais_test = minerais_test + 2;
            actualiser_la_page();
            actualiser_le_cout_amelioration_3();
            bouton_off();
            console.log(cout_amelioration_3)
        },1000)
    }else{
        console.log("pas assez de minerais pour l'amélioration 3")
    }
});

