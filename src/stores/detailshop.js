import { create } from "zustand";

const useDetailShop = create((set) => ({
  details: [],
  setDetails: (newData) => set(() => ({ details: newData })),
  token: "",
  setToken: (newToken) => set(() => ({ token: newToken })),
}));
export default useDetailShop;
