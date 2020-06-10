// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes

  const { post } = props;
  // console.log(posts);
  return (
    <div className="post-border">
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />

      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={post.imageUrl} />
      </div>
      <LikeSection like={post.likes} />
      <CommentSection comments={post.comments} />
    </div>
  );
};

export default Post;
