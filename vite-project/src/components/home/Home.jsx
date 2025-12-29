import React from "react";
import { BASE_URL } from "../../utils/config.js";
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading.jsx";

const Home = () => {
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(`${BASE_URL}/blog/allBlogs`);

  const truncateContent = (content, limit) => {
    const words = content.split(" ");
    const truncated = words.slice(0, limit).join(" ");
    return truncated + (words.length > limit ? " ...!" : "");
  };

  return (
    <>
      {loading && <Loading className=" " />}
      {error && <h4>{error}</h4>}

      {!loading && !error && (
        <div className="w-full px-4 md:px-8 lg:px-14 py-6 bg-gray-50 mt-24 md:mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {blogData?.map((blogData) => (
              <div className="mt-6" key={blogData.id}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">

                  <img
                    src={`https://source.unsplash.com/random/?${blogData.topic}`}
                    alt=""
                    className="w-full h-56 object-cover rounded-t-xl"
                  />

                  <p className="mt-3 mx-auto text-center text-white bg-orange-400 rounded-full px-4 py-1 font-[cursive] text-lg">
                    Author: {blogData.user.name}
                  </p>

                  <span className="flex items-center justify-between mt-3">
                    <h3 className="font-[cursive] text-2xl font-semibold">
                      {truncateContent(blogData.title, 2)}
                    </h3>

                    <h5 className="flex items-center justify-center text-white bg-green-600 rounded-full px-4 py-1 font-[cursive] text-lg">
                      Topic: {blogData.topic}
                    </h5>
                  </span>

                  <p className="mt-3 text-gray-700">
                    {truncateContent(blogData.content, 30)}
                  </p>

                  <div className="text-center mt-4">
                    <p className="mx-auto text-center bg-lime-400 rounded-full px-4 py-2 font-[cursive]">
                      Published date:{" "}
                      {new Date(blogData.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>

                  <span className="flex justify-between mt-4">
                    <Link to={blogData._id}>
                      <button className="px-5 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition font-semibold shadow">
                        Read Full
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
