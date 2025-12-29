import React, { useState } from "react";
import { BASE_URL, token } from "../../utils/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    topic: undefined,
    title: undefined,
    content: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleTopicChange = (e) => {
    setBlog((prev) => ({ ...prev, topic: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("blog:", blog);
    try {
      const res = await fetch(`${BASE_URL}/blog/createNewBlog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blog),
      });

      const result = await res.json();
      if (!result.ok) {
      }
      toast(result.message);
      navigate("/");
    } catch (error) {
      toast(e.message);
    }
  };

  return (
    <div className="w-full min-h-screen mt-24 md:mt-28 px-4 flex flex-col items-center bg-gray-50">
      <h1 className="text-4xl font-semibold italic text-center mb-6">
        Create Blog
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">

          <div>
            <label htmlFor="topic" className="block text-lg font-medium mb-2">
              Topic
            </label>
            <select
              id="topic"
              aria-label="Default select example"
              onChange={handleTopicChange}
              defaultValue=""
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select a topic
              </option>
              <option value="JavaScript">JavaScript</option>
              <option value="ReactJS">ReactJS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="expressjs">ExpressJS</option>
              <option value="ExpressJS">CSS</option>
              <option value="HTML">HTML</option>
            </select>
          </div>

          <div>
            <label htmlFor="title" className="block text-lg font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Title of Blog"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-lg font-medium mb-2">
              Blog Content
            </label>
            <textarea
              id="content"
              rows="9"
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
