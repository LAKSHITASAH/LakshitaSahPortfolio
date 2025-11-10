// THEME TOGGLE
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// POPUP VIEW IMAGE
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    popupImg.src = btn.dataset.img;
    popup.style.display = "block";
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
