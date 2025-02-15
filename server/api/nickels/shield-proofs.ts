import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "1866", mintage: 600, estimate: true },
    { issue: "1867, Rays", mintage: 25, estimate: true },
    { issue: "1867, No Rays", mintage: 600, estimate: true, variants: ["Pattern Rev"] },
    { issue: "1868", mintage: 600, estimate: true },
    { issue: "1869", mintage: 600, estimate: true },
    { issue: "1870", mintage: 1000, estimate: true },
    { issue: "1871", mintage: 960, estimate: true },
    { issue: "1872", mintage: 950, estimate: true },
    { issue: "1873, Close 3", mintage: 1100, estimate: true },
    { issue: "1874", mintage: 700, estimate: true },
    { issue: "1875", mintage: 700, estimate: true },
    { issue: "1876", mintage: 1150, estimate: true },
    { issue: "1877", mintage: 900 },
    { issue: "1878", mintage: 2350 },
    { issue: "1879", mintage: 3200, variants:['9 over 8'] },
    { issue: "1880", mintage: 3955 },
    { issue: "1881", mintage: 3575 },
    { issue: "1882", mintage: 3100 },
    { issue: "1883", mintage: 5419 },
  ] as Issue[];
});
