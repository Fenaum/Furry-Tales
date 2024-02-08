import { create } from "zustand";

interface AuthState<UserType> {
  currentUser: UserType | null;
  setUser: (user: UserType) => void;
}

const useAuthStore = create<AuthState<any>>((set) => ({
  currentUser: null,
  setUser: (user) => set({ currentUser: user }),
}));

export default useAuthStore;
