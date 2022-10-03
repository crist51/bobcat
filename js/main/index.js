import modifiable from "../modifiable.js";

const index = document.querySelector(".index")


if (index) {
    constructIndex()
}

function constructIndex() {

    const image_1 = document.querySelector(".image_1");
    image_1.style.backgroundImage = "url(" + modifiable[0].image_1 + ")";

    const bureau = document.querySelector(".bureau");

    bureau.innerHTML = `
        <div class="section-container">
            <img src="${modifiable[0].imageBatiment}" alt="bureau d'entreprise"/>
            <h2 class="plan">
                <img src=${modifiable[0].plan} alt="plan"/>
            </h2>
        </div>
    `;


    const image_2 = document.querySelector(".image_2");
    image_2.style.backgroundImage = "url(" + modifiable[0].image_2 + ")";
    
}
