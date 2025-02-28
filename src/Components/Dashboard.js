import React, { useEffect, useState } from "react";
import { Trash2, Edit2 } from "lucide-react"; // Import delete and edit icons
import EditPost from "./EditPost";

export default function Dashboard() {
  const [newsPosts, setNewsPosts] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null); // Store selected post ID

  // Fetch news posts from API
  useEffect(() => {
    fetch("https://spokane-helpers-3895ae38ae4d.herokuapp.com/api/v1/news")
      .then((res) => res.json())
      .then((data) => setNewsPosts(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  // Delete a news post
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this news post?")) {
      try {
        const response = await fetch(
          `https://spokane-helpers-3895ae38ae4d.herokuapp.com/api/v1/news/${id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          setNewsPosts(newsPosts.filter((post) => post.id !== id));
        } else {
          console.error("Failed to delete post");
        }
      } catch (error) {
        console.error("Error deleting news:", error);
      }
    }
  };

  // Open edit modal and store selected post ID
  const handleEdit = (id) => {
    setSelectedPostId(id); // Store the selected post ID
    setEditOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Manage News</h1>

      {/* News List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">All News Posts</h2>
        {newsPosts.length > 0 ? (
          <ul className="divide-y divide-gray-300">
            {newsPosts.map((post) => (
              <li
                key={post.id}
                className="flex justify-between items-center py-4"
              >
                <span className="text-lg font-medium">{post.title}</span>
                <div className="flex space-x-4">
                  {/* Edit button */}
                  <button
                    onClick={() => handleEdit(post.id)} // Pass ID when clicking edit
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No news posts available.</p>
        )}
      </div>

      {/* Edit Modal */}
      {editOpen && selectedPostId && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setEditOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
            <EditPost id={selectedPostId} /> {/* Pass the post ID here */}
          </div>
        </div>
      )}
    </div>
  );
}
