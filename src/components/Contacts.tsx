import React from "react";
import ContactProfile from "./ContactProfile";
import { Filter, PlusCircle } from "lucide-react";
import Followers from "./Followers"; // Import Followers component
import Following from "./Following"; // Import Following component

const Contacts: React.FC = () => {
  const handleProfileClick = (name: string) => {
    console.log(`${name}'s profile clicked!`);
  };

  const handleAddContact = () => {
    console.log("Add Contact button clicked!");
  };

  const contacts = [
    { avatar: "https://picsum.photos/150?random=1", name: "John Doe" },
    { avatar: "https://picsum.photos/150?random=2", name: "Jane Smith" },
    { avatar: "https://picsum.photos/150?random=3", name: "Alice Johnson" },
    { avatar: "https://picsum.photos/150?random=4", name: "Bob Brown" },
    { avatar: "https://picsum.photos/150?random=5", name: "Charlie Davis" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <div className="flex items-center">
          <button onClick={handleAddContact}>
            <PlusCircle className="mr-1" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <Filter className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {contacts.map((contact, index) => (
          <ContactProfile
            key={index}
            avatar={contact.avatar}
            name={contact.name}
            onClick={() => handleProfileClick(contact.name)}
          />
        ))}
      </div>
      <Followers />
      <Following />
    </div>
  );
};

export default Contacts;
