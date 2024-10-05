import { create } from 'zustand'

interface PasswordStore {
  passwords: string[]
  addPassword: (newPassword: string) => void
  clearPasswords: () => void
}

export const usePasswordStore = create<PasswordStore>()((set) => ({
  passwords: [],
  addPassword: (newPassword: string) => set((state) => ({ passwords: [...state.passwords, newPassword] })),
  clearPasswords: () => set({ passwords: [] }),
}))
