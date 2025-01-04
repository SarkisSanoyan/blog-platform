import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBlog = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const postBlog = async ({ title, description }) => {
    try {
      const response = await axios.post("http://localhost:8080/add", {
        title,
        description,
      });
      return response.data;
    } catch (error) {
      console.error("Error posting blog:", error.response?.data || error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (titleRef.current && descriptionRef.current) {
      const title = titleRef.current.value.trim();
      const description = descriptionRef.current.value.trim();

      if (!title || !description) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        console.log("Sending request...");
        await postBlog({ title, description });
        console.log("Blog posted successfully");
        navigate("/");
      } catch {
        alert("Failed to post blog. Check the console for details.");
      }
    }
  };

  return (
    <>
      <div className="w-full m-auto flex bg-gradient-animation h-screen items-center justify-center">
        <div className="md:w-2/4 sm:w-3/4 flex flex-col justify-center items-center m-auto p-4 my-5 rounded-lg bg-slate-900 drop-shadow-xl">
          <h1 className="text-slate-100 text-center text-2xl font-extrabold">
            Add a Magnificent Blog
          </h1>

          <form onSubmit={handleSubmit} className="w-full">
            <input
              ref={titleRef}
              placeholder="Enter title"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 bg-slate-100"
            />

            <textarea
              ref={descriptionRef}
              placeholder="Enter description"
              className="rounded-md px-4 py-2 w-full my-2 max-h-[50vh] overflow-y-auto bg-slate-100"
            ></textarea>

            <button
              type="submit"
              className="font-semibold text-lg px-4 py-2 w-full shadow-xl bg-slate-300 rounded-lg m-auto hover:bg-green-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
