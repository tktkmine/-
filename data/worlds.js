export const worlds = {

  /* =====================
     焔界
  ===================== */

  fire: {

    id: "fire",

    name: "焔界",

    color: "#ef4444",

    description:
      "灼熱の火山地帯が広がる炎の世界。",

    strongAgainst:
      "nature",

    weakAgainst:
      "water"
  },

  /* =====================
     森界
  ===================== */

  nature: {

    id: "nature",

    name: "森界",

    color: "#22c55e",

    description:
      "精霊と巨木が生きる自然世界。",

    strongAgainst:
      "water",

    weakAgainst:
      "fire"
  },

  /* =====================
     海界
  ===================== */

  water: {

    id: "water",

    name: "海界",

    color: "#3b82f6",

    description:
      "深海文明が眠る蒼海世界。",

    strongAgainst:
      "fire",

    weakAgainst:
      "thunder"
  },

  /* =====================
     雷界
  ===================== */

  thunder: {

    id: "thunder",

    name: "雷界",

    color: "#eab308",

    description:
      "雷鳴と機械文明が支配する世界。",

    strongAgainst:
      "water",

    weakAgainst:
      "earth"
  },

  /* =====================
     岩界
  ===================== */

  earth: {

    id: "earth",

    name: "岩界",

    color: "#a16207",

    description:
      "古代遺跡と巨岩が眠る大地世界。",

    strongAgainst:
      "thunder",

    weakAgainst:
      "nature"
  }

};
