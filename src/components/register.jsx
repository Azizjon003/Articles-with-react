import { Input } from "../ui";
import { icon } from "../contstants/index.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterUserFailure,
  RegisterUserStart,
  RegisterUserSuccess,
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../slice/auth.js";
import AuthService from "../service/auth.js";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const { isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = {
      username,
      email,
      password,
    };
    try {
      const res = await AuthService.userRegister(user);
      console.log(res);
      dispatch(signUserSuccess(res.user));
    } catch (err) {
      console.log(err);
      dispatch(signUserFailure(err.response.data.errors));
    }
  };
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form className="">
          <img className="mb-4" src={icon} alt="" width="100" height="60" />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <Input
            type={"email"}
            placeholder={"example@gmail.com"}
            inputName={"Email Addres"}
            value={email}
            setState={setEmail}
          />

          <Input
            type={"text"}
            placeholder={"username"}
            inputName={"Username"}
            value={username}
            setState={setUserName}
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
            Register
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
