import { ProductWithPrice } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// to fetch the products with prices from the server
// the function will return the Promise<ProductWithPrice[]>
const getActiveProductsWithPrices = async (): Promise<ProductWithPrice[]> => {
  // create the server component client
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  // fetch the data from the songs table
  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getActiveProductsWithPrices;
