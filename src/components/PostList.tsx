import React from "react";
import Post from "./Post";

const PostList: React.FC = () => {
  const posts = [
    {
      profilePic: "https://via.placeholder.com/150",
      name: "John Doe",
      time: "2 hours ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Jane Smith",
      time: "3 hours ago",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Alice Johnson",
      time: "5 hours ago",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Bob Brown",
      time: "1 day ago",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {posts.map((post, index) => (
        <Post key={index} poster={post} />
      ))}
    </div>
  );
};

export default PostList;
