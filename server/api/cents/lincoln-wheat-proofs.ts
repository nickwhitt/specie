import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "1909, V.D.B", mintage: 600, estimate: true },
    { issue: "1909", mintage: 2618 },
    { issue: "1910", mintage: 4118 },
    { issue: "1911", mintage: 1725 },
    { issue: "1912", mintage: 2172 },
  ] as Issue[];
});
