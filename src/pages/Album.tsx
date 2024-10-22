import React from "react";
import { Music, CheckCircle, Star, Settings } from "lucide-react";
import Card from "@/components/Card";

interface Album {
  id: number;
  title: string;
  artist: string;
  status: string;
}

const dummyAlbums: Album[] = [
  {
    id: 1,
    title: "Album One",
    artist: "Artist A",
    status: "Released",
  },
  {
    id: 2,
    title: "Album Two",
    artist: "Artist B",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Album Three",
    artist: "Artist C",
    status: "Released",
  },
];

const Album: React.FC = () => {
  return (
    <div className="relative p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="absolute top-4 right-4 text-brown-600">
        <Settings
          size={24}
          className="text-gray-500 ml-3 cursor-pointer hover:text-green-500"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Albums</h1>
      <div className="space-y-4">
        {dummyAlbums.map((album) => (
          <Card
            key={album.id}
            icon={Music}
            title={album.title}
            description={`Artist: ${album.artist}`}
            status={album.status}
            statusIcon={
              album.status === "Released" ? (
                <CheckCircle size={16} className="text-green-500 mr-1" />
              ) : (
                <Star size={16} className="text-yellow-500 mr-1" />
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
