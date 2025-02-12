import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, FileText, Users, Folder } from "lucide-react"; // Icon imports

export default function Dashboard() {
  const navigate = useNavigate();

  // Widget Data (Title, Description, Icon, Click Action)
  const widgets = [
    {
      title: "Add News Post",
      description: "Create and publish a new news update.",
      icon: <PlusCircle className="w-12 h-12 text-brand-peach" />,
      action: () => navigate("/news/add"),
    },
    {
      title: "Manage Programs",
      description: "Edit and update available programs.",
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      action: () => navigate("/programs"),
    },
    {
      title: "Volunteer Sign-ups",
      description: "View and manage new volunteer registrations.",
      icon: <Users className="w-12 h-12 text-green-500" />,
      action: () => navigate("/volunteers"),
    },
    {
      title: "Resource Directory",
      description: "Add, remove, or update community resources.",
      icon: <Folder className="w-12 h-12 text-purple-500" />,
      action: () => navigate("/resources"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

      {/* Grid Layout for Widgets */}
      <div className="flex flex-wrap gap-6">
        {widgets.map((widget, index) => (
          <div
            key={index}
            onClick={widget.action}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              {widget.icon}
              <div>
                <h2 className="text-lg font-semibold">{widget.title}</h2>
                <p className="text-sm text-gray-600">{widget.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
