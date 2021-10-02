import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export function UserReview(props) {
  const { r } = props;

  const handleStars = (stars) => {
    let arr = new Array(stars).fill("star");
    console.log(arr);
    return arr;
  };
  return (
    <div className="r-container">
      <div className="r-header">
        <div className="r-row-pic">
          <img src={r.pPicUrl} alt="Review User"></img>
        </div>
        <div className="r-row-ut">
          <p>{r.name}</p>
          <p>{r.time}</p>
        </div>
      </div>
      <div className="r-stars">
        {handleStars(r.stars).map((el) => {
          return <FontAwesomeIcon icon={faStar} />;
        })}
      </div>
      <div className="r-text">
        <p>{r.review}</p>
      </div>
    </div>
  );
}
