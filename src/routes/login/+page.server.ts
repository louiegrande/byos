import type { Actions } from './$types';

export const actions = {
  login: async (event) => {
    console.log("Test");
  },
  register: async (event) => {
  }
} satisfies Actions;
