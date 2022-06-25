import { useState } from "react";

const Item = ({ img, title }) => {
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
    <div className="my-5 py-5">
      <img className="w-100 h-100" src={img} alt="vj" />
      <h2 className="text-capitalize text-center">{title}</h2>
      <div className="text-center d-flex align-items-center justify-content-center gap-5">
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
