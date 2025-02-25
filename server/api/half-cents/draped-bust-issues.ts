import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '1800', mintage: 202908 },
    { issue: '1802', mintage: 20266, variants: ['Reverse of 1800'] },
    { issue: '1803', mintage: 92000, variants: ['Widely Spaced 3'] },
    { issue: '1804', mintage: 1055312, variants: ['Crosslet 4', 'Stemless Wreath', 'Spiked Chin'] },
    { issue: '1805', mintage: 814464, variants: ['Stemless Wreath', 'Large 5', 'Small 5'] },
    { issue: '1806', mintage: 356000, variants: ['Stemless Wreath', 'Large 6', 'Small 6'] },
    { issue: '1807', mintage: 476000 },
    { issue: '1808', mintage: 400000, variants: ['8 Over 7'] },
  ] as Issue[];
});
