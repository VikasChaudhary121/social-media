import React, { createContext, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  fetching: "false",
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "Delete_Post") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "Add_Initial_Posts") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const navigate = useNavigate();
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState("false");

  const addPost = (event) => {
    event.preventDefault();
    console.log("event is :", event);
    let userId = event.target[0].value;
    let postTitle = event.target[1].value;
    let postBody = event.target[2].value;
    let reactions = event.target[3].value;
    let postTags = event.target[4].value.split(" ");
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    event.target[3].value = "";
    event.target[4].value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: postTags,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    navigate();
    dispatchPostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: postTags,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "Add_Initial_Posts",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "Delete_Post",
      payload: { postId: postId },
    });
  };

  useEffect(() => {
    setFetching("true");
    fetch("https://dummyjson.com/posts")
      .then((result) => result.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching("false");
      });
  }, []);

  return (
    <PostListContext.Provider
      value={{
        postList,
        fetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListProvider };
