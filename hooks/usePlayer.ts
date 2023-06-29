import { create } from "zustand";

interface PlayerStore {
  ids: string[]; // a list of song ids to be played
  activeId?: string; // the id of the currently playing song
  setId: (id: string) => void; // set the activeId
  setIds: (ids: string[]) => void; // set the ids
  reset: () => void; // reset
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ ids: [], activeId: undefined }),
}));

export default usePlayer;
