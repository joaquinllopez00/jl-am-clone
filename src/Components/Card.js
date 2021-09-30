import React from "react";

export function Card(props) {
  const { context } = props;
  return (
    <article className="bp col-lg-4">
      <div className="card">
        <img hieght="667" width="1000" loading="lazy" src={context.imgUrl} alt="Blog" />
        <div className="card-body">
          <header>
            <h1>
              <a href={context.bpLink}>{context.title}</a>
            </h1>
            <small>{context.date}</small>
          </header>
          <p>{context.content}</p>
          <div className="bp-more more">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </article>
  );
}
