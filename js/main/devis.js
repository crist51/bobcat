const devis = document.querySelector(".devis")


if (devis) {
    construct();
}

async function construct() {

    const produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"));//JSON.parse pour convertir JSON en JAVASCIPT
    var panier = produitEnregistrerDansLeLocalStorage;

    if (panier == null || panier.length == 0) {
        const devisTittle = document.querySelector(".devisTittle");
        devisTittle.textContent="Vous avez supprimé tous les articles de votre devis";

    }
    else {

        const bloc_1 = document.querySelector(".bloc_1");

        let debutBoucle = 0;
        while (debutBoucle < panier.length) {
            var article = document.createElement("article");
            article.classList.add("cart__item");
            bloc_1.appendChild(article);

            //--------------------------------création div [img]
            var cart__item__img = document.createElement("div");
            cart__item__img.classList.add("cart__item__img");
            article.appendChild(cart__item__img);

            var image = document.createElement("img");
            image.src = (panier[debutBoucle].imageUrl);
            image.alt = (panier[debutBoucle].altTxt);
            cart__item__img.appendChild(image);

            //-------------------------------- création div = div [non],[price],[entretient]
            let div = document.createElement("div");
            div.classList.add("cart__item__content");
            article.appendChild(div);

            var item_info = document.createElement("div");
            item_info.classList.add("item_info");
            div.appendChild(item_info);

            item_info.innerHTML = `
            <h3>${panier[debutBoucle].name}</h3>
            <p>Nombre désiré : ${panier[debutBoucle].number}</p>
            <p><span class="itemPrice">${panier[debutBoucle].prix}</span> $</p>
            <p><span class="itemEntretien">${panier[debutBoucle].entretient}</span> $/mois</p>
            `

            //--------------------------------création div = cart__item__content__settings [quantity][delete]
            var cart__item__content__seetings = document.createElement("div");
            cart__item__content__seetings.classList.add("cart__item__content__settings");
            div.appendChild(cart__item__content__seetings);

            //----------------------------------------------------------------création div = cart__item__content__settings__delete[delete]
            var seeting = document.createElement("div");
            //seeting.classList.add("cart__item__content__settings__delete");
            cart__item__content__seetings.appendChild(seeting);

            var sup = document.createElement("p");
            sup.classList.add("deleteItem");
            sup.textContent = "Supprimer";
            seeting.appendChild(sup);



            debutBoucle++;
        }
        deleteItem();
        calculPrice();
        calculEntretient();
    }
}


// **************************************************** calcul prix


function calculPrice(price) {

    let priceArray = [];
    let itemPrice = document.getElementsByClassName("itemPrice");
    // je liste tout les class itemPrice sa me els metdans un Array

    for (let index = 0; index < itemPrice.length; index++) {

        let transformNumber = itemPrice[index].textContent * 1;
        // modification de format de valleur "string" ves "Number"
        priceArray.push(transformNumber);
        // je pousse tout les class dans le tableau

    };

    const initialValue = 0;
    const sumn = priceArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue,
        // je pousse tout les class dans le tableau

    );
    let priceTotal = document.querySelector(".priceTotal")

    priceTotal.textContent = sumn;

}


// **************************************************** calcul entretien

function calculEntretient(price) {

    let entretienArray = [];
    let itemEntretien = document.getElementsByClassName("itemEntretien");
    // je liste tout les class itemEntretient sa me els metdans un Array

    for (let index = 0; index < itemEntretien.length; index++) {

        let transformNumber = itemEntretien[index].textContent * 1;
        // modification de format de valleur "string" ves "Number"
        entretienArray.push(transformNumber);
        // je pousse tout les class dans le tableau

    };

    const initialValue = 0;
    const sumn = entretienArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        // somme de toutes les valleur entretienArray
    );

    let totalEntretient = document.querySelector(".totalEntretient")
    totalEntretient.textContent = sumn;

}



function deleteItem() {
    const listDeleteItem = document.getElementsByClassName('deleteItem');
    // je liste toutes les class deleteItem
    
    const produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"));//JSON.parse pour convertir JSON en JAVASCIPT
    let panier = produitEnregistrerDansLeLocalStorage;
    // J'appelle le LC dans la function

    for (let debutBoucle = 0; debutBoucle < panier.length; debutBoucle++) {

        listDeleteItem[debutBoucle].addEventListener("click", function () {
            functionSup(this);
            // j'ecoute le click de l'utilisateir sur le btn qui est dans la boucle
        })
        const functionSup = function (btnSup) {

            panier.splice(debutBoucle, 1);

            console.log("-------- Apres Supretion --------");
            //supprimer la quantité et le prix
            localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage));
            
            if (panier.length == 0) {
                console.log("panier vide");
                localStorage.clear("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage));
                // si LC est vide tu supprime la clef du LC
                window.location = "../index.html";
                // et tu redirige a l'index
            }
            else{
                location.reload()
                // permet de metre a jour l'id de la bouble de construct
            }
        }
    }
    //}
}

