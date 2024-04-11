import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import "./App.css";
import CreatePost from "./components/createpost";
import PostList from "./components/postlist";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { PostListProvider } from "./stores/post-list-store";

function App() {
  const [selected, setselected] = useState("Home");
  const handleButtonClick = (event) => {
    setselected(event.target.innerText);
  };

  return (
    <PostListProvider>
      <div className="main-cont">
        <div className="sidebar">
          <Sidebar
            selectedKey={selected}
            onSideClick={handleButtonClick}
          ></Sidebar>
        </div>
        <div className="head-foot">
          <Header></Header>
          {/* {selected === "Home" ? (
            <div id="postlist">
              <PostList></PostList>
            </div>
          ) : (
            <CreatePost></CreatePost>
          )} */}
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
