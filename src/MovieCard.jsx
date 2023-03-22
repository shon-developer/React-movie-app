import React from "react";

const MovieCard = ({ Title, Year, Poster, Type }) => {
  return (
    <div className="w-[310px] h-[460px] mt-24 relative rounded-md border-none ">
      <div className="absolute left-2 top-2">
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>
      <div className="w-[300px] h-auto bg-gray-900 flex flex-col justify-start items-start px-6 py-6">
        <span className="tracking-wide font-thin">{Type}</span>
        <h3 className="font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {Title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
