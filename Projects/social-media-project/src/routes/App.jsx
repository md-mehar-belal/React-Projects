import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTeb={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
