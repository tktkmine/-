import {

  getElementMultiplier

}
from "./elements.js";

/* =====================
   ダメージ計算
===================== */

export function calculateDamage({

  attacker,

  defender,

  multiplier,

  skillPower = 1

}) {

  /* =====================
     基本ダメージ
  ===================== */

  let damage =
    (
      attacker.atk -
      defender.def
    );

  /* 最低保証 */

  damage =
    Math.max(1, damage);

  /* =====================
     ゲージ倍率
  ===================== */

  damage *= multiplier;

  /* =====================
     スキル倍率
  ===================== */

  damage *= skillPower;

  /* =====================
     属性倍率
  ===================== */

  const elementMultiplier =

    getElementMultiplier(

      attacker.element,

      defender.element

    );

  damage *= elementMultiplier;

  /* =====================
     最終処理
  ===================== */

  damage =
    Math.floor(damage);

  damage =
    Math.max(1, damage);

  return {

    damage,

    elementMultiplier

  };
}
