
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-secondary-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
          <h1 className="text-5xl font-bold text-primary">
            Transform Agricultural Waste into Value
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with businesses and artisans to give your agricultural waste a second life
            while contributing to a sustainable future.
          </p>
          <div className="space-x-4">
            <Button
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary-600 text-white px-8 py-6 text-lg hover-lift"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary-100 hover-lift"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
