// Wacht op de eerste keypress
document.addEventListener("keydown", startWebsite, { once: true });

function startWebsite() {
  // Verwijder het startscherm
  const startScreen = document.getElementById("startScreen");
  if (startScreen) {
    startScreen.remove();
  }

  // Toon de echte website-inhoud
  const siteContent = document.getElementById("info");
  if (siteContent) {
    siteContent.classList.add("show");
  }
}
