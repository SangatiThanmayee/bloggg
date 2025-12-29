import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL, token } from "../../utils/config";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const EditUserInfo = () => {
  const { id } = useParams();

  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "put",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      logout();
      navigate("/");
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen mt-24 md:mt-28 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <div className="flex justify-center items-center w-full">
        <form
          className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4"
          onSubmit={submitHandler}
        >
          <p className="text-3xl font-bold text-gray-800 text-center mb-2">
            Update profile
          </p>

          <input
            placeholder="name"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            placeholder="E-mail"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <input
            placeholder="Phone number"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            type="text"
            pattern="[0-9]*"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />

          <button
            className="w-full mt-4 py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition"
            type="submit"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserInfo;
