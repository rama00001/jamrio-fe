import React, { useState, useEffect } from "react";
import PostDataService from "../services/PostDataService";
import { Link } from "react-router-dom";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievePosts();
  }, []);

 

  const retrievePosts = () => {
    PostDataService.getAll()
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePosts();
    setCurrentPosts(null);
    setCurrentIndex(-1);
  };

  const setActivePosts = (post, index) => {
    setCurrentPosts(post);
    setCurrentIndex(index);
  };

 
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>posts List</h4>

        <ul className="list-group">
          {posts &&
            posts.map((post, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePosts(post, index)}
                key={index}
              >
                {post.title}
              </li>
            ))}
        </ul>

      
      </div>
      <div className="col-md-6">
        {currentPosts ? (
          <div>
            <h4>Post</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentPosts.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentPosts.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentPosts.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/posts/" + currentPosts.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsList;
