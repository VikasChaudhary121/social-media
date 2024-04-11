import { useContext, useState } from "react";
// import image from "../assets/image.jpg";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../stores/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostListContext);

  return (
    <div key={post.id} className="card card-details">
      {/* <img src={image} className="card-img-top" /> */}
      <h3 className="userId">UserId : {post.userId}</h3>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
      <div className="card-foot">
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary tags">{tag}</span>
        ))}
      </div>
      <button
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ width: "3rem", height: "1.8rem" }}
        onClick={() => deletePost(post.id)}
      >
        <MdDelete />
      </button>
      <div className="alert alert-success" role="alert">
        This post has been reacted by {post.reactions} peoples
      </div>
    </div>
  );
}

export default Post;
