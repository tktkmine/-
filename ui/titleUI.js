/* =====================
   タイトル表示
===================== */

export function showTitle() {

  document.getElementById(
    "title-screen"
  ).classList.add(
    "active"
  );
}

/* =====================
   タイトル非表示
===================== */

export function hideTitle() {

  document.getElementById(
    "title-screen"
  ).classList.remove(
    "active"
  );
}

/* =====================
   スタートボタン初期化
===================== */

export function initializeTitle({

  onStart

}) {

  document.getElementById(
    "start-btn"
  ).onclick = () => {

    onStart();
  };
}

/* =====================
   タイトル演出
===================== */

export function playTitleEffect() {

  const title =

    document.getElementById(
      "game-title"
    );

  title.animate(

    [

      {

        transform:
          "scale(1)"
      },

      {

        transform:
          "scale(1.05)"
      },

      {

        transform:
          "scale(1)"
      }

    ],

    {

      duration: 2000,

      iterations:
        Infinity

    }

  );
}
