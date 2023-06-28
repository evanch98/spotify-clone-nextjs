"use client";

import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  return <div>Search Content</div>;
};

export default SearchContent;
