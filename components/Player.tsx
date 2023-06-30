"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSong from "@/hooks/useLoadSong";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSong(song!);

  // if any of these values are not available, do not open the Player
  if (!song || !songUrl || !player.activeId) {
    return null;
  }
  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      {/* The reason to use key here is to ensure that the player component is destroyed before loading a new song */}
      {/* The hook that is going to be used in this project does not support dynamic and modular url changes */}
      {/* Therefore, we need the key attributes to reset the entire hook that is used in the PlayerContent */}
      <PlayerContent 
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
    </div>
  );
};

export default Player;
