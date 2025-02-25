import type { CoinType } from "~/components/TypeList.vue";

export default defineEventHandler(() => {
  return [
    {
      type: "Flowing Hair",
      slug: "#flowing-hair",
      dates: "1793",
      designers: ["Henry Voigt"],
      image: "/cents/flowing-hair-obv.webp",
    },
    {
      type: "Liberty Cap",
      slug: '#liberty-cap',
      dates: "1793-1796",
      designers: ["Henry Voigt"],
      image: "/cents/liberty-cap-obv.webp",
    },
    {
      type: "Draped Bust",
      slug: '#draped-bust',
      dates: "1796-1807",
      designers: ["Robert Scot"],
      image: "/cents/draped-bust-obv.webp",
    },
    {
      type: "Classic Head",
      slug: '#classic-head',
      dates: "1808-1814",
      designers: ["John Reich"],
      image: "/cents/classic-head-obv.webp",
    },
    {
      type: "Liberty Head",
      slug: "#liberty-head",
      dates: "1816-1857",
      designers: ["Robert Scot", "John Reich", "Christian Gobrecht"],
      image: "/cents/liberty-head-braided-hair-obv.webp",
      owned: true,
    },
    {
      type: "Flying Eagle",
      slug: '#flying-eagle',
      dates: "1856-1858",
      designers: ["James B. Longacre"],
      image: "/cents/flying-eagle-obv.webp",
    },
    {
      type: "Indian Head",
      slug: '#indian-head',
      dates: "1859-1909",
      designers: ["James B. Longacre"],
      image: "/cents/indian-head-obv.webp",
      owned: true,
    },
    {
      type: "Lincoln",
      slug: "#lincoln",
      dates: "1909-date",
      designers: ["Victor D. Brenner", "Frank Gasparro", "Lyndall Bass"],
      image: "/cents/lincoln-wheat-obv.webp",
      owned: true,
    },
  ] as CoinType[];
});
