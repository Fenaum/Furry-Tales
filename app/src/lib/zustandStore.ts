import { create } from "zustand";
import { getCurrentUser, getIdToken } from "./auth";

async function getUser() {
  const user = await getCurrentUser();
  const token = await getIdToken();
  return { user, token };
}

const useAuthStore = create((set) => {
  return (
    {
      currentUser: null,
      currentToken: null,
      setCurrentUser: async () => {
        const { user, token } = await getUser();
        set({ currentUser: user, currentToken: token });
      }
    } 
  )
});

export default useAuthStore;