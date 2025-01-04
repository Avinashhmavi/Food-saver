import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Register",
      description: "Create your account as a donor or recipient organization",
    },
    {
      title: "Share",
      description: "List your surplus food or find available donations nearby",
    },
    {
      title: "Connect",
      description: "Get matched with the perfect partner for food sharing",
    },
    {
      title: "Impact",
      description: "Track your contribution to reducing food waste",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-600">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block h-8 w-8 text-primary-300 absolute transform translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};