import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface Poster {
  profilePic: string;
  name: string;
  time: string;
  content: string;
}

interface PostProps {
  poster: Poster;
}

const Post: React.FC<PostProps> = ({ poster }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-lg w-full mx-auto mb-4">
      <div className="flex items-center mb-4">
        <img
          src={poster.profilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="text-lg font-semibold">{poster.name}</h3>
          <p className="text-gray-500 text-sm">{poster.time}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-base md:text-lg">{poster.content}</p>
      </div>
      <div className="flex justify-between">
        <button className="flex items-center text-blue-500 hover:underline">
          <Heart className="mr-1" />
        </button>
        <button className="flex items-center text-blue-500 hover:underline">
          <MessageCircle className="mr-1" />
        </button>
        <button className="flex items-center text-blue-500 hover:underline">
          <Share2 className="mr-1" />
        </button>
      </div>
    </div>
  );
};

export default Post;
