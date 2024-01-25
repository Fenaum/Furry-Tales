import { create } from "zustand";

type State = {
  isOpen: boolean;
  toggle: () => void;
};

export const useStore = create<State>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({isOpen: !state.isOpen})),
}));
