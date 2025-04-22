import React from "react";
import { Link, useLoaderData } from "react-router";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <section className="blogs py-20 ">
      <div className="my-container">
        {
          blogs.map((blog, i) => (
            <div className="bg-white w-full rounded-lg shadow text-black p-8 mb-8" key={i}>
            <h2 className="text-dark font-black text-2xl">
              {blog.question}
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              {blog.answer}
            </p>
          </div>
          ))
        }

      </div>
    </section>
  );
};

export default Blog;
