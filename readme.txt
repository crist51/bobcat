page acceuil a faire
reflexion sur le portaille ?

## Vous devez changer certaine donnée avent la mise en production :

    js/modifiable.js
        srcLogoMin = la pette image du logo
        srcLogoPrin = logo entreprise
        telCtx = corespond au téléphone
        discordCtx = non discord
        espacePro = lien du site reliant a la partit connexion
        imageBatiment = image de ton imageBatiment
        plan = plan  ou ce situe ton batimen
        voiture = voiture de service

## la chartre graphique est facilement modifiable
    css.color.css 

    modifier les couleur dans le root

        

## La liste des produit: js/product.js
    1.Pour metre à jour les articles : 

            _id = doit etre UNIQUE, il ne dois etre dentique a un autre _id du Array
        name: non donnée a l'article
        imageUrl = chemin donnée a l'image - oensez a bien créer un nouveaux pour retrouvez facilement l'image
        altTxt = texte qui seras afficher si l'image ne ce charge pas corectement
        prix = prix de l'article
        entretient = prix de l'article
        titre = texte representatif du produit
        desciription = description du produit qui seras affcher METRE DANS [ "" ,] si vide ou si un seul pas de limites

        type: ["X",] X corespond au nom de l'option elle doit etre UNIQUE au produit
        prix: [{ name:"X", prix:"Y"}] chaque option etre mis dans {} - name : X corespond au nom de l'option, Y a son prix
        entretient: [{ name:"X", entretient:"Y"}] chaque option etre mis dans {} name : corespond au nom de l'option, Y a son entretient

    2. rajouter a la fin du Array "products" ces ligne  =>

        ## model_1 (sans option sur le model)=>

            {
                _id: 0,
                name: "AGENT DE PROTECTION",
                imageUrl: "../images/porduct/ads/ads_4.jpg",
                altTxt: "Agent de sécurité",
                prix: 0,
                entretient: 3000,
                titre: "Une surveillance en continue garentie",
                desciription: ["Une équipe soudée Une équipe soudée proffésionnel, pour vous servir.", "Nos agent sont des Marinees.],
            },

        ## model_2 (avec option sur le model)=>!! il n'y à pas de limite dans les otpions, mais la structure dois etre respecté type - prix - entretient.

            {
                _id: 8,
                name: "CAMERA ROTATIVE",
                type: ["normal", "gold", "dark", "platinium"],[ standard - zoom - nocturne - zoom + nocturne]
                imageUrl: "../images/porduct/camera_rotative/camera_1.jpg",
                altTxt: "Camera rotative",
                prix: [{ name: "normal", prix: 600 }, { name: "platinium", prix: 700 }, { name: "dark", prix: 1000 }, { name:"gold",   prix: 1100 }],
                entretient: [{ name: "standard", entretien: 200 }, { name: "platinium", entretien: 200 }, { name: "dark", entretien: 200 }, { name: "gold", entretien: 200 }],
                titre:"Une grande gamme de caméra fixe",
                desciription:['"Gold" : zomm x4 vision nocture','"Dark" : vision nocture', '"Platinium" : zomm x4','"Standard" sans option'],
            },

        --------------------------------------------------------------------------------------------
        



## La limite des produit est identique a chaque produit est bloqué à 25 actuelement : js/main/produit.js

    
    ligne.26
    ligne.85
    ligne.169
    ligne.131
    ligne.207
    ligne.210
    ligne.271
    ligne.361
    ligne.366
    ligne.368






        



