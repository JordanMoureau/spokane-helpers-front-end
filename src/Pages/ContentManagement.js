import React, { useState } from "react";
import AdminNav from "../Components/AdminNav";

import Dashboard from "../Components/Dashboard";
import NewPost from "../Components/NewPost";
import EditPost from "../Components/EditPost";

export default function ContentManagement({ setIsAuthenticated }) {
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <div className="bg-gray-100 text-gray-900">
      <AdminNav
        setShowNewPost={setShowNewPost}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Dashboard />
      {showNewPost && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setShowNewPost(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
            <NewPost setShowNewPost={setShowNewPost} />
          </div>
        </div>
      )}
    </div>
  );
}
