import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface NameStore {
  name: string
  setName: (newName: string) => void
}

export const useNameStore = create<NameStore>()(
  persist(
    (set) => ({
      name: '',
      setName: (newName: string) => set({ name: newName }),
    }),
    {
      name: 'name-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
