import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoadingMessage("Fetching blog details...");
      try {
        const res = await axios.get(`http://localhost:8080/${id}`);
        setPost(res.data.post);
        setLoadingMessage(null);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoadingMessage("Error fetching blog details.");
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (titleRef.current && descriptionRef.current) {
      setLoadingMessage("Updating blog...");
      try {
        await axios.put(`http://localhost:8080/edit/${id}`, {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        });
        setLoadingMessage(null);
        // alert("Blog updated successfully.");
        navigate("/");
      } catch (error) {
        console.error("Error updating blog:", error);
        setLoadingMessage("Error updating blog.");
      }
    }
  };

  const handleDelete = async () => {
    setLoadingMessage("Deleting blog...");
    try {
      await axios.delete(`http://localhost:8080/delete/${id}`);
      setLoadingMessage(null);
      // alert("Blog deleted successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
      setLoadingMessage("Error deleting blog.");
    }
  };

  if (loadingMessage) {
    return <div className="loading-message">{loadingMessage}</div>;
  }

  return (
    <div className="flex items-center justify-center w-full h-screen m-auto bg-gradient-animation">
      <div className="flex flex-col items-center justify-center p-4 m-auto my-5 rounded-lg md:w-2/4 sm:w-3/4 bg-slate-900 drop-shadow-xl">
        <h1 className="text-2xl font-extrabold text-center text-slate-100">
          Edit a Magnificent Blog
        </h1>

        {post ? (
          <form onSubmit={handleSubmit} className="w-full">
            <input
              ref={titleRef}
              placeholder="Enter Title"
              type="text"
              className="w-full px-4 py-2 my-2 rounded-md bg-slate-100"
              defaultValue={post.title}
            />

            <textarea
              ref={descriptionRef}
              placeholder="Enter Description"
              className="rounded-md px-4 py-2 w-full my-2 max-h-[50vh] overflow-y-auto bg-slate-100"
              defaultValue={post.description}
            ></textarea>

            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 font-semibold rounded-lg shadow-xl bg-slate-300 hover:bg-green-500"
              >
                Update
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 font-semibold bg-red-500 rounded-lg shadow-xl hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </form>
        ) : (
          <p>Loading post details...</p>
        )}
      </div>
    </div>
  );
};

export default EditBlog;
