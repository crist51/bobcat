import modifiable from "../modifiable.js";

const header = document.querySelector(".header")
const devis = document.querySelector(".devis")
const listeProduits = document.querySelector(".listeProduits")
const produit = document.querySelector(".produit")
const listeArmor = document.querySelector(".listeArmor")
const arme = document.querySelector(".arme")

if (header) {
    //console.log("constructHeader");
    constructHeader()
}

function constructHeader() {

    const tel = document.querySelector(".tel");
    const discord = document.querySelector(".discord");

    // insert tel + discord + logo +  URL pro
    tel.textContent = modifiable[0].tel;
    discord.textContent = modifiable[0].discord;



    const index = document.querySelector(".index")

    if (index) {
        // racine
        const logoSmall = document.querySelector(".logoSmall");
        const logoImg = document.createElement("img");
        logoImg.src = modifiable[0].srcLogoMin;
        logoImg.alt = ("logo minimaliser");
        logoSmall.appendChild(logoImg);
        const logo = document.querySelector(".logo");
        const logoPrincipale = document.createElement("img");
        logoPrincipale.src = modifiable[0].srcLogoPrin;
        logoPrincipale.alt = ("logo entreprise");
        logo.appendChild(logoPrincipale);
    }
    else if (devis || listeProduits || produit|| listeArmor || arme) {
        //sous dossier
        const logoSmall = document.querySelector(".logoSmall");
        const logoImg = document.createElement("img");
        logoImg.src = "../" + modifiable[0].srcLogoMin;
        logoImg.alt = ("logo minimaliser");
        logoSmall.appendChild(logoImg);
        
        const logo = document.querySelector(".logo");
        const logoPrincipale = document.createElement("img");
        logoPrincipale.src = "." + modifiable[0].srcLogoPrin;
        logoPrincipale.alt = ("logo entreprise");
        logo.appendChild(logoPrincipale);
    } else {
        console.log("pas de page prévus");
    }

    const nav = document.querySelector(".nav");
    var li = document.createElement("li");
    nav.appendChild(li);
    li.innerHTML = `<a href="${modifiable[0].espacePro}" title="espace pro"><i class="far fa-user"></i><span>Espace pro</span></a>`

    let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"));//JSON.parse pour convertir JSON en JAVASCIPT

    let panier = produitEnregistrerDansLeLocalStorage;

    if (panier == null) {
        // const nav = document.querySelector(".nav");
        const devisNav = document.querySelector(".devisNav");
        devisNav.style.display = "none";

    }

    const society = document.querySelector(".society");
    society.textContent = modifiable[0].society;

}
