// Explore.tsx
import React from "react";
import { CheckCircle, Star } from "lucide-react";

interface ExploreItem {
  id: number;
  title: string;
  description: string;
  status: string;
  imageUrl: string;
}

const dummyExploreItems: ExploreItem[] = [
  {
    id: 1,
    title: "Explore Nature Trails",
    description: "Discover beautiful nature trails in your area.",
    status: "Available",
    imageUrl: "https://picsum.photos/seed/nature/600/400",
  },
  {
    id: 2,
    title: "Visit Historical Sites",
    description: "Learn about the history of your region.",
    status: "Upcoming",
    imageUrl: "https://picsum.photos/seed/history/600/400",
  },
  {
    id: 3,
    title: "Attend Local Events",
    description: "Join exciting events happening near you.",
    status: "Available",
    imageUrl: "https://picsum.photos/seed/event/600/400",
  },
  {
    id: 4,
    title: "Discover Art Galleries",
    description: "Explore local art galleries and exhibitions.",
    status: "Available",
    imageUrl: "https://picsum.photos/seed/art/600/400",
  },
  {
    id: 5,
    title: "Join Cooking Classes",
    description: "Learn to cook delicious meals with local chefs.",
    status: "Upcoming",
    imageUrl: "https://picsum.photos/seed/cooking/600/400",
  },
];

const Explore: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Explore
      </h1>
      <div className="space-y-6">
        {dummyExploreItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-1/2 h-48 object-cover"
            />
            <div className="p-4 w-1/2">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex items-center mt-2">
                {item.status === "Available" ? (
                  <CheckCircle size={16} className="text-green-500 mr-1" />
                ) : (
                  <Star size={16} className="text-yellow-500 mr-1" />
                )}
                <span className="text-sm">{item.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
