const MINERAIS_IMG = document.querySelector('#click_minerais');
const BOUTON_AMELIORATION_1 = document.querySelector('#amelioration_minerais_cliquable_1');
const BOUTON_AMELIORATION_2 = document.querySelector('#amelioration_minerais_cliquable_2');

let minerais_test = 0;
let minerais_par_clique_test = 1;
let cout_amelioration_1 = 10;
let cout_amelioration_2 = 100;

function actualiser_la_page() {
    nb_minerais.innerHTML = `${minerais_test}`;
}

MINERAIS_IMG.addEventListener('click', event => {
    console.log(minerais_test)
    minerais_test = minerais_test + minerais_par_clique_test;
    actualiser_la_page();
});

BOUTON_AMELIORATION_1.addEventListener('click', event => {
    if(minerais_test >= cout_amelioration_1){
        minerais_test -= cout_amelioration_1;
        minerais_par_clique_test = minerais_par_clique_test + 1;
        cout_amelioration_1 = cout_amelioration_1*4;
        actualiser_la_page();
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
            console.log(cout_amelioration_2)
        },1000)
    }else{
        console.log("pas assez de minerais l'amélioration 2")
    }
});