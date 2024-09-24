import React, { useState, useEffect } from "react";
import axios from '../Utils/axios';
import requests from "../Utils/requests";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let banner = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOrginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    banner();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('http://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button play">play</button>
            <button className="banner_button ">My list</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadeBottom"></div>
      </div>
    </>
  );
};

export default Banner;
