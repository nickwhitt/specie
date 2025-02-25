import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '1831', mintage: 2200, estimate: true },
    { issue: '1831, Restrike', mintage: 50, estimate: true, variants: ['Large Berries', 'Small Berries'] },
    { issue: '1832', mintage: 15, estimate: true },
    { issue: '1833', mintage: 30, estimate: true },
    { issue: '1834', mintage: 30, estimate: true },
    { issue: '1835', mintage: 20, estimate: true },
    { issue: '1836', mintage: 200, estimate: true },
    { issue: '1836, Restrike', mintage: 10, estimate: true },
  ] as Issue[];
});
