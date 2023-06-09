import React, { useEffect, useState } from "react";


import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";

import { postApi } from "../../Api/postApi";
import AppUrl from "../../Api/AppUrl";

export default function PostDetail() {
  var { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };
  var myView =
    loading === true ? (
      <Loading />
    ) : (
      <div>
        <h3>{post.attributes.postTitle}</h3>
        
        <div>
          <span>{formatDate(post.attributes.createdAt)}</span>
        </div>
        <hr className="soft" />
        <div
          style={{ width: '100%' }}
        >
          <img
            src={AppUrl.ImageURL + post.attributes.image.data.attributes.url}
            alt="img"
            style={{ margin: 'auto', width: '50%', display: 'block' }}
          />
        </div>
        <hr className="soft" />
        <p>{post.attributes.description}</p>
      </div>
    );
 
  var params = {
    populate: "*",
   
  };
  console.log(params);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await postApi.get(id, params);
      console.log(response.data.data);
      setPost(response.data.data);
      setLoading(false);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="span12">{myView}</div>
      </div>
    </div>
  );
}
