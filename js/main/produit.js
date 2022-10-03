import product from "../products.js";
// import des differant produit

const produit = document.querySelector(".produit");




if (produit) {

  //recuperation id search param
  var str = window.location.href
  var url = new URL(str);
  let id = url.searchParams.get("id")

  // si pas d'id redirection 
  if (product[id] == undefined) {
    console.log("error");
    window.location.href = "../../html/listeProduits.html";
  } else {


    insert(id)
    construct()
  }
}

function insert() {
  const str = window.location.href
  const url = new URL(str);
  const id = url.searchParams.get("id")

  const name = document.querySelector(".name")
  const descirption = document.querySelector(".descirption")
  const img = document.querySelector(".img")

  name.textContent = product[id].name

  img.src = (product[id].imageUrl);
  img.alt = (product[id].altTxt);

  for (let index = 0; index < product[id].desciription.length; index++) {

    let li = document.createElement("li")
    li.textContent = product[id].desciription[index]
    descirption.appendChild(li)

  }


}

function construct() {
  const str = window.location.href
  const url = new URL(str);
  const id = url.searchParams.get("id")
  const form = document.querySelector(".form")

  if (product[id].type == null) {
    const containerPrice = document.querySelector(".containerPrice")

    const div = document.createElement('div')

    div.innerHTML = `
        <label for="number">Nombre demandé:</label>
        <input type="number" id="number" min="0" max="25"/>
        
        `
    form.appendChild(div)

    containerPrice.innerHTML = `
        <p>prix à l'achat : <span class="prix">50</span></p>
        <p>montant mensuelle : <span class="entretient">50</span></p>
        
        `
    calculPrice()
  }
  else {
    for (let index = 0; index < product[id].type.length; index++) {

      const div = document.createElement('div')
      div.innerHTML = `
      <div class="form_div">
        <label for="number">${product[id].type[index]}:</label>
        <input name="number" type="number" id="number" min="0" max="25" value="0"/>
      </div>
      <div>
        <p>Prix : <span class="price">${product[id].prix[index].prix}</span>
        <p>Entretien : <span class="entretient">${product[id].entretient[index].entretien}</span>
      </div>
        `
      form.appendChild(div)

    }

    priceType()
  }

}


//------------------------------------------------------------------------------
function calculPrice() {

  //recuperation id search param
  var str = window.location.href
  var url = new URL(str);
  let id = url.searchParams.get("id")


  //const produit = product[id]
  // regard des produit concerné

  const input = document.getElementById("number");
  // selectionne l'element  qui a  l'id
  input.placeholder = 1;
  // rempli le placeholder de l'input


  const prix = document.querySelector('.prix');
  prix.textContent = input.placeholder * product[id].prix
  // remplis le paragraphe qui a la classe  par la valleur voulut

  const entretient = document.querySelector('.entretient');
  entretient.textContent = input.placeholder * product[id].entretient
  // remplis le paragraphe qui a la classe  par la valleur voulut

  input.addEventListener('change', (event) => {
    //ecoute le changement de la valleur de l'input

    if (event.target.value >= 1 && event.target.value < 25) {
      // si la valleur de l'iput est comprise entre 1 et 99 ont fait ci dessous
      const number = document.querySelector('.number');
      // selectionne l'element  qui a  la class

      //number.textContent = `${event.target.value}`;
      //valeur qui a été modifé
      const prix = document.querySelector('.prix');
      prix.textContent = event.target.value * product[id].prix
      // ecrit dans la class la valleur

      const entretient = document.querySelector('.entretient');
      entretient.textContent = event.target.value * product[id].entretient

    }
    else {
      // sinon on fait ci dessous
      const prix = document.querySelector('.prix');
      prix.textContent = "..."
      const entretient = document.querySelector('.entretient');
      entretient.textContent = "..."

    }

  })

  const btn = document.getElementById("btn")

  btn.addEventListener('click', (e) => {
    e.preventDefault()

    //ecoute le click du bouton (" baliseBtn ")

    const number = document.getElementById("number");

    console.log(" ------------------------------------------ number");
    console.log(number.value);

    if (number.value >= 1 && number.value < 25) {

      const panier = {
        _id: product[id]._id,
        name: product[id].name,
        number: number.value * 1,// *1 pour avoir le bon format number
        prix: number.value * product[id].prix,
        entretient: number.value * product[id].entretient,
        imageUrl: product[id].imageUrl,
        altTxt: product[id].altTxt,
        //la valleur est  prise du js - securité car l'utilisateur pourais modifié on le prend sur l'HTML
      }
      //je créer l'objet panier
      console.log(panier);

      // ------------- gestion du local storage local storage -------------

      let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"));
      //JSON.parse pour convertir JSON en JAVASCIPT

      if (produitEnregistrerDansLeLocalStorage) {//si y a des produit dans le local storage on rajoute un objet 
        //local Storage present don doit modifier le LC
        let modif = false

        console.log(" ----blocal storage avent ----");
        console.log(produitEnregistrerDansLeLocalStorage);

        produitEnregistrerDansLeLocalStorage.forEach(produit => {
          if (panier._id == produit._id) {
            //si l'Id du panier est dejà present sur un article du local storage 

            console.log("je suis sans si id est deja present");

            console.log("---- produit._id ---- ");
            console.log(produit._id);
            console.log(" ---- panier._id ----");
            console.log(panier._id);

            if (produit.number + panier.number < 25) {
              produit.number += panier.number
            } else {
              produit.number = 25 //limite max
            }

            modif = true

          }

        })

        if (modif == false) {

          produitEnregistrerDansLeLocalStorage.push(panier);
          //j'injecte "panier" dans le LC

        }
        console.log("modification du produit");
        //JSON.stringify convertit le JAVASCRIPT en JSON


        localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage));
        console.log(produitEnregistrerDansLeLocalStorage)
      }

      else {//je créer le local storage
        produitEnregistrerDansLeLocalStorage = [];
        //je creer le Array
        produitEnregistrerDansLeLocalStorage.push(panier)
        //j'injecte l'objet dans le Array
        localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage))
        // on transforme le JS en JSON car le local storage prend que le JSON

        window.location.reload();

      }
    }
    else {//je suis en dehors des valleur autorisé
      ///window.alert("Veullez saisir un nombre d'agent entre 0 et 99 !")
      console.log("mauvaise valeur");
    }

  })
}

