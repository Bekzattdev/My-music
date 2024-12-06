"use client";
import { useGetSearchQuery } from "@/src/redux/api/search";
import { useParams } from "next/navigation";

const SearchPage = () => {
  const params = useParams();
  const searchQuery = Array.isArray(params.searchQuery)
    ? params.searchQuery[0] // Если массив, взять первый элемент
    : params.searchQuery; // Иначе просто значение

  const { data, isLoading, error } = useGetSearchQuery(searchQuery || ""); // Предотвращение undefined

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading search results.</p>;
console.log(data,"nonenenene");

  return (
    <div>
      <h1>Search Results for &quot;{decodeURIComponent(searchQuery || "")}&quot;</h1>
      <ul>
        {data?.results?.map(
          (song: { id: string; title: string; artist: string }) => (
            <li key={song.id}>
              {song.title} by {song.artist}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
