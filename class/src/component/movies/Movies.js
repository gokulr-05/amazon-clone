import React from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <div style={{ textAlign: "end", backgroundColor: "black" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            margin: "100px",
            color: "white",
          }}
        >
          Home
        </Link>
      </div>
      <div className="p-5">
        <div className="text-center">
          <button
            onClick={() => {
              setShowForm(true);
            }}
            className="text-capitalize btn btn-primary"
          >
            add item
          </button>
        </div>
        {showForm && (
          <MovieForm
            addMovieHandler={addMovieHandler}
            setShowForm={setShowForm}
          />
        )}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ marginBottom: "50px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "30%",
              margin: "50px auto",
              color: "white",
            }}
          >
            {movies.map((val, index) => {
              return (
                <Item
                  key={index}
                  ratings={val.rating}
                  summary={val.summary}
                  img={val.poster}
                  title={val.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
