import React from "react";
import Role from "../../assets/Role.svg";
import Date from "../../assets/Date.svg";
import Type from "../../assets/Type.svg";
function Item({ item }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: "20px",
      }}
    >
      <img src={item.image} style={{ width: "100%" }} />
      <span style={{ display: "flex", gap: "30px", color: "#9D74D7" }}>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src={Role} style={{ width: "20px" }} />
          <p style={{ fontSize: "18px", margin: 0 }}>{item.role}</p>
        </span>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src={Date} style={{ width: "20px" }} />
          <p style={{ fontSize: "18px", margin: 0 }}>{item.date}</p>
        </span>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src={Type} style={{ width: "20px" }} />
          <p style={{ fontSize: "18px", margin: 0 }}>{item.type}</p>
        </span>
      </span>
      <p
        style={{
          fontSize: "35px",
          textAlign: "left",
          color: "#7E60BF ",
          margin: 0,
        }}
      >
        {item.title}
      </p>
      <p
        style={{
          color: "#9D74D7",
          textAlign: "left",
          fontSize: "16px",
          margin: 0,
        }}
      >
        {item.description}
      </p>
      <span
        style={{
          fontSize: "18px",
          color: "#000000",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Read more
      </span>
    </div>
  );
}

export default Item;
