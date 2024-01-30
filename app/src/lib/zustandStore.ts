import { create } from "zustand";
import { getCurrentUser, getIdToken } from "./auth";

const useAuthStore = create((set) => ({
  currentUser: null,
  idToken: null,
  setCurrentUser: (user) => set({ currentUser: user }),
  setIdToken: (token) => set({ idToken: token }),
}));
