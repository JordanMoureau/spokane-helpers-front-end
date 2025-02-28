import React, { useState, useRef } from "react";

export default function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://spokane-helpers-3895ae38ae4d.herokuapp.com/api/v1/news",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ news: formData }),
        }
      );

      console.log("Response Status:", response.status); // ✅ Debugging log

      // ✅ Try to parse JSON, but handle empty responses
      let responseData;
      try {
        responseData = await response.json();
        console.log("API Response:", responseData); // ✅ Debugging log
      } catch (jsonError) {
        responseData = {}; // If there's no JSON, just set an empty object
      }

      if (response.ok) {
        setSuccessMessage("✅ New post created!");
        setFormData({ title: "", description: "", image_url: "" }); // ✅ Clear form
      } else {
        setSuccessMessage(
          `❌ Failed to create post: ${responseData.error || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error creating news post:", error);
      setSuccessMessage("❌ Error creating post. Please check your network.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Create News Post</h2>
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

        {successMessage && (
          <p className="text-green-600 font-semibold">{successMessage}</p>
        )}

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-deep text-white px-4 py-2 rounded-lg"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
