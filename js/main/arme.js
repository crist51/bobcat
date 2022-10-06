import armor from "../armor.js";

const arme = document.querySelector(".arme");

if (arme) {

    var str = window.location.href
    var url = new URL(str);
    let id = url.searchParams.get("id")
    let categorie = url.searchParams.get("categorie")

    const arme = armor[categorie][id]

    construct(arme)
    calculPrice()

    // const InputChecked = document.querySelectorAll("input");
    // const button = document.getElementById("button");


    function construct(arme) {

        const title = document.querySelector(".title");
        title.innerHTML = `
    ${arme.name} ${arme.prix}$
    
    `
    const img = document.querySelector(".img")  
    img.src = (arme.imageUrl);
    img.alt = arme.name;
  
        for (let index = 0; index < arme.option.length; index++) {

            let div = document.createElement("div");

            const list = document.querySelector(".list");
            list.appendChild(div);

            div.innerHTML =
                `
        <div>
            <label>${arme.option[index].name}</label>
            <input type="checkbox" value="${index}">
        </div>
        <p><span>${arme.option[index].price}</span> $</p>
            `;

        }
        const price = document.querySelector(".price");
        price.textContent = arme.price;
    }

    const formArme = document.querySelector(".formArme");
    formArme.addEventListener("change", calculPrice);

    function calculPrice() {

        // ? j'arrive pas à transmetre la const arme a la fonction \\
        var str = window.location.href;
        var url = new URL(str);
        let id = url.searchParams.get("id");
        let categorie = url.searchParams.get("categorie");
        const arme = armor[categorie][id];
        // -------------------------------------------------------- \\

        const priceArray = [];
        priceArray.push(arme.prix)

        console.log(arme);
        const InputChecked = document.querySelectorAll("input");

        // ! controle des changement d'etat des input \\
        for (let index = 0; index < InputChecked.length; index++) {

            if (InputChecked[index].checked == true) {
                priceArray[index + 1] = arme.option[index].price;
            }
            else {
                priceArray[index + 1] = 0;
            }
        }

        // calcule du montans dans le Array \\
        const initialValue = 0;
        const sumn = priceArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue,
        );
        const price = document.querySelector(".price");
        price.textContent = sumn;

        return sumn

    }

    button.addEventListener("click", handleSubmit);
    function handleSubmit(e) {
        e.preventDefault();

        const price = document.querySelector(".price")
        // création article pour le LC
        const panier = {
            _id: 1,
            name: arme.name,
            number: 1,
            prix: price.textContent,
            entretient: 0,
            imageUrl: "../images/porduct/camera_rotative/camera_1.jpg",
            alt: arme.name,
            option: [{ name: "lampe", price: 50 }, { name: "viseur", price: 200 }, { name: "lunette", price: 1000 }, { name: "chargeur haute capacité", price: 2000 },],
            altTxt: "pistolet",
        }
        console.log(panier);

        let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"));

        if (produitEnregistrerDansLeLocalStorage) {
            let modif = false


         // ! controle si le non de l'article est déja present  dans le LC \\
            produitEnregistrerDansLeLocalStorage.forEach(produit => {

                if (panier.name == produit.name) {
                    modif = true

                }
                else {
                    console.log("aarticle déja present");
                }
            })

            if (modif == false) {
                produitEnregistrerDansLeLocalStorage.push(panier);
            }

            localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage));
        }

        // création du LC \\
        else {
            produitEnregistrerDansLeLocalStorage = [];
            produitEnregistrerDansLeLocalStorage.push(panier)
            localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage))
            window.location.reload();
            // ? reload pour faire apparaitre le "devis" dans la barre NAV

        }
    }
}