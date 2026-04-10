let panier = JSON.parse(localStorage.getItem("panier")) || [];
const container = document.getElementById("games-container");

// afficher tous les games 
function afficherTousLesGames() {
  container.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    const game = games[i];

    const div = document.createElement("div");
    div.classList.add("bg-white", "rounded-xl", "shadow", "p-3");

    div.innerHTML = `
      <img src="${game.image}" class="w-full h-40 object-cover rounded-lg" />
      <h3 class="font-bold mt-2">${game.title}</h3>
      <div>
        <p>4.8⭐</p>
        <p class="text-black-600 font-bold">${game.price}$</p>
<button data-id="${game.id}" 
        class="add-to-cart bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200">
    Ajouter au panier
</button>
      </div>
    `;

    container.appendChild(div);
  }
}

afficherTousLesGames();

function afficherParCategorie(category) {
  container.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    const game = games[i];

    if (category === "ALL" || game.category === category) {
      const div = document.createElement("div");
      div.classList.add("bg-white", "rounded-xl", "shadow", "p-3");

      div.innerHTML = `
        <img src="${game.image}" class="w-full h-40 object-cover rounded-lg" />
        <h3 class="font-bold mt-2">${game.title}</h3>
        <div>
          <p>4.8⭐</p>
          <p class="text-black-600 font-bold">${game.price}$</p>
<button data-id="${game.id}" 
class="add-to-cart bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200">
Ajouter au panier
</button>

        </div>
      `;

      container.appendChild(div);
    }
  }
}
let btn = document.querySelectorAll(".cat-btn");


btn.forEach(button => {
  button.addEventListener("click",(e)=>{
    let cat =e.target.dataset.cat;
    afficherParCategorie(cat)
})
  
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase();
  container.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    const game = games[i];

    if (game.title.toLowerCase().includes(value)) {
      const div = document.createElement("div");
      div.classList.add("bg-white", "rounded-xl", "shadow", "p-3");

      div.innerHTML = `
        <img src="${game.image}" class="w-full h-40 object-cover rounded-lg" />
        <h3 class="font-bold mt-2">${game.title}</h3>
        <div>
          <p>4.8⭐</p>
          <p class="text-black-600 font-bold">${game.price}$</p>
        </div>
      `;

      container.appendChild(div);
      
    }
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const id = parseInt(e.target.dataset.id);

    let gameTrouve = null;
    for (let i = 0; i < games.length; i++) {
      if (games[i].id === id) {
        gameTrouve = games[i];
        break;
      }
    }

    let trouve = false;
    for (let i = 0; i < panier.length; i++) {
      if (panier[i].id === id) {
        panier[i].quantity += 1;
        trouve = true;
        break;
      }
    }

    if (!trouve) {
      panier.push({ ...gameTrouve, quantity: 1 });
    }

    localStorage.setItem("panier", JSON.stringify(panier));

  }
});
