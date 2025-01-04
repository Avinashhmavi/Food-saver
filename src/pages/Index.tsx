import { Hero } from "@/components/Hero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactMetrics />
      <HowItWorks />
    </div>
  );
};

export default Index;