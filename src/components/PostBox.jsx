import React from "react";
import Post from './Post';

export default function PostBox(props) {
    const posts = props.posts;
     var myView = posts.map((post) => (
       <li
         key={post.id}
         className="span4"
         style={{ height: "350px", margin: "2px" }}
       >
         <Post post={post} />
       </li>
     ));
  return (
    <div className="well well-small">
      <h3>Our Post </h3>
      <div className="row-fluid">
        <ul className="thumbnails">
          {myView}
        </ul>
      </div>
    </div>
  );
}
