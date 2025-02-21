import { Issue } from "~/components/TypeIssues.vue";

export default defineEventHandler(() => {
  return [
    { issue: '2009, Birth and Early Childhood', mintage: 284400000, owned: true },
    { issue: '2009, Birth and Early Childhood, copper', mintage: 784614 },
    { issue: '2009-D, Birth and Early Childhood', mintage: 350400000 },
    { issue: '2009-D, Birth and Early Childhood, copper', mintage: 784614 },
    { issue: '2009, Formative Years', mintage: 376000000 },
    { issue: '2009, Formative Years, copper', mintage: 784614 },
    { issue: '2009-D, Formative Years', mintage: 363600000 },
    { issue: '2009-D, Formative Years, copper', mintage: 784614 },
    { issue: '2009, Professional Life', mintage: 316000000 },
    { issue: '2009, Professional Life, copper', mintage: 784614 },
    { issue: '2009-D, Professional Life', mintage: 336000000 },
    { issue: '2009-D, Professional Life, copper', mintage: 784614 },
    { issue: '2009, Presidency', mintage: 129600000 },
    { issue: '2009, Presidency, copper', mintage: 784614 },
    { issue: '2009-D, Presidency', mintage: 198000000 },
    { issue: '2009-D, Presidency, copper', mintage: 784614 },
  ] as Issue[];
});
