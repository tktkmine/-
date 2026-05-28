import {

  monsters

}
from "./data/monsters.js";

import {

  loadGame,

  saveGame,

  addGold,

  addMonster

}
from "./systems/save.js";

import {

  initializeBattle,

  playerAttack,

  enemyAttack,

  beginPlayerGauge

}
from "./systems/battle.js";

import {

  executeGacha

}
from "./systems/gacha.js";

import {

  showMenu,

  initializeMenu,

  hideAllScreens

}
from "./ui/menuUI.js";

import {

  showTitle,

  hideTitle,

  initializeTitle,

  playTitleEffect

}
from "./ui/titleUI.js";

import {

  renderBattleMonsters,

  updateHpUI,

  clearBattleLog,

  appendBattleLog,

  showBattleScreen

}
from "./ui/battleUI.js";

import {

  renderCollection,

  showCollection

}
from "./ui/collectionUI.js";

import {

  showGachaResult,

  showGachaScreen,

  clearGachaResult

}
from "./ui/gachaUI.js";

import {

  renderHome,

  showHomeScreen

}
from "./ui/homeUI.js";

import {

  showVictory,

  showDefeat

}
from "./ui/resultUI.js";

/* =====================
   セーブデータ
===================== */

const playerData =
  loadGame();

/* =====================
   タイトル
===================== */

playTitleEffect();

initializeTitle({

  onStart: () => {

    hideAllScreens();

    showMenu();
  }

});

/* =====================
   メニュー
===================== */

initializeMenu({

  /* =====================
     バトル
  ===================== */

  onBattle: () => {

    startBattleMode();
  },

  /* =====================
     ガチャ
  ===================== */

  onGacha: () => {

    openGacha();
  },

  /* =====================
     ホーム
  ===================== */

  onHome: () => {

    openHome();
  },

  /* =====================
     図鑑
  ===================== */

  onCollection: () => {

    openCollection();
  }

});

/* =====================
   バトル開始
===================== */

let currentBattle = null;

function startBattleMode() {

  hideAllScreens();

  showBattleScreen();

  clearBattleLog();

  /* 自分 */

  const playerMonster =

    monsters.find(
      (monster) => {

        return (

          monster.id ===
          playerData.party[0]

        );
      }
    );

  /* 敵 */

  const enemyMonster =

    monsters[
      Math.floor(
        Math.random()
        *
        monsters.length
      )
    ];

  /* 初期化 */

  currentBattle =

    initializeBattle({

      player:
        structuredClone(
          playerMonster
        ),

      enemy:
        structuredClone(
          enemyMonster
        ),

      gaugeBarId:
        "gauge-bar",

      multiplierTextId:
        "multiplier-text"

    });

  /* 描画 */

  renderBattleMonsters({

    player:
      currentBattle.player,

    enemy:
      currentBattle.enemy

  });

  updateHpUI({

    player:
      currentBattle.player,

    enemy:
      currentBattle.enemy

  });

  appendBattleLog(

    "戦闘開始！"

  );

  /* ゲージ開始 */

  beginPlayerGauge({

    gaugeBarId:
      "gauge-bar",

    multiplierTextId:
      "multiplier-text"

  });
}

/* =====================
   STOPボタン
===================== */

document.getElementById(
  "stop-btn"
).onclick = async () => {

  /* プレイヤー攻撃 */

  const result =

    playerAttack({

      battleData:
        currentBattle,

      logElementId:
        "battle-log"

    });

  updateHpUI({

    player:
      currentBattle.player,

    enemy:
      currentBattle.enemy

  });

  /* 勝利 */

  if (result.finished) {

    showVictory({

      gold: 100

    });

    addGold({

      saveData:
        playerData,

      amount: 100

    });

    addMonster({

      saveData:
        playerData,

      monsterId:
        currentBattle.enemy.id

    });

    return;
  }

  /* 敵ターン */

  await delay(1000);

  const enemyResult =

    enemyAttack({

      battleData:
        currentBattle,

      logElementId:
        "battle-log"

    });

  updateHpUI({

    player:
      currentBattle.player,

    enemy:
      currentBattle.enemy

  });

  /* 敗北 */

  if (enemyResult.finished) {

    showDefeat();

    return;
  }

  /* 再開 */

  beginPlayerGauge({

    gaugeBarId:
      "gauge-bar",

    multiplierTextId:
      "multiplier-text"

  });
};

/* =====================
   ガチャ
===================== */

function openGacha() {

  hideAllScreens();

  showGachaScreen();

  clearGachaResult();
}

document.getElementById(
  "gacha-btn"
).onclick = () => {

  const result =

    executeGacha({

      playerData
    });

  /* 失敗 */

  if (!result.success) {

    alert(
      result.message
    );

    return;
  }

  showGachaResult({

    monster:
      result.monster
  });
};

/* =====================
   ホーム
===================== */

function openHome() {

  hideAllScreens();

  showHomeScreen();

  const partyMonsters =

    monsters.filter(
      (monster) => {

        return (

          playerData.party.includes(
            monster.id
          )

        );
      }
    );

  renderHome({

    playerData,

    partyMonsters

  });
}

/* =====================
   図鑑
===================== */

function openCollection() {

  hideAllScreens();

  showCollection();

  renderCollection({

    playerData
  });
}

/* =====================
   戻るボタン
===================== */

document.getElementById(
  "battle-back-btn"
).onclick = () => {

  hideAllScreens();

  showMenu();
};

document.getElementById(
  "gacha-back-btn"
).onclick = () => {

  hideAllScreens();

  showMenu();
};

document.getElementById(
  "home-back-btn"
).onclick = () => {

  hideAllScreens();

  showMenu();
};

document.getElementById(
  "collection-back-btn"
).onclick = () => {

  hideAllScreens();

  showMenu();
};

/* =====================
   待機
===================== */

function delay(ms) {

  return new Promise(
    (resolve) => {

      setTimeout(
        resolve,
        ms
      );
    }
  );
}

/* =====================
   初期画面
===================== */

showTitle();
