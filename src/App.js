import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login, Main, Navbar, Register } from "./components";
import AuthService from "./service/auth.js";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/auth.js";
import { getItem } from "./helpers/persistanse-storage.js";
import ArticleService from "./service/articles.js";
import { getArticlesArticlesSucces } from "./slice/articles.js";
function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();

      dispatch(signUserSuccess(response.user));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("App.js useEffect");
    const token = getItem("token");

    if (token) getUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
