import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { toast } from "react-toastify";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      console.log("📌 Login API response:", result);

      if (!result.ok) toast(result.message);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data,
        token: result.token,
        role: result.role,
      });

      toast(result.message);

      navigate("/");
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE", payload: e.message });
      toast.error(e.message);
    }
  };

  return (
    <div className="w-full min-h-screen pt-28 md:pt-32 flex items-center justify-center bg-white px-4">
      <form
        className="w-[400px] max-w-full h-[580px] rounded-xl flex flex-col items-center bg-white shadow-2xl border border-gray-200"
        onSubmit={handleClick}
      >
        <p className="text-purple-600 text-3xl mt-12 mb-8 text-center font-serif">
          Login
        </p>

        <input
          placeholder="E-mail"
          type="email"
          id="email"
          onChange={handleChange}
          className="w-80 my-2 px-3 py-3 rounded-lg bg-gray-50 border"
        />

        <input
          placeholder="Password"
          type="password"
          id="password"
          onChange={handleChange}
          className="w-80 my-2 px-3 py-3 rounded-lg bg-gray-50 border"
        />

        <button
          type="submit"
          className="mt-8 w-80 h-12 rounded-lg bg-purple-600 text-white"
        >
          Login
        </button>

        <p className="mt-5 text-gray-600">
          Don't have an account ?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
