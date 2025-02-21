import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '2009-S, Birth and Early Childhood, copper', mintage: 2995615 },
    { issue: '2009-S, Formative Years, copper', mintage: 2995615 },
    { issue: '2009-S, Professional Life, copper', mintage: 2995615 },
    { issue: '2009-S, Presidency, copper', mintage: 2995615 },
  ] as Issue[];
});
