document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const hamButton = document.querySelector("#hamburgerBtn");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});