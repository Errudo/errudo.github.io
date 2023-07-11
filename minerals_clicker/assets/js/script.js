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
charbon = [];

///////////////////////////// Fonction //////////////////////

function actualiser_le_cout_amelioration_1() {
    nombre_amelioration_1.innerHTML = cout_amelioration_1;
}

function actualiser_le_cout_amelioration_2() {
    nombre_amelioration_2.innerHTML = cout_amelioration_2;
}

function actualiser_le_cout_amelioration_3() {
    nombre_amelioration_3.innerHTML = cout_amelioration_3;
}

function actualiser_la_page() {
    NB_MINERAIS.innerHTML = `${minerais_test + " minerais"}`;
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

function apparaitre_nombre_au_clique (){
    // on vient créer un div avec la classe object
    // ici tu pourra rajouter
    var object = document.createElement("div");
    object.className = "nombre_au_clique_css";

    // ici on vient lui donner la pos de la souris
    object.style.left = event.clientX + "px";
    object.style.top = event.clientY + "px";
    // on l'ajoute au body
    document.body.appendChild(object);
    // on l'ajoute au tableau d'objets pour pouvoir jouer sur ses propriétés plus tard
    charbon.push(object);
}

function mainLoop(){
    //pour tout les objets, on le fait descendre
    charbon.forEach(obj => {
        obj.style.top = obj.offsetTop - 1 + "px";
        //on remove les objets qui sortent de l'écran
        if(obj.offsetTop > window.innerHeight){
            obj.remove();
            charbon.splice(charbon.indexOf(obj), 1);
        }
    });
    
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
    apparaitre_nombre_au_clique();
    setInterval(mainLoop, 10);
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
        console.log("pas assez de minerais pour l'amélioration 2")
    }
});

BOUTON_AMELIORATION_3.addEventListener('click', event => {
    if(minerais_test >= cout_amelioration_3){
        minerais_test -= cout_amelioration_3;
        cout_amelioration_3 = cout_amelioration_3*2.5;
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

///////////////////////////// Image sur le minerai //////////////////////

