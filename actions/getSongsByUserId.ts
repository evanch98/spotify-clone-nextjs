import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// to fetch the songs from the server
// the function will return the Promise<Song[]>
const getSongsByUserId = async (): Promise<Song[]> => {
  // create the server component client
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  // if there is an error (e.g. user not logged in)
  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  // if there is no error, fetch the songs uploaded by the current user
  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionData.session?.user.id)
    .order("created_at", { ascending: false });

  // if there is an error fetching the songs
  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongsByUserId;
