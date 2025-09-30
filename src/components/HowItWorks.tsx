import howItWorksImg from "@/assets/vc.png";

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-feature-bg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">How to get started with Bookkeeping Fusion</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
          Choose your Bookkeeping Package with an Up-Front and Flat-Fee Price. No Hidden Surprises or Fees
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-left">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit a Quote Request</h3>
              <p className="text-muted-foreground">
                Our online tool will provide us with the information we require to start working on your custom quote.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2"> Personal Introduction</h3>
              <p className="text-muted-foreground">
                Discovery meeting to ensure our organizations are a good fit for each other. A long-term relationship needs a firm foundation.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Packages & Pricing</h3>
              <p className="text-muted-foreground">
                Specific to your business and requirements. Fixed monthly prices and no long term contracts.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose your Package</h3>
              <p className="text-muted-foreground">
                Select the best option for you. We can scale with your business and you can change packages at any time.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={howItWorksImg} 
              alt="How Lemonade works process illustration" 
              className="max-w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>

      {/* Floating animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
