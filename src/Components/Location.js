import React from "react";

export function Location(props) {
  const { data } = props;
  console.log();
  return (
    <div>
      <p className="name">{data.title}</p>
      <p className="address">{data.add}</p>
      <p className="city-state">{data.city}</p>
      <p className="phone">{data.num}</p>
      <p className="fax">{data.fax}</p>
    </div>
  );
}
