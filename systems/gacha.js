import { monsters }
from "../data/monsters.js";

/* =====================
   レア率
===================== */

const rarityRates = {

  c: 60,

  b: 30,

  a: 10
};

/* =====================
   ランク抽選
===================== */

export function rollRarity() {

  const random =
    Math.random() * 100;

  /* C */

  if (
    random <
    rarityRates.c
  ) {

    return "c";
  }

  /* B */

  if (
    random <
    rarityRates.c +
    rarityRates.b
  ) {

    return "b";
  }

  /* A */

  return "a";
}

/* =====================
   ランク一致抽出
===================== */

export function getMonstersByRank(

  rank

) {

  return monsters.filter(
    (monster) => {

      return (
        monster.rank
          .toLowerCase()
        ===
        rank
      );
    }
  );
}

/* =====================
   ガチャ実行
===================== */

export function executeGacha() {

  /* ランク */

  const rarity =
    rollRarity();

  /* 候補 */

  const candidates =

    getMonstersByRank(
      rarity
    );

  /* ランダム */

  const randomIndex =

    Math.floor(
      Math.random() *
      candidates.length
    );

  /* 排出 */

  return candidates[
    randomIndex
  ];
}
