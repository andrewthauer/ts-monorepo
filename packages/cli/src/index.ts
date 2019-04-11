import { doubleNumbers } from '@acme/api';

export const run = () => {
  const value = doubleNumbers([1, 2, 3]);

  // tslint:disable-next-line no-console
  console.log(value);
};

run();
