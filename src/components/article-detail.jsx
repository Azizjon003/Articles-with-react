import React, { useEffect } from "react";
import { useParams } from "react-router";
import ArticleService from "../service/articles.js";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getArticleStart, getArticleSucces } from "../slice/articles.js";
import Loader from "../ui/loader.jsx";

const ArticleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getArticleDetails = async () => {
    try {
      dispatch(getArticleStart());
      const response = await ArticleService.getOneArticles(id);
      console.log(response);
      dispatch(getArticleSucces(response.article));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getArticleDetails();
  }, [id]);
  const { articleDetail, isLoading } = useSelector((state) => state.article);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{articleDetail?.title}</h1>
            <p className="col-md-8 fs-4">{articleDetail?.description}</p>
            <div className="d-flex gap-3">
              <p className="text-muted">
                <span className="fw-300">Created At</span>{" "}
                {moment(articleDetail?.createdAt).format("DD MMM, YYYY")}
              </p>
              {/* <p>{moment(articleDetail?.updatedAt).format("DD MMM, YYYY")}</p> */}
            </div>
            <div className="">{articleDetail?.body}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
