import { useContext } from "react";
import styles from "./createpost.module.css";
import { PostListContext } from "../stores/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);
  return (
    <main>
      <div className={styles["box"]}>
        <form onSubmit={addPost}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              UserId
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              aria-describedby="emailHelp"
              placeholder="user id please..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tilte" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Post title...."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="about" className="form-label">
              Post Body
            </label>
            <textarea
              type="text"
              rows={4}
              className="form-control"
              id="about"
              aria-describedby="emailHelp"
              placeholder="Tell more about it.."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">
              Reactions
            </label>
            <input
              type="text"
              className="form-control"
              id="reactions"
              aria-describedby="emailHelp"
              placeholder="Number of reactions..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              aria-describedby="emailHelp"
              placeholder="Tags"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreatePost;
