import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '1835', variants: ['Head of 1836'] },
    { issue: '1836', mintage: 2111000 },
    { issue: '1837', mintage: 5558300, variants: ['Medium Letters', 'Small Letters', 'Head of 1838'] },
    { issue: '1838', mintage: 6370200 },
    { issue: '1839', mintage: 3128661, variants: ['9 Over 6', 'Head of 1838', 'Silly Head', 'Booby Head'] },
    { issue: '1840', mintage: 2462700, variants: ['Large Date', 'Small Date', 'Sm 18 Over Lg 18'] },
    { issue: '1841', mintage: 1597367 },
    { issue: '1842', mintage: 2383390, variants: ['Small Date', 'Large Date'] },
    { issue: '1843', mintage: 2425342, variants: ['Small Letters', 'Petite, Lg Letters', 'Large Letters'] },
    { issue: '1844', mintage: 2398752, variants: ['44 Over 81'] },
    { issue: '1845', mintage: 3894804 },
    { issue: '1846', mintage: 4120800, variants: ['Small Date', 'Medium Date', 'Tall Date'] },
    { issue: '1847', mintage: 6138669, variants: ['7 Over Sm 7'] },
    { issue: '1848', mintage: 6415799 },
    { issue: '1849', mintage: 4178500 },
    { issue: '1850', mintage: 4426844 },
    { issue: '1851', mintage: 9889707, variants: ['51 over 81'] },
    { issue: '1852', mintage: 5063094 },
    { issue: '1853', mintage: 6641131, owned: 'EF' },
    { issue: '1854', mintage: 4236156 },
    { issue: '1855', mintage: 1574829, variants: ['Upright 55', 'Slanting 55', 'Knob on Ear'] },
    { issue: '1856', mintage: 2690463, variants: ['Upright 55', 'Slanting 55'] },
    { issue: '1857', mintage: 333546, variants: ['Large Date', 'Small Date'] },
  ] as Issue[]
});
