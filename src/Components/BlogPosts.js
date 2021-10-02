import React, { useState } from "react";
import { Card } from "./Card";

const blogData = {
  b1: {
    imgUrl: "https://www.approvedmortgage.com/wp-content/uploads/2021/09/shutterstock_1707123256.jpg",
    title: "Are you interested in universal design?",
    bpLink: "https://www.approvedmortgage.com/are-you-interested-in-universal-design/",
    date: "Sep 15, 2021",
    content:
      "Whether you’re buying a new home you’d like to stay in for the long haul or updating the home you already have and love, universal design can ensure the property is accessible to all —…",
  },
  b2: {
    imgUrl: "https://www.approvedmortgage.com/wp-content/uploads/2021/08/shutterstock_1686730765.jpg",
    title: "How to Boost Your Homebuying Savings",
    bpLink: "https://www.approvedmortgage.com/how-to-boost-your-homebuying-savings/",
    date: "Aug 24, 2021",
    content:
      "For many people, the upfront cost of buying a home feels like the biggest hurdle, and that’s understandable. After all, having a solid down payment is important. Not only can it lower your monthly and…",
  },
  b3: {
    imgUrl: "https://www.approvedmortgage.com/wp-content/uploads/2021/08/shutterstock_1724096326.jpg",
    title: "5 Things to Know About Today's Market",
    bpLink: "https://www.approvedmortgage.com/5-things-to-know-about-todays-market/",
    date: "Aug 13, 2021",
    content:
      "With home prices skyrocketing, there’s been a lot of speculation lately. Are we in a bubble? Will the housing market crash? Will home values come plummeting to the ground again? Fortunately, those concerns are largely…",
  },
};

export function BlogPosts() {
  const [bPosts] = useState(blogData);

  return (
    <div className="bp container-fluid">
      <div className="container">
        <h3>Check out the latest.</h3>
        <p>
          Looking for homebuying tips? What about the latest news in the housing sector? We have you covered! Check out
          our latest blog posts to learn more
        </p>
        <div className="card-group">
          {Object.keys(bPosts).map((key) => {
            return <Card context={bPosts[key]} key={key} />;
          })}
        </div>
        <div className="bp-more more bp-btn">
          <button>See more from our blog</button>
        </div>
      </div>
    </div>
  );
}
