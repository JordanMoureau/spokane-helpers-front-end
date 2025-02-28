import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPost({ id }) {
  // Accept `id` as a prop
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Post ID received in EditPost:", id); // Debugging output
    if (!id) return;

    fetch(
      `https://spokane-helpers-3895ae38ae4d.herokuapp.com/api/v1/news/${id}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch post data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched post data:", data);
        setFormData({
          title: data.title || "",
          description: data.description || "",
          image_url: data.image_url || "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://spokane-helpers-3895ae38ae4d.herokuapp.com/api/v1/news/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("News post updated!");
        navigate(0);
      } else {
        alert("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating news post:", error);
    }
  };

  return (
    <>
      {loading ? (
        <p className="text-gray-500">Loading post data...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update News
          </button>
        </form>
      )}
    </>
  );
}
