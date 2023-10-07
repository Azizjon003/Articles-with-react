import React, { useEffect } from "react";
import { useParams } from "react-router";
import ArticleService from "../service/articles.js";
import { useDispatch } from "react-redux";
import {
  getArticleStart,
  getArticleSucces,
  getArticlesStart,
} from "../slice/articles.js";

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
  return <div>ArticleDetails</div>;
};

export default ArticleDetails;
