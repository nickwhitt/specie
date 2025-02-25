import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '1809', mintage: 1154572, variants: ['Small o Inside 0', '9 Over Inverted 9'] },
    { issue: '1810', mintage: 215000 },
    { issue: '1811', mintage: 63140, variants: ['Wide Date', 'Close Date', 'Restrike'] },
    { issue: '1825', mintage: 63000 },
    { issue: '1826', mintage: 234000 },
    { issue: '1828', mintage: 606000, variants: ['13 Stars', '12 Stars'] },
    { issue: '1829', mintage: 487000 },
    { issue: '1832', mintage: 51000 },
    { issue: '1833', mintage: 103000 },
    { issue: '1834', mintage: 141000 },
    { issue: '1835', mintage: 398000 },
  ] as Issue[];
});
