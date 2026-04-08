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

        div.innerHTML = `
            <div>
             <img src='${game.image}' width='100' >
                <h3 class="font-bold">${game.title}</h3>
                <p>${game.price}$ x ${game.quantity}</p>
               
            </div>
            <div class="flex gap-2">
                <button class="plus text-black px-2  font-boldrounded" data-id="${game.id}">+</button>
                <button class="minus text-black font-bold px-2 rounded" data-id="${game.id}">-</button>
                <button class="supprimer bg-red-500 text-white px-2 rounded" data-id="${game.id}">Supprimer</button>
            </div>
        `;

        panierContainer.appendChild(div);
    }

}

// gérer les boutons + / - / supprimer
document.addEventListener("click", function(e) {
    const id = parseInt(e.target.dataset.id);

    if (e.target.classList.contains("plus")) {
        for (let i = 0; i < panier.length; i++) 
        if (panier[i].id === id) panier[i].quantity++;
    }

    if (e.target.classList.contains("minus")) {
        for (let i = 0; i < panier.length; i++) 
        if (panier[i].id === id && panier[i].quantity > 1) panier[i].quantity--;
    }

    if (e.target.classList.contains("supprimer")) {
        panier = panier.filter(g => g.id !== id);
    }

    if (e.target.id === "commander") {
        panier = [];
        alert("Commande passée avec succès!");
    }

    localStorage.setItem("panier", JSON.stringify(panier));
    afficherPanier();
});

// afficher le panier au chargement
afficherPanier();