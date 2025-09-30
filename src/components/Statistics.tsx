import { Button } from "@/components/ui/button";

const Statistics = () => {
  const stats = [
    { number: "87%", label: "save money" },
    { number: "96%", label: "are happy" },
    { number: "2M+", label: "customers" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Already insured? We'll help you switch!</h2>
        <p className="text-muted-foreground mb-12">
          Join millions who've ditched their old insurance for something better.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <p className="text-lg font-semibold">Ready to save money and get better coverage?</p>
          <Button size="lg" className="text-lg px-8 py-6">
            GET STARTED TODAY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Statistics;