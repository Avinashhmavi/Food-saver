import { Users, Utensils, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ImpactMetrics = () => {
  const metrics = [
    {
      icon: Utensils,
      value: "50,000+",
      label: "Meals Shared",
      color: "text-primary-600",
    },
    {
      icon: Users,
      value: "1,000+",
      label: "People Helped",
      color: "text-secondary-600",
    },
    {
      icon: Building2,
      value: "100+",
      label: "Partner NGOs",
      color: "text-primary-600",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Impact Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <metric.icon className={`h-12 w-12 ${metric.color} mb-4`} />
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};