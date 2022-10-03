const products = [
    {//ADS
        _id: 0,
        name: "AGENT DE PROTECTION",
        imageUrl: "../images/porduct/ads/ads_4.jpg",
        altTxt: "Agent de sécurité",
        prix: 0,
        entretient: 3000,
        titre: "Une surveillance en continue garentie",
        desciription: [ "Une équipe soudée professionnel, pour vous servir.", "Nos agents sont formés et sélectionné sur le volet."]
    },
    {//Balise
        _id: 1,
        name: "BALISE GPS",
        imageUrl: "../images/porduct/balise/balise_3.jpg",
        altTxt: "Balise GPS",
        prix: 1500,
        entretient: 250,
        titre: 'Notre nouveau partenaire "TrankingLS" nous offre en exclusivité sa nouvelle balisée',
        desciription: ["Aussi grande qu'un porte-clef, elle se dissimulera où vous voulez.", "Porté autement amélioré, elle serait même localisable dans l'espace, d'après le fabricant !"]
    },
    {//porte
        _id: 2,
        name: "PORTE BLINDE",
        imageUrl: "../images/porduct/porte/porte_2.jpg",
        altTxt: "Porte Blindée",
        prix: 250,
        entretient: 0,

        titre: "On ne rendre pas chez vous comme dans un moulun, nos portes blindées c'est du sérieux",
        desciription: ["Rien ne rentrera chez vous si vous êtes là.", "Peut-être un missile, ça coutait trop chere pour les essayer le fabricant n'a pas testé."],
    },
    {//detecteur de metaux
        _id: 3,
        name: "PORTIC  SECURISE",
        imageUrl: "../images/porduct/portic/portic_1.jpg",
        altTxt: "Portic de sécurité",
        prix: 2500,
        entretient: 500, // none de base mais ce ce calibre regulierement

        titre: "Une grande gamme de caméra fixe",
        desciription: ["",]
    },
    {//convoie
        _id: 4,
        name: "CONVOIE SECURISE",
        imageUrl: "../images/porduct/convoyeur/convoyeur_2.jpg",
        altTxt: "Convoie securisé",
        prix: 2500,
        entretient: 0,

        titre: "La protection optimale pour les transferts de valeur",
        desciription: ["Véhicule blindé résistant à toute épreuve.", "Des agents opérationnels et entrainnée à toute situation."]
    },
    {//garage a retravailler les class et id
        _id: 5,
        name: "PORTAIL SECURITSE",
        imageUrl: "../images/porduct/portail/portail_2.jpg",
        altTxt: "Potail sécurisé",
        type: ["normal", "télécommande"],
        prix: [{ name: "", prix: 250 }, { name: "télécommande", prix: 50 }],
        entretient: [{ name: "", entretien: 0 }, { name: "télécommande", entretien: 0 }],


        titre:"Nous proposons cette porte de garage renforcé pour installer vos voitures",
        desciription: ["La télécommande ne comprend pas le portail.",],
    },
    {//alarme
        _id: 6,
        name: "ALARME",
        imageUrl: "../images/porduct/alarme/th.jpg",
        altTxt: "Alarme",
        type: ["integre", "secrete"],
        prix: [{ name: "integre", prix: 50 }, { name: "secrete", prix: 350 }],
        entretient: [{ name: "integre", entretien: 100 }, { name: "secrete", entretien: 100 }],

        titre:"Partez en vacances ou en weekend sur vos deux oreilles grace à nos alarmes intrusion de nouvelle génération",
        desciription: ["De lalarme silencieuse", "A l'alarme bruyante pour faire  fuire les individus mal intentioné "],

    },
    {//camera
        _id: 7,
        name: "CAMERA FIXE",
        type: ["standard", "platinium", "dark", "gold"],
        //[ standard - zoom - nocturne - zoom + nocturne]
        imageUrl: "../images/porduct/camera_fixe/camera_1.jpg",
        altTxt: "Camera fixe",

        prix: [{ name: "standard", prix: 400 }, { name: "platinium", prix: 450 }, { name: "dark", prix: 450 }, { name: "gold", prix: 800 }],
        entretient: [{ name: "standard", entretien: 200 }, { name: "platinium", entretien: 200 }, { name: "dark", entretien: 200 }, { name: "gold", entretien: 200 }],

        titre:"Une grande gamme de caméra fixe",
        desciription:['"Gold" : zomm x4 vision nocture','"Dark" : vision nocture', '"Platinium" : zomm x4','"Standard" sans option']

    },
    {//camera 360
        _id: 8,
        name: "CAMERA ROTATIVE",
        type: ["normal", "gold", "dark", "platinium"],
        //[ standard - zoom - nocturne - zoom + nocturne]
        imageUrl: "../images/porduct/camera_rotative/camera_1.jpg",
        altTxt: "Camera rotative",
        prix: [{ name: "normal", prix: 600 }, { name: "platinium", prix: 700 }, { name: "dark", prix: 1000 }, { name: "gold", prix: 1100 }],
        entretient: [{ name: "standard", entretien: 200 }, { name: "platinium", entretien: 200 }, { name: "dark", entretien: 200 }, { name: "gold", entretien: 200 }],

        titre:"Une grande gamme de caméra fixe",
        desciription:['"Gold" : zomm x4 vision nocture','"Dark" : vision nocture', '"Platinium" : zomm x4','"Standard" sans option']
    },
]

export default products;