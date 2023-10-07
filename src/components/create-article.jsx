import { useEffect, useState } from "react";
import Input from "../ui/input.jsx";
import { TextArea } from "../ui/text-area.jsx";
import ArticleService from "../service/articles.js";
import { useDispatch, useSelector } from "react-redux";
import {
  postArticleError,
  postArticleStart,
  postArticleSucces,
} from "../slice/articles.js";
import { useNavigate } from "react-router";

export const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.article);
  const { isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogged) navigate("/");
  }, [isLogged]);
  const formSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      body: body,
    };

    dispatch(postArticleStart());
    try {
      await ArticleService.createArticle(data);

      dispatch(postArticleSucces());
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch(postArticleError(err));
    }
  };
  return (
    <div className="text-center">
      <h1 className="fs-2">Create Article</h1>
      <div className="w-75 mx-auto ">
        <form className="d-flex flex-column gap-4" onSubmit={formSubmit}>
          <Input
            type={"text"}
            placeholder={"Maqola nomini kiriting"}
            inputName={"Maqola nomini kiriting"}
            value={title}
            setState={setTitle}
          />
          <TextArea
            placeholder={"Maqola uchun ta'rif kiriting"}
            inputName={"Maqola uchun ta'rif kiriting"}
            value={description}
            setState={setDescription}
          />
          <TextArea
            placeholder={"Maqola matnini kiriting"}
            inputName={"Maqola matnini kiriting"}
            value={body}
            setState={setBody}
            height="300px"
          />
          <button
            className="w-100 btn btn-lg btn-primary mt-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading ..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};
