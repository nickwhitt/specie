import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "1913, Raised", mintage: 1520 },
    { issue: "1913, Recessed", mintage: 1514 },
    { issue: "1914", mintage: 1275 },
    { issue: "1915", mintage: 1050 },
    { issue: "1916", mintage: 600 },
    { issue: "1936", mintage: 4420, variants: ['Satin Finish', 'Brilliant Finish'] },
    { issue: "1937", mintage: 5769 },
  ] as Issue[];
});
