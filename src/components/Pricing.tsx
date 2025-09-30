import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "Renters",
      subtitle: "Contents & Liability",
      price: "$5",
      period: "/month",
      features: ["Personal property coverage", "Liability protection", "Additional living expenses"],
      popular: false
    },
    {
      title: "Homeowners", 
      subtitle: "Complete Home Protection",
      price: "$25",
      period: "/month",
      features: ["Dwelling coverage", "Personal property", "Liability & medical payments", "Additional living expenses"],
      popular: true
    },
    {
      title: "Condo",
      subtitle: "Perfect for Condo Owners", 
      price: "$12",
      period: "/month",
      features: ["Personal property coverage", "Loss assessment coverage", "Liability protection"],
      popular: false
    },
    {
      title: "Car",
      subtitle: "Full Auto Coverage",
      price: "$30",
      period: "/month", 
      features: ["Liability coverage", "Comprehensive & collision", "Uninsured motorist", "24/7 roadside assistance"],
      popular: false
    },
    {
      title: "Pet",
      subtitle: "Keep Your Pet Healthy",
      price: "$20",
      period: "/month",
      features: ["Accident & illness coverage", "Preventative care add-on", "No breed restrictions", "Fast claim processing"],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Incredible Prices. Monthly Subscription.</h2>
        <h3 className="text-2xl mb-12">Bundle Discounts.</h3>
        <p className="text-muted-foreground mb-12">♥ Starting as low as $5/mo</p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-6 relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2">{plan.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
              >
                Get Quote
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;