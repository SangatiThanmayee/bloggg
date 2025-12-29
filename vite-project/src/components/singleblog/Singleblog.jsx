import React from "react";
import { BASE_URL } from "../../utils/config";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();

  const {
    data: blog,
    loading,
    error,
  } = useFetch(`${BASE_URL}/blog/singleblog/${id}`);
  console.log("blog :>> ", blog);

  return (
    <>
      <div className="mt-24 md:mt-28 flex justify-center">
        <img
          src={`https://source.unsplash.com/random/?${blog.topic}`}
          alt=""
          className="w-4/5 h-[75vh] object-cover rounded-2xl"
        />
      </div>

      <div className="mt-6 flex flex-col items-center px-4 md:px-0">
        <h4 className="flex items-center justify-center text-white bg-orange-400 rounded-full px-6 py-3 text-3xl md:text-4xl font-[cursive] text-center">
          {blog.title}
        </h4>

        <h6 className="mt-4 text-center text-black px-4 py-2 rounded-full bg-pink-200 text-base md:text-lg w-60">
          Published on:{" "}
          {new Date(blog.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </h6>

        <p className="mt-4 max-w-4xl text-center md:text-left italic text-lg md:text-xl leading-relaxed">
          {blog.content}
        </p>
      </div>
    </>
  );
};

export default SingleBlog;
