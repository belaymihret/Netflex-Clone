import React from "react";
// import Row from "/src/Components/Rows/Row/Row";
import Row from '../Row/Row'
import requests from "../../../Utils/requests";
function RowList() {
  return (
    <>
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOrginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocummentaries} />
    </>
  );
}

export default RowList;
