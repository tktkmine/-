/* =====================
   プレイヤー情報表示
===================== */

export function renderPlayerInfo({

  playerData

}) {

  /* 名前 */

  document.getElementById(
    "home-player-name"
  ).textContent =
    playerData.playerName;

  /* 所属世界 */

  document.getElementById(
    "home-player-world"
  ).textContent =
    playerData.world;

  /* ゴールド */

  document.getElementById(
    "home-player-gold"
  ).textContent =
    `${playerData.gold} G`;
}

/* =====================
   パーティ表示
===================== */

export function renderParty({

  partyMonsters

}) {

  const container =

    document.getElementById(
      "party-container"
    );

  /* 初期化 */

  container.innerHTML = "";

  /* =====================
     描画
  ===================== */

  partyMonsters.forEach(
    (monster) => {

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "party-card";

      card.innerHTML = `

        <h3>
          ${monster.name}
        </h3>

        <p>
          Rank:
          ${monster.rank}
        </p>

        <p>
          ${monster.world}
        </p>

      `;

      container.appendChild(
        card
      );
    }
  );
}

/* =====================
   ホーム表示
===================== */

export function showHome(

  screenId

) {

  document.getElementById(
    screenId
  ).style.display =
    "block";
}

/* =====================
   ホーム非表示
===================== */

export function hideHome(

  screenId

) {

  document.getElementById(
    screenId
  ).style.display =
    "none";
}

/* =====================
   ボタン初期化
===================== */

export function initializeHomeButtons({

  collectionButtonId,

  gachaButtonId,

  battleButtonId,

  onCollection,

  onGacha,

  onBattle

}) {

  /* 図鑑 */

  document.getElementById(
    collectionButtonId
  ).onclick = () => {

    onCollection();
  };

  /* ガチャ */

  document.getElementById(
    gachaButtonId
  ).onclick = () => {

    onGacha();
  };

  /* バトル */

  document.getElementById(
    battleButtonId
  ).onclick = () => {

    onBattle();
  };
}
