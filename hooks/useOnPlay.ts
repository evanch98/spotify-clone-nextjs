import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

// when the user clicks the play button, use this hook to set the ids of the songs to be played
const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    // if the user has not logged in, ask them to log in
    if (!user) {
      return authModal.onOpen();
    }

    // set the current song to be played
    player.setId(id);
    // set the songs on the queue
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
