import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";

const Blog = () => {
  const blogs = useLoaderData();
   useEffect(()=> {
      document.title = 'Phudu | Blog'
   },[])
  return (
    <section className="blogs py-20 ">
      <div className="my-container">
        <h2 className="text-dark font-black text-3xl md:text-4xl text-center">
          Blogs
        </h2>
        <p className=" text-center mt-4 max-w-[1000px] mx-auto mb-5">
         Explore our blogs to get the latest updates and information about our
         services and health tips.
        </p>
        {
          blogs.map((blog, i) => (
            <div className="bg-white w-full rounded-lg shadow text-black p-8 mb-8" key={i}>
            <h2 className="text-dark font-black text-xl md:text-2xl">
              {blog.question}
            </h2>
            <p className="mt-4 text-gray-500 text-base md:text-lg">
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
