"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data); // retrieve the path of the image of the given song

  // handle the onClick
  const handleClick = () => {
    // if the onClick function exists
    if (onClick) {
      return onClick(data.id);
    }

    // Default turn on player
  };
  return <div>MediaItem</div>;
};

export default MediaItem;
