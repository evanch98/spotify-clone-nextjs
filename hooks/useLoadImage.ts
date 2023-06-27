import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

// a hook for loading an image
const useLoadImage = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  // if there is no song, return null
  if (!song) {
    return null;
  }

  // fetch the image of the given path from the supabase storage bucket (images)
  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;
