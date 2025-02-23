import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '1816', mintage: 2820982 },
    { issue: '1817', mintage: 3948400, variants: ['13 Stars', '15 Stars'] },
    { issue: '1818', mintage: 3167000 },
    { issue: '1819', mintage: 2671000, variants: ['9 Over 8', 'Large Date', 'Small Date'] },
    { issue: '1820', mintage: 4407550, variants: ['20 Over 19', 'Large Date', 'Small Date'] },
    { issue: '1821', mintage: 389000 },
    { issue: '1822', mintage: 2072339 },
    { issue: '1823', variants: ['3 Over 2', 'Restrike'] },
    { issue: '1824', mintage: 1262000, variants: ['4 Over 2'] },
    { issue: '1825', mintage: 1461100 },
    { issue: '1826', mintage: 1517425, variants: ['6 Over 5'] },
    { issue: '1827', mintage: 2357732 },
    { issue: '1828', mintage: 2260624, variants: ['Lg Narrow Date', 'Sm Wide Date'] },
    { issue: '1829', mintage: 1414500, variants: ['Large Letters', 'Medium Letters'] },
    { issue: '1830', mintage: 1711500, variants: ['Large Letters', 'Medium Letters'] },
    { issue: '1831', mintage: 3359260, variants: ['Large Letters', 'Medium Letters'] },
    { issue: '1832', mintage: 2362000, variants: ['Large Letters', 'Medium Letters'] },
    { issue: '1833', mintage: 2739000 },
    { issue: '1834', mintage: 1855100, variants: ['Lg 8 and Stars', 'Lg 8, Sm Stars', 'Sm 8, Lg Stars'] },
  ] as Issue[]
});
