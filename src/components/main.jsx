import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticlesArticlesSucces,
  getArticlesStart,
} from "../slice/articles.js";
import ArticleService from "../service/articles.js";
import Loader from "../ui/loader.jsx";

function Main() {
  const dispatch = useDispatch();
  const getArticles = async () => {
    try {
      dispatch(getArticlesStart());
      console.log("getArticles");
      const response = await ArticleService.getArticles();
      dispatch(getArticlesArticlesSucces(response.articles));
    } catch (err) {
      console.log(err);
    }
  };
  const { articles, isLoading } = useSelector((state) => state.article);
  useEffect(() => {
    getArticles();
  }, []);
  console.log(articles);

  return (
    <div className="container">
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                    <small className="text-body-secondary fw-bold">
                      {item.author.username}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
