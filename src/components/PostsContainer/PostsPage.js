//Complete the necessary code in this file

import React, { useState } from "react";
import "./Posts.css";
import Post from "./Post";
import dummyData from "../../dummy-data";

const PostsPage = (props) => {
  // set up state for your data
  const [data] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}

      {data.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default PostsPage;
