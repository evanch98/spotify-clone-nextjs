import getSongsByTitle from "@/actions/getSongsByTitle";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title); // fetch the songs from the server by the given title

  return <div>Search</div>;
};

export default Search;
