import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostListContext } from "../stores/post-list-store";
import Massage from "./wecomeMSG";
import Loading from "./loading";

function PostList() {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching === "true" && <Loading></Loading>}
      {fetching === "false" && postList.length === 0 && <Massage />}
      {fetching === "false" &&
        postList.map((item) => <Post key={item.id} post={item}></Post>)}
    </>
  );
}

export default PostList;
