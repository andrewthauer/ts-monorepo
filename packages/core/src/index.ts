export const map = <T, O>(iteratee: (i: T) => O, data: T[]): O[] =>
  data.map((i: T) => iteratee(i));
