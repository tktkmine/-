export function showMenu() {
  hideAllScreens();

  const menu = document.getElementById("menu-screen");
  if (menu) menu.classList.add("active");
}

export function hideMenu() {
  const menu = document.getElementById("menu-screen");
  if (menu) menu.classList.remove("active");
}

/* =====================
   画面全部消す
===================== */

export function hideAllScreens() {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
}

/* =====================
   ボタン初期化
===================== */

export function initializeMenu({
  onBattle,
  onGacha,
  onHome,
  onCollection
}) {
  const battleBtn = document.getElementById("menu-battle");
  const gachaBtn = document.getElementById("menu-gacha");
  const homeBtn = document.getElementById("menu-home");
  const collectionBtn = document.getElementById("menu-collection");

  if (battleBtn) battleBtn.onclick = onBattle;
  if (gachaBtn) gachaBtn.onclick = onGacha;
  if (homeBtn) homeBtn.onclick = onHome;
  if (collectionBtn) collectionBtn.onclick = onCollection;
}
