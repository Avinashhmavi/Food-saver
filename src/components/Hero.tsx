import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="animate-float mb-8">
          <img
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
            alt="Share food and share love"
            className="w-64 h-64 object-cover rounded-lg shadow-xl"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-800 mb-6">
          Share Food, Share Love
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Connect surplus food with those who need it most. Join our mission to reduce food waste
          and support communities in need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary-600 hover:bg-primary-700" onClick={() => navigate("/donate")}>
            Donate Food <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-600 text-primary-600" onClick={() => navigate("/find")}>
            Find Food
          </Button>
        </div>
      </div>
    </div>
  );
};