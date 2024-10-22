import Card from "@/components/Card";
import { Building, CheckCircle, Settings, Star } from "lucide-react";

interface Organisation {
  id: number;
  name: string;
  description: string;
  status: string;
}

const dummyOrganisations: Organisation[] = [
  {
    id: 1,
    name: "Organisation Alpha",
    description: "A brief description of Organisation Alpha.",
    status: "Active",
  },
  {
    id: 2,
    name: "Organisation Beta",
    description: "A brief description of Organisation Beta.",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Organisation Gamma",
    description: "A brief description of Organisation Gamma.",
    status: "Pending",
  },
];

const Organisations: React.FC = () => {
  return (
    <div className="relative p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="absolute top-4 right-4 text-brown-600">
        <Settings
          size={24}
          className="text-gray-500 ml-3 cursor-pointer hover:text-green-500"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Organisations</h1>
      <div className="space-y-4">
        {dummyOrganisations.map((organisation) => (
          <Card
            key={organisation.id}
            icon={Building}
            title={organisation.name}
            description={organisation.description}
            status={organisation.status}
            statusIcon={
              organisation.status === "Active" ? (
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

export default Organisations;
