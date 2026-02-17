import { create } from "zustand";

interface CharacterSelectionStore {
  isCardExpanded: boolean;
  setIsCardExpanded: (value: boolean) => void;
  toggleCardExpandedState: () => void;
}

export const useCardStore = create<CharacterSelectionStore>((set) => ({
  // Initial state
  isCardExpanded: false,

  // Explicit setter
  setIsCardExpanded: (value) => set({ isCardExpanded: value }),

  // Optional toggle helper
  toggleCardExpandedState: () =>
    set((state) => ({
      isCardExpanded: !state.isCardExpanded,
    })),
}));
