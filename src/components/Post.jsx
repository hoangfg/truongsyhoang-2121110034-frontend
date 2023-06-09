import React from "react";
import AppUrl from "../Api/AppUrl";
import { Link } from "react-router-dom";

export default function Post(props) {
    const post = props.post;
    // console.log(post)
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);

      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();

      return `${day}/${month}/${year}`;
    };

   
  return (
    <div className="thumbnail">
      <Link to={"/post/" + post.id}>
      <div style={{ height: "250px", objectFit: "cover", overflow: "hidden" }}>
        <img
          src={AppUrl.ImageURL + post.attributes.image.data.attributes.url}
          alt="img"
        />
      </div>
      </Link>
      <div className="caption cntr">
        <Link to={"/post/" + post.id}>
        <p>
          <strong>{post.attributes.postTitle}</strong>
        </p>
        </Link>

        <p>{post.attributes.topic.data.attributes.topicName}</p>
        <p>{formatDate(post.attributes.createdAt)}</p>
      </div>
    </div>
  );
}
