import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "2006-S", mintage: 3054436 },
    { issue: "2007-S", mintage: 2577166 },
    { issue: "2008-S", mintage: 2169561 },
    { issue: "2009-S", mintage: 2179867 },
    { issue: "2010-S", mintage: 1689216, estimate: true },
    { issue: "2011-S", mintage: 1673010, estimate: true },
    { issue: "2012-S", mintage: 1239148 },
    { issue: "2013-S", mintage: 1274505, estimate: true },
    { issue: "2014-S", mintage: 1190369, estimate: true },
    { issue: "2015-S", mintage: 1099182, estimate: true },
    { issue: "2016-S", mintage: 1011624, estimate: true },
    { issue: "2017-S", mintage: 979477, estimate: true },
    { issue: "2018-S", mintage: 901072, estimate: true },
    { issue: "2019-S", mintage: 1061558, estimate: true },
    { issue: "2020-S", mintage: 824332, estimate: true },
    { issue: "2020-W", mintage: 465080, estimate: true },
    { issue: "2020-W, RevPf", mintage: 313184, estimate: true },
    { issue: "2021-S", mintage: 792612, estimate: true },
    { issue: "2022-S" },
    { issue: "2023-S" },
    { issue: "2024-S" },
    { issue: "2025-S" },
  ] as Issue[];
});
