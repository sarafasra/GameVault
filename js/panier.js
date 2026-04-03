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

            </div>
        `;

        panierContainer.appendChild(div);
    }

    totalEl.textContent = total.toFixed(2);
}
