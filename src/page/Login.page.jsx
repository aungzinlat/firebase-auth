import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponents, FormComponents } from "../components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../fireBase";

const LoginPage = () => {
  const nav = useNavigate();
  const Login = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checked: false,
  });

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, formData.email, formData.password).then(
        (userCredential) => {
          const user = userCredential.user;
          if (user) {
            nav("/home");
          }
          return user;
        }
      );
    } catch (error) {
      console.log(error.message);
      return alert("Failed to create an account cuz" + error.message);
    }
  };

  return (
    <div className="center h-screen w-full">
      <div className=" bg-gray-100 rounded shadow-lg w-1/3 h-auto px-6 py-16">
        <h1 className=" text-3xl text-center font-bold mb-8">
          Login To Your Account
        </h1>
        <form className=" space-y-6" onSubmit={handleSubmit}>
          <FormComponents
            value={formData.email}
            onChange={handleChange}
            type={"email"}
            name={"email"}
            placeholder={"Email"}
          >
            Email
          </FormComponents>
          <FormComponents
            value={formData.password}
            onChange={handleChange}
            type={"password"}
            name={"password"}
            placeholder={"Password"}
          >
            Password
          </FormComponents>

          <ButtonComponents type={"submit"}>Login</ButtonComponents>
        </form>
        <p className=" mt-6 text-center">
          Don't have an Account?
          <span
            onClick={() => nav("/")}
            className=" ml-2 text-blue-500 font-sans font-bold cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
