import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '1793', mintage: 35334 },
    { issue: '1794', mintage: 81600, variants: ['High-Relief Head']},
    { issue: '1795', mintage: 139690, variants: ['No Pole', 'Punctuated Date', 'Plain Edge'] },
    { issue: '1796', mintage: 6480, variants: ['No Pole'] },
    { issue: '1797', mintage: 127840, variants: ['1 Above 1', 'Low Head', 'Lettered Edge', 'Gripped Edge'] },
  ] as Issue[];
});
