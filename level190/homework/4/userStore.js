import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,

  login: (name, email) =>
    set({
      user: { name, email },
    }),

  logout: () =>
    set({
      user: null,
    }),
}));

export default useUserStore;