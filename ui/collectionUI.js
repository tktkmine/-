import {

  monsters

}
from "../data/monsters.js";

/* =====================
   図鑑描画
===================== */

export function renderCollection({

  playerData

}) {

  const container =

    document.getElementById(
      "collection-list"
    );

  /* 初期化 */

  container.innerHTML = "";

  /* 所持一覧 */

  const ownedIds =
    playerData.collection;

  /* =====================
     モンスター描画
  ===================== */

  monsters.forEach(
    (monster) => {

      const owned =

        ownedIds.includes(
          monster.id
        );

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "monster-card";

      card.innerHTML = `

        <div class="monster-rank">

          ${monster.rank.toUpperCase()}

        </div>

        <h3>

          ${
            owned
              ? monster.name
              : "？？？？"
          }

        </h3>

        <p>

          ${
            owned
              ? monster.world
              : "未発見"
          }

        </p>

        <p>

          ${
            owned
              ? monster.description
              : "情報が存在しない。"
          }

        </p>

      `;

      container.appendChild(
        card
      );
    }
  );
}

/* =====================
   図鑑表示
===================== */

export function showCollection() {

  document.getElementById(
    "collection-screen"
  ).classList.add(
    "active"
  );
}

/* =====================
   図鑑非表示
===================== */

export function hideCollection() {

  document.getElementById(
    "collection-screen"
  ).classList.remove(
    "active"
  );
}
