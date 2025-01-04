import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const FindFood = () => {
  const [location, setLocation] = useState("");
  const [searchResults] = useState([
    {
      id: 1,
      title: "Fresh Vegetables",
      description: "Assorted fresh vegetables from local restaurant",
      distance: "0.5 km",
      quantity: "5 kg",
    },
    {
      id: 2,
      title: "Bread and Pastries",
      description: "Day-old bread and pastries from bakery",
      distance: "1.2 km",
      quantity: "20 pieces",
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Food</h1>
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex gap-4">
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="flex-1"
          />
          <Button>
            <Search className="mr-2" /> Search
          </Button>
        </div>
      </div>
      <div className="max-w-2xl mx-auto space-y-4">
        {searchResults.map((result) => (
          <div
            key={result.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold">{result.title}</h3>
            <p className="text-gray-600">{result.description}</p>
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>Distance: {result.distance}</span>
              <span>Quantity: {result.quantity}</span>
            </div>
            <Button className="mt-4">Request Food</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindFood;