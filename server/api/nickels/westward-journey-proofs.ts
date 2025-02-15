import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "2004-S, Peace Medal", mintage: 2992069 },
    { issue: "2004-S, Keelboat", mintage: 2965422 },
    { issue: "2005-S, American Bison", mintage: 3344679 },
    { issue: "2005-S, Ocean in View", mintage: 3344679 },
  ] as Issue[];
});
