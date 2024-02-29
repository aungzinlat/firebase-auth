import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponents, FormComponents } from "../components";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { AuthContext } from "../context/AuthContext";
import { AuthContext } from "../context/AuthContext";

const SignUpPage = () => {
  const nav = useNavigate();
  const createUser = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      if (formData.password !== formData.password_confirmation) {
        return alert("password do not match");
      }
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then((userCredential) => {
        const user = userCredential.user;

        if (user) {
          nav("/login");
        } else {
          console.log("sign up error");
        }
      });
    } catch (error) {
      console.log(error.message);
      return alert("Failed to create an account");
    }
  };

  return (
    <div className="center h-screen w-full">
      <div className=" bg-gray-100 rounded shadow-md w-1/3 h-auto p-6 ">
        <h1 className=" text-3xl text-center font-bold mb-8">
          Register Your Account
        </h1>
        <form className=" space-y-6" onSubmit={handleSubmit}>
          <FormComponents
            value={formData.name}
            onChange={handleChange}
            type={"name"}
            name={"name"}
            placeholder={"Name"}
          >
            Name
          </FormComponents>
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
          <FormComponents
            value={formData.password_confirmation}
            onChange={handleChange}
            type={"password"}
            name={"password_confirmation"}
            placeholder={"Confirm Password"}
          >
            Confirm Password
          </FormComponents>
          <ButtonComponents type={"submit"}>Register</ButtonComponents>
        </form>
        <p className=" mt-6 text-center">
          Already have an Account?
          <span
            onClick={() => nav("/login")}
            className=" ml-2 text-blue-500 font-sans font-bold cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
