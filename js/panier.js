// récupérer le panier depuis localStorage
let panier = JSON.parse(localStorage.getItem("panier")) || [];

const panierContainer = document.getElementById("panier-container");
const totalEl = document.getElementById("total");
const commanderBtn = document.getElementById("commander");
