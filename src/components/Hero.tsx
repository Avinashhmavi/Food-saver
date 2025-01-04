import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="animate-float mb-8">
          <img
            src="/placeholder.svg"
            alt="Food sharing illustration"
            className="w-64 h-64 object-contain"
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
          <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
            Donate Food <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-600 text-primary-600">
            Find Food
          </Button>
        </div>
      </div>
    </div>
  );
};