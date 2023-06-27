import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSongs from "./getSongs";

// to fetch the songs from the server
// the function will return the Promise<Song[]>
const getSongsByTitle = async (title: string): Promise<Song[]> => {
  // create the server component client
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  // if the title is not provided, return all songs
  if (!title) {
    const allSongs = await getSongs();
    return allSongs;
  }

  // fetch the data from the title column of the songs table
  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getSongsByTitle;
