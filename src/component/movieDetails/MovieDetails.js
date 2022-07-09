import React from "react";
import "./movieDetails.css";
import { Link, useParams } from "react-router-dom";
import moviesData from "../../data/data";

const MovieDetails = ({ reactionArr }) => {
  let { id } = useParams();
  let arr = moviesData.filter((value, index, array) => {
    return value.id === id;
  });
  console.log("id=", id);
  console.log("arr=", arr);

  let ratings = arr[0].rating;
  let ratingsColor = ratings > 8 ? "text-success" : "text-danger";
  return (
    <div>
      <div className="bg-dark px-3 d-flex align-items-center justify-content-end gap-3 py-2">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="text-white text-end m-0">Home</p>
        </Link>
        <Link to="/movie" style={{ textDecoration: "none" }}>
          <p className="text-white text-end m-0">Movies</p>
        </Link>
      </div>

      <div
        style={{ width: "70vw", height: "70vh", margin: "20px auto" }}
        className="MovieDetails-area pb-5"
      >
        <iframe
          className="movieDetails-trailer w-100 h-100"
          title={arr[0]?.name}
          src={arr[0]?.trailer}
          frameBorder="0"
        ></iframe>
        <div className="d-flex align-items-center justify-content-between px-2">
          <h1>{arr[0]?.name}</h1>

          <strong className={`fs-3 ${ratingsColor} `}>
            ⭐{arr[0]?.rating}
          </strong>
        </div>
        <p>{arr[0]?.summary}</p>
        <div
          style={{ margin: "20px" }}
          className="text-center d-flex align-items-center justify-content-center gap-5"
        >
          <div className="d-flex align-items-center justify-content-center gap-3">
            <p className="m-0">👍</p>
            <strong className="m-0 text-success">
              {reactionArr[0]?.count}
            </strong>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <p className="m-0">👎</p>
            <strong className="m-0 text-danger">{reactionArr[1]?.count}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
