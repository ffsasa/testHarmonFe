import React from "react";

function RecentPost({ post }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "start",
        gap: "10px",
        margin: "10px 0",
      }}
    >
      <img src={post.image} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "start",
        }}
      >
        <p
          style={{
            color: "#7E60BF",
            fontSize: "16px",
            margin: 0,
          }}
        >
          {post.title}
        </p>
        <p
          style={{
            color: "#9D74D7",
            fontSize: "14px",
            fontWeight: "lighter",
            margin: 0,
          }}
        >
          {post.date}
        </p>
      </div>
    </div>
  );
}

export default RecentPost;
