/* =====================
   セーブキー
===================== */

const SAVE_KEY =
  "genkai_taisen_save";

/* =====================
   初期データ
===================== */

export function createNewSave() {

  return {

    playerName: "プレイヤー",

    world: null,

    gold: 1000,

    collection: [],

    party: [],

    settings: {

      bgm: true,

      se: true
    }
  };
}

/* =====================
   セーブ
===================== */

export function saveGame(data) {

  const json =
    JSON.stringify(data);

  localStorage.setItem(
    SAVE_KEY,
    json
  );
}

/* =====================
   ロード
===================== */

export function loadGame() {

  const saveData =

    localStorage.getItem(
      SAVE_KEY
    );

  /* セーブ無し */

  if (!saveData) {

    return createNewSave();
  }

  return JSON.parse(saveData);
}

/* =====================
   セーブ削除
===================== */

export function deleteSave() {

  localStorage.removeItem(
    SAVE_KEY
  );
}

/* =====================
   所持追加
===================== */

export function addMonsterToCollection({

  saveData,

  monsterId

}) {

  saveData.collection.push(
    monsterId
  );

  saveGame(saveData);
}

/* =====================
   パーティ設定
===================== */

export function setParty({

  saveData,

  party

}) {

  saveData.party = party;

  saveGame(saveData);
}
