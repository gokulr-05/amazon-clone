import { useState } from "react";

const Item = ({ img, title, summary, ratings }) => {
  let [likes, setLikes] = useState(0);
  let [dislikes, setDislikes] = useState(0);
  let likeHandler = (e) => {
    e.preventDefault();
    setLikes((prev) => {
      return prev + 1;
    });
  };

  let dislikeHandler = (e) => {
    e.preventDefault();
    setDislikes((prev) => {
      return prev + 1;
    });
  };
  return (
    <div style={{ background: "black", width: "100%" }} className="my-5 py-5">
      <div className="" style={{ width: "100%", margin: "auto" }}>
        <img
          className=" "
          style={{ height: "100%", width: "100%" }}
          src={img}
          alt="vj"
        />
      </div>
      <h2 className="text-capitalize text-center">{title}</h2>
      <p className="text-capitalize text-center">⭐{ratings}</p>
      <div className="w-100">
        <p
          style={{
            width: "50%",
            margin: "auto",
            textJustify: "inter-word",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {summary}
        </p>
      </div>
      <div
        style={{ margin: "20px" }}
        className="text-center d-flex align-items-center justify-content-center gap-5"
      >
        <div className="d-flex align-items-center justify-content-center gap-3">
          <button onClick={likeHandler}>👍</button>
          <p className="m-0">{likes}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <button onClick={dislikeHandler}>👎</button>
          <p className="m-0">{dislikes}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
