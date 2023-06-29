interface usePlayerStore {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (ids: string) => void;
  reset: () => void;
}
