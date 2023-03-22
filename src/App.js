import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "./MovieCard";

// key: 1b0a0554
const API_URL = "https://www.omdbapi.com?apikey=1b0a0554";

const movie1 = {
  Title: "Batman Forever",
  Year: "1995",
  imdbID: "tt0112462",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="w-full h-auto py-10 text-center bg-[#111111]">
      <div className="py-6 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold pb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-500">
          Movie App
        </h1>
        <div className="w-[70%] py-4 px-4 relative">
          <input
            className="bg-gray-700 text-gray-400 inputShadow w-full py-4 px-6 rounded-md outline-none border-none"
            type="text"
            placeholder="Search For Movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span
            className="absolute right-10 top-8 text-gray-400"
            onClick={() => searchMovies(search)}
          >
            {" "}
            <SearchIcon />
          </span>
        </div>

        {movies.length > 0 ? (
          <div className="text-white w-full mb-24 flex justify-center items-center gap-10 flex-wrap bg-[#111111]">
            {movies.map((item) => (
              <MovieCard
                Title={item.Title}
                Year={item.Year}
                Poster={item.Poster}
                Type={item.Type}
              />
            ))}
          </div>
        ) : (
          <div>
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
