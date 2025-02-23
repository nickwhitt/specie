import type { CoinType } from "~/components/TypeList.vue"

export default defineEventHandler(() => {
  return [
    {
      type: "Shield",
      slug:'#shield',
      dates: "1866-1883",
      designers: ["James B. Longacre"],
      image: "/nickels/shield-obv.webp",
      owned: true,
    },
    {
      type: "Liberty Head",
      slug:'#liberty-head',
      dates: "1883-1913",
      designers: ["Charles E. Barber"],
      image: "/nickels/liberty-head-obv.webp",
      owned: true,
    },
    {
      type: "Buffalo",
      slug:'#buffalo',
      dates: "1913-1938",
      designers: ["James Earle Fraser"],
      image: "/nickels/buffalo-rev.webp",
      owned: true,
    },
    {
      type: "Jefferson",
      slug:'#jefferson',
      dates: "1938-date",
      designers: ["Felix Schlag", "Joe Fitzgerald", "Jamie Franki"],
      image: "/nickels/jefferson-obv.webp",
      owned: true,
    },
  ] as CoinType[]
})
