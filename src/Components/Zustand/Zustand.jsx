import { create } from 'zustand'

const useStore = create((set) => ({
  name: "",
    setName: (Newname) => set(() => ({ name: Newname })),
    dark: false,
    setToggle: () => set((Toggle) => ({dark: !Toggle.dark}))
}))
export default useStore;