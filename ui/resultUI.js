/* =====================
   結果画面表示
===================== */

export function showResult({

  title,

  message,

  reward

}) {

  const resultHtml = `

    <div class="result-overlay">

      <div class="result-card">

        <h2>
          ${title}
        </h2>

        <p>
          ${message}
        </p>

        <p class="reward-text">
          ${reward}
        </p>

        <button id="result-close-btn">

          OK

        </button>

      </div>

    </div>

  `;

  document.body.insertAdjacentHTML(

    "beforeend",

    resultHtml

  );

  /* 閉じる */

  document.getElementById(
    "result-close-btn"
  ).onclick = () => {

    closeResult();
  };
}

/* =====================
   結果閉じる
===================== */

export function closeResult() {

  const overlay =

    document.querySelector(
      ".result-overlay"
    );

  if (overlay) {

    overlay.remove();
  }
}

/* =====================
   勝利結果
===================== */

export function showVictory({

  gold

}) {

  showResult({

    title:
      "勝利！",

    message:
      "モンスターを撃破した！",

    reward:
      `${gold}G 獲得`
  });
}

/* =====================
   敗北結果
===================== */

export function showDefeat() {

  showResult({

    title:
      "敗北...",

    message:
      "モンスターに敗北した。",

    reward:
      "再挑戦しよう"
  });
}
