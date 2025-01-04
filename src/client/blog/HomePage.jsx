import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fetchPosts = async () => {
  const res = await fetch("http://localhost:8080/");
  const data = await res.json();
  return data;
};

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="p-4 m-auto mb-5 lg:w-full md:w-2/4 sm:w-3/4 drop-shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-slate-900">
          Blog Platform App
        </h1>
      </div>

      <div className="my-5">
        <Link
          to="/add"
          className="p-4 m-auto text-xl font-semibold text-center text-slate-100 rounded-md cursor-pointer md:w-1/6 sm:w-2/4 bg-slate-900 hover:bg-green-500"
        >
          Add New Blog &#128394;
        </Link>
      </div>

      <div className="flex flex-col items-center w-full">
        {posts.map((post) => (
          <div
            key={post._id}
            className="flex flex-col w-3/4 p-4 mx-2 my-2 transition duration-300 rounded-md shadow-lg cursor-pointer bg-slate-200 hover:shadow-2xl"
          >
            <div className="relative flex items-center my-1">
              <h2 className="font-semibold text-slate-900">{post.title}</h2>
              <Link
                to={`/edit/${post._id}`}
                className="px-4 py-1 ml-auto text-xl font-semibold text-center transition duration-300 rounded-md bg-slate-900 text-slate-100 hover:bg-red-500"
              >
                Edit
              </Link>
            </div>

            {post.date && (
              <div className="mb-2 text-sm font-medium text-slate-700">
                {new Date(post.date).toDateString()}
              </div>
            )}

            <div className="relative group">
              <p className="truncate text-slate-900">
                {post.description.length > 100
                  ? `${post.description.slice(0, 100)} ...`
                  : post.description}
              </p>
              <div className="absolute left-0 z-10 p-4 transition duration-1000 bg-white rounded-md shadow-xl opacity-0 w-[90%] shadow-slate-700 top-full text-slate-900 group-hover:opacity-100 group-hover:shadow-slate-950">
                {post.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
