import { Card } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="py-20 px-6 bg-feature-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Instant Everything</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get quotes, buy coverage, file claims, and get paid. All instantly. All on your phone.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-lg max-w-sm mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">L</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI claims</h3>
                <p className="text-muted-foreground mb-6">90 seconds to get paid</p>
                
                <div className="bg-feature-bg rounded-2xl p-4 mb-4">
                  <p className="text-sm">🏠 "My bike was stolen from my apartment"</p>
                </div>
                
                <div className="bg-primary text-primary-foreground rounded-2xl p-4 mb-6">
                  <p className="text-sm">We'll handle this right away! Check was sent to your account.</p>
                </div>
                
                <div className="text-2xl font-bold text-primary">$750</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">1 Minute</h3>
              <p className="text-muted-foreground">To get a quote</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">90 Seconds</h3>
              <p className="text-muted-foreground">To get covered</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">3 Minutes</h3>
              <p className="text-muted-foreground">To get paid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;