// store.ts
import { create } from "zustand";

// Define the state interface
interface StoreState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

// Use the interface in your Zustand store
const useStore = create<StoreState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useStore;
