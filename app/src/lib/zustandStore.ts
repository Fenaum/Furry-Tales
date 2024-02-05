import { create } from "zustand";

const useAuthStore = create((set) => {
  return (
    {
      currentUser: null,
      currentToken: null,
    }
  )
});

export default useAuthStore;