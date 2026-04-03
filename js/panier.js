// récupérer le panier depuis localStorage
let panier = JSON.parse(localStorage.getItem("panier")) || [];

const panierContainer = document.getElementById("panier-container");
const totalEl = document.getElementById("total");
const commanderBtn = document.getElementById("commander");

// fonction pour afficher le panier
function afficherPanier() {
    panierContainer.innerHTML = "";
    let total = 0;

    for (let i = 0; i < panier.length; i++) {
        const game = panier[i];
        total += game.price * game.quantity;

        const div = document.createElement("div");
        div.classList.add("bg-white", "p-3", "rounded-xl", "flex", "justify-between", "items-center");

        panierContainer.appendChild(div);
    }

    totalEl.textContent = total.toFixed(2);
}
