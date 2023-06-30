"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import { useEffect, useState } from "react";
import useSound from "use-sound";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // this will provide play, pause, and sound
  // the song that will be played is provided by songUrl (from the supabase storage)
  const [play, { pause, sound }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"], // the format of the sound should be mp3 (for this project)
  });

  // to play the sound automatically when the PlayerContent component is loaded
  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  // if isPlaying is true, show the pause icon; otherwise, show the play icon
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  // if the volume is zero show the speaker icon with a x mark; otherwise, show the speaker icon with a wave
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  // handle the play button's function
  const handlePlay = () => {
    // if the song is not playing, play the song; otherwise, pause it
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  // to set the volume to mute and unmute
  const toggleMute = () => {
    // if the volume is already muted (volume === 0), unmute it; otherwise, mute it
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  // handle the next button's function
  const onPlayNext = () => {
    // if the length of the player.ids.length is 0, there is nothing to return
    if (player.ids.length === 0) {
      return;
    }

    // otherwise, get the index of the activeId
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    // then, get the id of the song that is after the current song
    const nextSong = player.ids[currentIndex + 1];

    // if the current song is the last song of the playlist, play the first song of the playlist
    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong); // set the song to be played (the song after the current song)
  };

  // handle the back button's function
  const onPlayPrevious = () => {
    // if the length of the player.ids.length is 0, there is nothing to return
    if (player.ids.length === 0) {
      return;
    }

    // otherwise, get the index of the activeId
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    // then, get the id of the song that is before the current song
    const previousSong = player.ids[currentIndex - 1];

    // if the current song is the first song of the playlist, play the last song of the playlist
    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(previousSong); // set the song to be played (the song before the current song)
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={handlePlay}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>
      {/* Desktop View */}
      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={handlePlay}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={34}
          />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
