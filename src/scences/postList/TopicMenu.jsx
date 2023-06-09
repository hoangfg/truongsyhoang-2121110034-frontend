import React from "react";
import { Link } from "react-router-dom";

export default function TopicMenu(props) {
  const topics = props.topics;
  const handleFilterByTopic = props.handleFilterByTopic;
  // console.log(handleFilterByTopic);
  var myView = topics.map((topic) => (
    <li key={topic.id}>
      <Link to="/post" onClick={handleFilterByTopic}>
        {topic.attributes.topicName}
      </Link>
    </li>
  ));
  // console.log(topics)
  return (
    <div className="well well-small">
      <nav className="megamenu">
        <ul className="nav nav-list">
          <li>
            <Link to="/post" onClick={handleFilterByTopic}>
              All Topics
            </Link>
          </li>
          {myView}
        </ul>
      </nav>
    </div>
  );
}
