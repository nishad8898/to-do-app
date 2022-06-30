import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set, get) => ({
  items: ["cricket", "cs-go", "minecraft"],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  deleteItem: (index) => {
    const { items } = get();
    items.splice(index, 1);
    set({ items: [...items] });
  },
});

store = devtools(store);
store = persist(store);

const useStore = create(store);

export default useStore;
