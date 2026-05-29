/* =====================
   ゲージ状態
===================== */

let gaugeValue = 0;

let gaugeDirection = 1;

let gaugeAnimation = null;

/* =====================
   ゲージ開始
===================== */

export function startGauge({

  gaugeBar,

  gaugeText

}) {

  stopGauge();

  gaugeValue = 0;

  gaugeDirection = 1;

  gaugeAnimation = setInterval(() => {

    gaugeValue +=
      gaugeDirection * 2;

    /* 往復 */

    if (gaugeValue >= 100) {

      gaugeValue = 100;

      gaugeDirection = -1;
    }

    if (gaugeValue <= 0) {

      gaugeValue = 0;

      gaugeDirection = 1;
    }

    /* UI更新 */

    gaugeBar.style.width =
      `${gaugeValue}%`;

    /* 倍率 */

    const multiplier =

      (
        1 +
        gaugeValue / 25
      ).toFixed(1);

    gaugeText.textContent =
      `x${multiplier}`;

  }, 16);
}

/* =====================
   STOP
===================== */

export function stopGauge() {

  clearInterval(
    gaugeAnimation
  );
}

/* =====================
   現在倍率
===================== */

export function getGaugeMultiplier() {

  return Number(

    (
      1 +
      gaugeValue / 25
    ).toFixed(1)

  );
}
