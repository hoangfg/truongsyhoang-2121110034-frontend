import React, { useEffect, useState } from "react";

import PostBox from "../../components/PostBox";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import { topicApi } from "../../Api/topicApi";
import { postApi } from "../../Api/postApi";
import Paginate from "../../components/Paginate";
import TopicMenu from "./TopicMenu";

export default function PostList() {
  var [topics, setTopics] = useState({});
  var [posts, setPosts] = useState({});
  var [loading, setLoading] = useState(true);
  var [totalPage, setTotalPage] = useState(1);
  var [topic, setTopic] = useState(null);

  const handleFilterByTopic = (e) => {
    if (e.target.innerText === "All Topics") {
      setTopic(null);
    } else {
      setTopic(e.target.innerText);
    }
  };
  var myView1 =
    loading === true ? (
      <Loading />
    ) : (
      <TopicMenu topics={topics} handleFilterByTopic={handleFilterByTopic} />
    );
  var myView2 = loading === true ? <Loading /> : <PostBox posts={posts} />;
  var { pageNum } = useParams();
  var params = {
    populate: "*",
    pagination: {
      pageSize: 12,
      page: pageNum ? pageNum : 1,
    },
    sort: {
      id: "desc",
    },
    filters: {
      topic: {
        topicName: {
          $eq: topic ? topic : null,
        },
      },
    },
  };
  console.log(params);
  useEffect(() => {
    const fetchData = async () => {
      var response1 = await topicApi.getAll();
      var response2 = await postApi.getAll(params);

      // console.log("r1: ", response1)
      // console.log("r2: ", response2);
      setTopics(response1.data.data);
      setPosts(response2.data.data);
      // console.log("r4444: ", products)
      setTotalPage(response2.data.meta.pagination.pageCount);
      setLoading(false);
    };
    fetchData();
  }, [pageNum, topic]);
  return (
    <div>
      <div className="row">
        <div id="sidebar" className="span3">
          {myView1}
        </div>
        <div className="span9">{myView2}</div>
        {totalPage > 1 && (
          <Paginate
            totalPage={totalPage}
            currentPage={pageNum ? pageNum : 1}
            basePath="http://localhost:3000/product/page/"
          />
        )}
      </div>
    </div>
  );
}
