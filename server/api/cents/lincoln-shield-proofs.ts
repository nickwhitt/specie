import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '2010-S', mintage: 1689216 },
    { issue: '2011-S', mintage: 1673010 },
    { issue: '2012-S', mintage: 1239148 },
    { issue: '2013-S', mintage: 1274505 },
    { issue: '2014-S', mintage: 1190369 },
    { issue: '2015-S', mintage: 1099182 },
    { issue: '2016-S', mintage: 978457 },
    { issue: '2017-S', mintage: 979475 },
    { issue: '2018-S', mintage: 901072, estimate: true },
    { issue: '2019-S', mintage: 1061558, estimate: true },
    { issue: '2019-W', mintage: 600423, estimate: true },
    { issue: '2019-W, RevPf', mintage: 412508, estimate: true },
    { issue: '2020-S', mintage: 824332, estimate: true },
    { issue: '2021-S', mintage: 792612, estimate: true },
    { issue: '2022-S' },
    { issue: '2023-S' },
    { issue: '2024-S' },
    { issue: '2025-S' },
  ] as Issue[];
});
