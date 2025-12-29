import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import { toast } from "react-toastify";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    console.log("📌 Register form data:", credentials);

    try {
      const res = await fetch(`${BASE_URL}/auth/registerUser`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!result.ok) toast(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });

      navigate("/signin");
    } catch (e) {
      toast(e.message);
    }
  };

  return (
    <div className="w-full min-h-screen pt-28 md:pt-32 flex items-center justify-center bg-white px-4">
      <form
        className="w-[400px] max-w-full h-[580px] rounded-xl flex flex-col items-center bg-white shadow-2xl border border-gray-200"
        onSubmit={handleClick}
      >
        <p className="text-purple-600 text-3xl mt-12 mb-8 text-center font-serif">
          Create Account
        </p>

        <input
          placeholder="Name"
          type="text"
          id="name"
          onChange={handleChange}
          className="w-80 my-2 px-3 py-3 rounded-lg bg-gray-50 border"
        />

        <input
          placeholder="E-mail"
          type="email"
          id="email"
          onChange={handleChange}
          className="w-80 my-2 px-3 py-3 rounded-lg bg-gray-50 border"
        />

        <input
          placeholder="Phone number"
          type="text"
          id="phone"
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
          Register
        </button>

        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 underline">
            Signin
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
