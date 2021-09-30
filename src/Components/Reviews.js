import React, { useEffect, useState } from "react";
import { UserReview } from "./UserReview";

const userReviews = {
  r1: {
    pPicUrl:
      "https://lh3.googleusercontent.com/a/AATXAJyQ-1Vn1_tKo8tFcOfb7SFZxTPNqm7mVqpY7yVv=s120-c-c0x00000000-cc-rp-mo-s56-br100",
    name: "Billi B.",
    time: "7 days ago",
    stars: 5,
    review:
      "Having just gone through the new mortgage process, we could not have had a better experience than we had with Carrie Johnston! Carrie welcomed us into her office, used our time efficiently and was able to make this a smooth process. Carrie went one step further and attended our closing to ensure all went well. Not meany can say the person who arranged their mortgage would go to this effort!, Thank you, Carrie Johnston! We will recommend you to anyone looking for superior service!",
  },
  r2: {
    pPicUrl:
      "https://lh3.googleusercontent.com/a/AATXAJyAPVjWjvi8pUZA4oupdTJRibgqT6afmvI7fXkn=s120-c-c0x00000000-cc-rp-mo-s56-br100",
    name: "David B.",
    time: "7 days ago",
    stars: 5,
    review:
      "Great company, easy to work with. Helped us every step of the way. Great people, too. Thanks Mike Grizzle!",
  },
  r3: {
    pPicUrl:
      "https://lh3.googleusercontent.com/a/AATXAJxoVfgP-5IBDLyc_uFwf92Ob1nLzpOOnK_grc0Q=s120-c-c0x00000000-cc-rp-mo-s56-br100",
    name: "bruce P.",
    time: "8 days ago",
    stars: 5,
    review:
      "I am a single father raising my Young sons by myself.Over the years I have climbed out of poverty and struggle.I have accomplished things I never thought I could but its by the grace of GOD and wonderful people that have made my dreams come true such as Mr Mike Grizzle for making this chapter of my life even better with His knowledge and Skills of the mortgage industry..Thank you Mike very very much for all of your help I felt this experience was so pleasant and you took the worry and anxiety out of the whole process..I was in very good hands and I would recommend your services to anybody that is purchasing a house or refinancing an existing home....Thank you once again Mr. Mike Grizzle.forever customer .Bruce W Pettis",
  },
  r4: {
    pPicUrl:
      "https://lh3.googleusercontent.com/a/AATXAJxoVfgP-5IBDLyc_uFwf92Ob1nLzpOOnK_grc0Q=s120-c-c0x00000000-cc-rp-mo-s56-br100",
    name: "Charlie I.",
    time: "8 days ago",
    stars: 4,
    review: "This company has helped me in my journey so much, I would be completely lost without them.",
  },
  r5: {
    pPicUrl:
      "https://lh3.googleusercontent.com/a/AATXAJyAPVjWjvi8pUZA4oupdTJRibgqT6afmvI7fXkn=s120-c-c0x00000000-cc-rp-mo-s56-br100",
    name: "Jakob S.",
    time: "9 days ago",
    stars: 5,
    review: "Great company, easy to work with. Helped us a lot",
  },
  r6: {
    pPicUrl:
      "https://lh3.googleusercontent.com/a/AATXAJyQ-1Vn1_tKo8tFcOfb7SFZxTPNqm7mVqpY7yVv=s120-c-c0x00000000-cc-rp-mo-s56-br100",
    name: "Joaquin L.",
    time: "9 days ago",
    stars: 5,
    review:
      "Having just gone through the new mortgage process, we could not have had a better experience than we had with Carrie Johnston! Carrie welcomed us into her office, used our time efficiently and was able to make this a smooth process. Carrie went one step further and attended our closing to ensure all went well. Not meany can say the person who arranged their mortgage would go to this effort!, Thank you, Carrie Johnston! We will recommend you to anyone looking for superior service!",
  },
};

export function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [rCount, setRCount] = useState(3);
  useEffect(() => {
    setReviews(userReviews);
  }, [reviews]);

  return (
    <div className="reviews containter-fluid">
      <div className="container">
        <div className="col content">
          <h3>We have raving customers.</h3>
          <p>
            Our customers is what makes our business successful. We strive to provide a hassle free, stress free
            mortgage experience for each and every customer. See the stories that some of our customer’s have shared
            with us.
          </p>
          <div className="ap-reviews-container">
            {reviews &&
              Object.keys(reviews)
                .slice(0, rCount)
                .map((key) => {
                  return <UserReview r={reviews[key]} key={key} />;
                })}
          </div>
          <div className="ap-reviews-more">
            <button
              onClick={() => {
                setRCount(rCount + 3);
              }}
            >
              Next Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
