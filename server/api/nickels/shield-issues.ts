import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "1866", mintage: 14742500, variants: ["Repunched Date"] },
    { issue: "1867, Rays", mintage: 2019000 },
    { issue: "1867, No Rays", mintage: 28890500 },
    { issue: "1868", mintage: 28817000, owned: "EF" },
    { issue: "1869", mintage: 16395000 },
    { issue: "1870", mintage: 4806000 },
    { issue: "1871", mintage: 561000 },
    { issue: "1872", mintage: 6036000 },
    { issue: "1873, Close 3", mintage: 436050, variants:['Double Die Obv'] },
    { issue: "1873, Open 3", mintage: 4113950, variants:['Large Over Small 3'] },
    { issue: "1874", mintage: 3538000 },
    { issue: "1875", mintage: 2097000 },
    { issue: "1876", mintage: 2530000 },
    { issue: "1879", mintage: 25900 },
    { issue: "1880", mintage: 16000 },
    { issue: "1881", mintage: 68800 },
    { issue: "1882", mintage: 11472900 },
    { issue: "1883", mintage: 1451500, variants:['3 Over 2'] },
  ] as Issue[];
});
