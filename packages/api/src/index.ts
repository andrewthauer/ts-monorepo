import { map } from '@acme/core';

export const doubleNumbers = (data: number[]) => {
  return map(i => i * 2, data);
};
