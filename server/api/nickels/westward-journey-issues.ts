import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: "2004-P, Peace Medal", mintage: 361440000 },
    { issue: "2004-D, Peace Medal", mintage: 372000000, owned: true },
    { issue: "2004-P, Keelboat", mintage: 366720000, owned: true },
    { issue: "2004-D, Keelboat", mintage: 344880000, owned: true },
    { issue: "2005-P, American Bison", mintage: 448320000, owned: true },
    { issue: "2005-D, American Bison", mintage: 487680000 },
    { issue: "2005-P, Ocean in View", mintage: 394080000, owned: true },
    { issue: "2005-D, Ocean in View", mintage: 411120000 },
  ] as Issue[];
});
