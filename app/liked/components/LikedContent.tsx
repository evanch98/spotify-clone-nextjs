"use client";

import { Song } from "@/types";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  return <div>Liked Content</div>;
};

export default LikedContent;
