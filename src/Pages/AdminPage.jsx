import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToIdMarket,
  getAllMovies,
  getMovieByKeyword,
  updatePriceById,
} from "./../storage/slices/movieSlice";
import MovieCard from "./../component/MovieCard";
import AppPagination from "../component/AppPagination";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "../component/SearchBar";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { allMovie, totalPages, searchList } = useSelector(
    (state) => state.movies
  );
  const [page, setPage] = useState(1);
  const [selectMovie, setSelectMovie] = useState(null);
  const [newPrice, setNewPrice] = useState(0);
  const limitedTotalPages = totalPages > 500 ? 500 : totalPages;
  const isSearch = searchList.length !== 0;
  const showMovie = isSearch ? searchList : allMovie;

  useEffect(() => {
    handleGetMovie();
  }, [page]);

  const handleGetMovie = () => {
    let data = { page: page };

    dispatch(getAllMovies(data));
  };

  const handleSetPrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleUpdatePrice = () => {
    const data = { id: selectMovie.id, price: parseInt(newPrice) };

    dispatch(updatePriceById(data));
  };

  const handleAddMovieToIdMarket = () => {
    dispatch(addMovieToIdMarket(selectMovie.id));
  };

  const renderMovieEditSection = () => {
    return (
      <div className="p-4">
        <div className=" ">
          <span className="text-lg font-bold">TITLE:</span>
          <span className="text-md font-medium"> {selectMovie.title}</span>
        </div>
        <div>
          <span className="text-lg font-bold">ID:</span>
          <span className="text-md font-medium"> {selectMovie.id}</span>{" "}
        </div>

        <div className="mt-2 flex">
          <label htmlFor="price">Price: </label>
          <input
            id="price"
            type="number"
            className="outline-none h-8 rounded-full p-2 ml-2 shadow-sm border"
            onChange={handleSetPrice}
          />
          <button
            onClick={handleUpdatePrice}
            className="h-8 ml-1 bg-yellow-300 hover:bg-yellow-400 p-1 px-2 font-medium rounded-full text-sm  shadow-sm"
          >
            UPDATE
          </button>
        </div>
        {/* <button
          onClick={handleAddMovieToIdMarket}
          className="bg-green-600 p-2 px-4 rounded-full my-4 hover:bg-green-800  shadow-sm"
        >
          Add To Store
        </button> */}
      </div>
    );
  };

  const handleSelectMovie = (movieId) => {
    setSelectMovie(movieId);
  };

 

  const renderMovie = () => {
    return (
      <div className=" ">
        <div
          className={`flex  ${
            isSearch ? " justify-end" : "  justify-between"
          }   pt-4  px-4`}
        >
          <div className={`${isSearch ? "hidden" : ""}`}>
            <AppPagination
              setPage={setPage}
              page={page}
              numberOfPage={limitedTotalPages}
            />
          </div>
          <div className="shadow-sm border border-black">
            <SearchBar />
          </div>

    
        </div>

        <div className="flex flex-wrap justify-around gap-3 py-4">
          {showMovie &&
            showMovie.map((movie) => (
              <React.Fragment key={movie.id}>
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelectMovie={handleSelectMovie}
                />
              </React.Fragment>
            ))}
        </div>
      </div>
    );
  };

  const renderAdminPage = () => {
    return (
      <div className="xl:container mx-auto">
        {/* {console.log(allMovie)} */}
        <div className="w-full flex   ">
          <div className="w-4/6  h-full">{renderMovie()}</div>
          <div className="w-2/6 border m-2 shadow-lg rounded-lg ">
            <p className="px-4 text-lg uppercase font-bold pt-4">Edit Form</p>
            {selectMovie !== null ? renderMovieEditSection() : ""}
          </div>
        </div>
      </div>
    );
  };
  return <div>{renderAdminPage()}</div>;
};

export default AdminPage;
