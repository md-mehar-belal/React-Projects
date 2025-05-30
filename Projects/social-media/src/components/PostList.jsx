import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fatching} = useContext(PostListData);
  

  return (
    <>
      {fatching && <LoadingSpinner />}
      {!fatching && postList.length === 0 && <WelcomeMessage />}
      {!fatching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
