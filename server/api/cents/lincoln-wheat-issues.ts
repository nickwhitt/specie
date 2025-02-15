import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "1909, V.D.B.", mintage: 27995000, variants: ["Doubled Die Obv"] },
    { issue: "1909-S, V.D.B.", mintage: 484000 },
    { issue: "1909", mintage: 72702618 },
    { issue: "1909-S", mintage: 1825000, variants: ["S Over Horiz S"] },
    { issue: "1910", mintage: 146801218 },
    { issue: "1910-S", mintage: 6045000 },
    { issue: "1911", mintage: 101177787 },
    { issue: "1911-D", mintage: 12672000 },
    { issue: "1911-S", mintage: 4026000 },
    { issue: "1912", mintage: 68153060 },
    { issue: "1912-D", mintage: 10411000 },
    { issue: "1912-S", mintage: 4431000 },
  ] as Issue[];
});
