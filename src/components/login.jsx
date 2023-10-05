import { useEffect, useState } from "react";
import { icon } from "../contstants/index.js";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../slice/auth.js";
import AuthService from "../service/auth.js";
import ValidationError from "./validation-error.js";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.auth);
  useEffect(() => {
    console.log("isLogged", isLogged);
    if (isLogged) navigate("/");
  }, [isLogged]);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = {
      email,
      password,
    };
    try {
      const data = await AuthService.userLogin(user);
      console.log(data);
      dispatch(signUserSuccess(data.user));
      navigate("/");
    } catch (err) {
      dispatch(signUserFailure(err.response.data.errors));
    }
  };
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form className="">
          <img className="mb-4" src={icon} alt="" width="100" height="60" />
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>
          <ValidationError />

          <Input
            type={"text"}
            placeholder={"example@gmail.com"}
            inputName={"Email Addres"}
            value={email}
            setState={setEmail}
          />

          <Input
            type={"password"}
            placeholder={"Password"}
            inputName={"Password"}
            value={password}
            setState={setPassword}
          />

          <div className="form-check text-start my-3"></div>
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            onClick={submitHandler}
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
