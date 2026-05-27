/* =====================
   ガチャ結果表示
===================== */

export function showGachaResult({

  resultScreenId,

  monster

}) {

  const resultScreen =

    document.getElementById(
      resultScreenId
    );

  /* 表示 */

  resultScreen.style.display =
    "flex";

  /* 名前 */

  document.getElementById(
    "gacha-monster-name"
  ).textContent =
    monster.name;

  /* ランク */

  document.getElementById(
    "gacha-monster-rank"
  ).textContent =
    monster.rank.toUpperCase();

  /* 世界 */

  document.getElementById(
    "gacha-monster-world"
  ).textContent =
    monster.world;

  /* 説明 */

  document.getElementById(
    "gacha-monster-desc"
  ).textContent =
    monster.description;
}

/* =====================
   ガチャ結果非表示
===================== */

export function hideGachaResult(

  resultScreenId

) {

  document.getElementById(
    resultScreenId
  ).style.display =
    "none";
}

/* =====================
   レア演出
===================== */

export function playRareEffect(

  rank

) {

  /* Aランク */

  if (rank === "a") {

    document.body.classList
      .add("rare-effect");

    setTimeout(() => {

      document.body.classList
        .remove(
          "rare-effect"
        );

    }, 1000);
  }
}

/* =====================
   ガチャボタン
===================== */

export function initializeGachaButton({

  buttonId,

  onGacha

}) {

  document.getElementById(
    buttonId
  ).onclick = () => {

    onGacha();
  };
}
