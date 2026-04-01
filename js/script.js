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
      <p>${game.description}</p>
      <div>
        <p>4.8⭐</p>
        <p class="text-black-600 font-bold">${game.price}$</p>
      </div>
    `;

    container.appendChild(div);
  }
}

afficherTousLesGames();