function priceType() {

  const str = window.location.href
  const url = new URL(str);
  const id = url.searchParams.get("id")

  const inputArray = document.querySelectorAll("input")
  const priceArray = document.querySelectorAll(".price")
  const entretientArray = document.querySelectorAll(".entretient")

  for (let index = 0; index < inputArray.length; index++) {
    //console.log(inputArray[index]);
    //console.log(priceArray[index]);

    inputArray[index].addEventListener('change', (event) => {

      //console.log(product[id].entretient[index].entretien);

      if (event.target.value >= 1 && event.target.value < 25) {
        // si la valleur de l'iput est comprise entre 1 et 99 ont fait ci dessous
        const number = document.querySelector('.number');
        // selectionne l'element  qui a  la class

        //number.textContent = `${event.target.value}`;
        //valeur qui a été modifé
        priceArray[index].textContent = inputArray[index].value * product[id].prix[index].prix;
        // ecrit dans la class la valleur

        entretientArray[index].textContent = inputArray[index].value * product[id].entretient[index].entretien;

      }
      else {
        // sinon on fait ci dessous
        const prix = document.querySelectorAll('.price');
        prix[index].textContent = "..."
        const entretient = document.querySelectorAll('.entretient');
        entretient[index].textContent = "..."

      }

    })
  }

  const containerPrice = document.querySelector('.containerPrice')
  containerPrice.classList.add("none");

  const btn = document.getElementById("btn")

  btn.addEventListener('click', (e) => {
    e.preventDefault()

    const inputArray = document.querySelectorAll("input")

    for (let index = 0; index < inputArray.length; index++) {

      //console.log(inputArray);
      // liste des input
      console.log(index);
      console.log(product[id].prix[index].prix);
      // index de ma boucle

      // valeur de l'input

      if (inputArray[index].value >= 1) {

        let panier = {

          _id: product[id],
          name: product[id].name + " " + product[id].type[index],
          number: inputArray[index].value * 1,// *1 pour avoir le bon format number
          imageUrl: product[id].imageUrl,
          altTxt: product[id].altTxt,

          prix: inputArray[index].value * product[id].prix[index].prix,
          entretient: inputArray[index].value * product[id].entretient[1].entretien,
          //la valleur est  prise du js - securité car l'utilisateur pourais modifié on le prend sur l'HTML
        }

        //console.log(panier);

        let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"));
        //JSON.parse pour convertir JSON en JAVASCIPT

        if (produitEnregistrerDansLeLocalStorage) {//si y a des produit dans le local storage on rajoute un objet 
          //local Storage present don doit modifier le LC
          let modif = false

          //console.log(" ----blocal storage avent ----");
          //console.log(produitEnregistrerDansLeLocalStorage);

          produitEnregistrerDansLeLocalStorage.forEach(produit => {



            console.log(panier.name);
            console.log(produit.name);


            if (panier.name == produit.name) {
              //si l'Id du panier est dejà present sur un article du local storage 

              console.log("je suis si id est deja present");

              //console.log("---- produit._id ---- ");
              //console.log(produit._id);
              //console.log(" ---- panier._id ----");
              //console.log(panier._id);

              if (produit.number + panier.number < 25) {
                produit.number += panier.number

                console.log("on ajoute si la limite n'est pas atteinte");
              } else {
                produit.number = 25 //limite max

                console.log("on  bloque a 25");
              }

              modif = true

            }
            else {
              console.log("present");
            }
          })

          if (modif == false) {

            produitEnregistrerDansLeLocalStorage.push(panier);
            //j'injecte "panier" dans le LC

          }
          //console.log("modification du produit");
          //JSON.stringify convertit le JAVASCRIPT en JSON


          localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage));
          //console.log(produitEnregistrerDansLeLocalStorage)
        }

        else {//je créer le local storage
          produitEnregistrerDansLeLocalStorage = [];
          //je creer le Array
          produitEnregistrerDansLeLocalStorage.push(panier)
          //j'injecte l'objet dans le Array
          localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLeLocalStorage))

          window.location.reload();

        }
      }
      else {//je suis en dehors des valleur autorisé
        ///window.alert("Veullez saisir un nombre d'agent entre 0 et 99 !")
        //console.log("mauvaise valeur");
      }
    }

  })

}