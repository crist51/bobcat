import armor from "../armor.js";

const listeArmor = document.querySelector(".listeArmor");

if (listeArmor) {

    arme_blanche()
    arme_de_poingt()
    mitrailette_legere()
    fusilsAssaut()
    fusilPrecision()

}

function arme_blanche() {

    const bloc_1 = document.querySelector(".bloc_1");

    const arme_blanche = armor[0]


    for (let i = 0; i < arme_blanche.length; i++) {

        console.log(arme_blanche.id);

        var article = document.createElement("article");
        bloc_1.appendChild(article);

        var lienProduct = document.createElement("a");
;
        lienProduct.href =`arme.html?categorie=${0}&id=${i}`;


        lienProduct.title = "lien vers " + arme_blanche[i].name
        article.appendChild(lienProduct)


        //const numberImgKanap = ligneObjetProduct + 1;
        var imageUrl = document.createElement("img");
        imageUrl.src = arme_blanche[i].imageUrl;
        imageUrl.alt = (arme_blanche[i].altTxt);
        lienProduct.appendChild(imageUrl);

        var h3 = document.createElement("h3");
        h3.textContent = arme_blanche[i].name;
        lienProduct.appendChild(h3);

    }
}

function arme_de_poingt() {

    const bloc_2 = document.querySelector(".bloc_2");
    const arme_de_poingt = armor[1]


    for (let i = 0; i < arme_de_poingt.length; i++) {

        var article = document.createElement("article");
        bloc_2.appendChild(article);

        var lienProduct = document.createElement("a");

        lienProduct.href =`arme.html?categorie=${1}&id=${i}`;

        lienProduct.title = "lien vers " + arme_de_poingt[i].name
        article.appendChild(lienProduct)

        var imageUrl = document.createElement("img");
        imageUrl.src = arme_de_poingt[i].imageUrl;
        imageUrl.alt = (arme_de_poingt[i].altTxt);
        lienProduct.appendChild(imageUrl);

        var h3 = document.createElement("h3");
        h3.textContent = arme_de_poingt[i].name;
        lienProduct.appendChild(h3);

    }
}

function mitrailette_legere() {

    const bloc_3 = document.querySelector(".bloc_3");;

    const mitrailette_legere = armor[2]


    for (let i = 0; i < mitrailette_legere.length; i++) {

        var article = document.createElement("article");
        bloc_3.appendChild(article);

        var lienProduct = document.createElement("a");

        lienProduct.href =`arme.html?categorie=${2}&id=${i}`;
        lienProduct.title = "lien vers " + mitrailette_legere[i].name
        article.appendChild(lienProduct)


        //const numberImgKanap = ligneObjetProduct + 1;
        var imageUrl = document.createElement("img");
        imageUrl.src = mitrailette_legere[i].imageUrl;
        imageUrl.alt = (mitrailette_legere[i].altTxt);
        lienProduct.appendChild(imageUrl);

        var h3 = document.createElement("h3");
        h3.textContent = mitrailette_legere[i].name;
        lienProduct.appendChild(h3);

    }
}

function fusilsAssaut() {

    const bloc_4 = document.querySelector(".bloc_4");

    const fusilsAssaut = armor[3]


    for (let i = 0; i < fusilsAssaut.length; i++) {

        var article = document.createElement("article");
        bloc_4.appendChild(article);

        var lienProduct = document.createElement("a");

        lienProduct.href =`arme.html?categorie=${3}&id=${i}`;
        lienProduct.title = "lien vers " + fusilsAssaut[i].name
        article.appendChild(lienProduct)


        //const numberImgKanap = ligneObjetProduct + 1;
        var imageUrl = document.createElement("img");
        imageUrl.src = fusilsAssaut[i].imageUrl;
        imageUrl.alt = (fusilsAssaut[i].altTxt);
        lienProduct.appendChild(imageUrl);

        var h3 = document.createElement("h3");
        h3.textContent = fusilsAssaut[i].name;
        lienProduct.appendChild(h3);

    }
}

function fusilPrecision() {

    const bloc_5 = document.querySelector(".bloc_5");


    const fusilPrecision = armor[4]


    for (let i = 0; i < fusilPrecision.length; i++) {

        var article = document.createElement("article");
        bloc_5.appendChild(article);

        var lienProduct = document.createElement("a");

        lienProduct.href =`arme.html?categorie=${4}&id=${i}`;
        lienProduct.title = "lien vers " + fusilPrecision[i].name
        article.appendChild(lienProduct)


        //const numberImgKanap = ligneObjetProduct + 1;
        var imageUrl = document.createElement("img");
        imageUrl.src = fusilPrecision[i].imageUrl;
        imageUrl.alt = (fusilPrecision[i].altTxt);
        lienProduct.appendChild(imageUrl);

        var h3 = document.createElement("h3");
        h3.textContent = fusilPrecision[i].name;
        lienProduct.appendChild(h3);

    }
}