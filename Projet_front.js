console.log("Hello world");

//*********************************************************************Boutons section trois */

// On crée une constante qui récuperes des éléments de nos boutons 

const arrayButton = document.getElementsByClassName('app-buttons');
const ButtonBill = arrayButton[0];
const ButtonPayslip = arrayButton[1];
const ButtonFees = arrayButton[2];


// On crée les const qui vont accuiellir les résultats

let subtitle = document.getElementById('subtitle_third_section');
let result = document.getElementsByClassName('result')[0];


//On crée une boucle pour, qui va récupere le nombre de valeur dans notre tableau, en s'incrémentant par pas de 1, on écoute
//le click sur les boutons

for (let index = 0; index < arrayButton.length; index++) {
    arrayButton[index].addEventListener('click', clicked);
}

//On appelle ensuite la fonction cliqued, qui va supprimer la classe existante aux boutons, et en attribuer une nouvelle.
//Nos boutons vont donc prendre un autre style lorsque l'on click dessus.

function clicked() {
    for (let index = 0; index < arrayButton.length; index++) {
        arrayButton[index].classList.remove("buttons_clicked");
        arrayButton[index].classList.add("buttons");
    }

    //On change la classe de nos boutons pour appliquer un nouveau style au clique.

    this.classList.remove("buttons");
    this.classList.add("buttons_clicked");

    //Si on clique sur un bouton en particulier on applique la fonction qui lui est associé

    if (this == ButtonBill) {
        bill();
    }

    if (this == ButtonPayslip) {
        payslip();
    }

    if (this == ButtonFees) {
        fees();
    }
}

//Les fonctions associé aux boutons vont aller chercher les fichiers correspondant grâce à l'api rentré dans le fetch

function bill() {

    
    //On vide la div result pour pouvoir accueillir les documents que l'on veut.

    result.innerHTML = "";

    //On initialise un compteur pour compter le nombre de document que l'on va recuprerer grâce à l'api.

    let compteur = 0;
    fetch('https://secure.askolga.fr/bucket/5e878726ebdc8f4bf0d7e71ced39e8f7415674201c69220d4e88b6bd2de72cbc5fd0f275d0998/search/2507301f3e8b7e6255bd6334ff9447bae894d42058559f7bf84e83feb684cf185fe1f35b0e626-show.json')
        .then(response => response.json())
        .then(function (data) {


            let doc = data.documents;

            //On crée une boucle for pour pouvoir parcourir les différents documents qui nous interesse dans les données de l'api.

            for (let i in doc) {

                //On insère le nom des documents trouvés à l'aide de l'api dans la div result, on lui applique une classe pour pouvoir lui donner un style dans le css.

                result.innerHTML += "<div class='askolga_result'>" + doc[i].filename + "</div>";

                //On incrémente le compteur i à chaques documents trouvés.

                compteur++;
            }

     //On affiche dans la div une concaténation indiquant le nombre de document trouvé grâce au compteur i.

            subtitle.textContent = compteur + " documents trouvés"

        });
}

function payslip() {
    result.textContent = "";
    let compteur = 0;
    fetch('https://secure.askolga.fr/bucket/5e878726ebdc8f4bf0d7e71ced39e8f7415674201c69220d4e88b6bd2de72cbc5fd0f275d0998/search/4b820bfabdb9984661922e54e0de0a2715c82c8a1d66f752602fd052efdf7dcb5fe1f3b371599-show.json')
        .then(response => response.json())
        .then(function (data) {
            let doc = data.documents;
            for (let i in doc) {
                result.innerHTML += "<div class='askolga_result'>" + doc[i].filename + "</div>";;
                compteur++;
            }
            subtitle.textContent = compteur + " documents trouvés"

        });
}

function fees() {
    result.textContent = "";
    let compteur = 0;
    fetch('https://secure.askolga.fr/bucket/5e878726ebdc8f4bf0d7e71ced39e8f7415674201c69220d4e88b6bd2de72cbc5fd0f275d0998/search/f37a9338451382c55115f5367916d43a5ad0c9ce718cc3259540a0a1e6e5031e5fe1f3f0d88c4-show.json')
        .then(response => response.json())
        .then(function (data) {
            let doc = data.documents;
            for (let i in doc) {
                result.innerHTML += "<div class='askolga_result'>" + doc[i].filename + "</div>";;
                compteur++;
            }
            subtitle.textContent = compteur + " documents trouvés"
        });
}