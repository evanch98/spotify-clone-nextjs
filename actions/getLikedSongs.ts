import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// to fetch the liked songs from the server
// the function will return the Promise<Song[]>
const getLikedSongs = async (): Promise<Song[]> => {
  // create the server component client
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  // get the current session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // fetch the data from the liked_songs table
  const { data, error } = await supabase
    .from("liked_songs")
    .select("*, songs(*)") // this will select all liked_songs including the data from the songs table
    .eq("user_id", session?.user?.id) // only fetch liked songs of the current user
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    return [];
  }

  if (!data) {
    return [];
  }

  // will return the songs that is in the liked_songs table
  return data.map((item) => ({
    ...item.songs,
  }));
};

export default getLikedSongs;
