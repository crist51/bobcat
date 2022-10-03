import product from "../products.js";
// import des differant produit

const listeProduits = document.querySelector(".listeProduits");

if (listeProduits) {
    const bloc_1 = document.querySelector(".bloc_1");

    for (let i = 0; i < product.length; i++) {
        
        var article = document.createElement("article");
        bloc_1.appendChild(article);

        var lienProduct = document.createElement("a");
        lienProduct.href = "produit.html?id=" + product[i]._id;
        lienProduct.title = "lien vers " + product[i].name
        article.appendChild(lienProduct)


        //const numberImgKanap = ligneObjetProduct + 1;
        var imageUrl = document.createElement("img");
        imageUrl.src = product[i].imageUrl;
        imageUrl.alt = (product[i].altTxt);
        lienProduct.appendChild(imageUrl);

        var h3 = document.createElement("h3");
        h3.textContent = product[i].name;
        lienProduct.appendChild(h3);
        
    }
}