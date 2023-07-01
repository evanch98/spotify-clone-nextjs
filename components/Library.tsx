"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();
  const onPlay = useOnPlay(songs);

  const onClick = () => {
    // if the user has not logged in, ask them to log in
    if (!user) {
      return authModal.onOpen();
    }

    // Check for subscription
    // if the user has not subscribed, ask them to subscribe first
    if (!subscription) {
      return subscribeModal.onOpen();
    }

    // show the uploadModal only if the user has already logged in
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-base">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song) => (
          <MediaItem key={song.id} data={song} onClick={(id: string) => onPlay(id)} />
        ))}
      </div>
    </div>
  );
};

export default Library;
