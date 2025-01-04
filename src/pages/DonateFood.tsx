import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const DonateFood = () => {
  const [foodDetails, setFoodDetails] = useState({
    title: "",
    description: "",
    quantity: "",
    location: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Food donation submitted",
      description: "Thank you for your generous donation!",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Donate Food</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Food Title</label>
          <Input
            value={foodDetails.title}
            onChange={(e) =>
              setFoodDetails({ ...foodDetails, title: e.target.value })
            }
            placeholder="E.g., Fresh Vegetables"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Description</label>
          <Textarea
            value={foodDetails.description}
            onChange={(e) =>
              setFoodDetails({ ...foodDetails, description: e.target.value })
            }
            placeholder="Describe the food items, condition, and best-before date"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Quantity</label>
          <Input
            value={foodDetails.quantity}
            onChange={(e) =>
              setFoodDetails({ ...foodDetails, quantity: e.target.value })
            }
            placeholder="E.g., 5 kg or 10 portions"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Pickup Location</label>
          <Input
            value={foodDetails.location}
            onChange={(e) =>
              setFoodDetails({ ...foodDetails, location: e.target.value })
            }
            placeholder="Enter your address"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Donation
        </Button>
      </form>
    </div>
  );
};

export default DonateFood;