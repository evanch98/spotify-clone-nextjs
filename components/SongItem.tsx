"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data); // retrieve the path of the image of the given song
  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Cover Image"
        />
      </div>
      <div className="flex flex-col items-center w-full pt-4 gap-y-1">
        <h1 className="font-semibold truncate w-full">{data.title}</h1>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        Play Button
      </div>
    </div>
  );
};

export default SongItem;
