const Footer = () => {
  const trustLogos = [
    "Quick Book", "DEXT", "SHOPIFY", "XERO", "JOBBER"
  ];

  const securityFeatures = [
    {
      icon: "🔒",
      title: "COMPREHENSIVE LICENSED",
      description: "Licensed in all 50 states and regulated by state insurance departments."
    },
    {
      icon: "🛡️",
      title: "REINSURED",
      description: "Backed by reinsurance from some of the world's largest reinsurers."
    },
    {
      icon: "⚡",
      title: "AI-POWERED CLAIMS TO PROTECT YOU",
      description: "Our AI Maya handles claims instantly and fairly, 24/7."
    }
  ];

 const footerLinks = {
  "SERVICES": [
    "Small Business Bookkeeping",
    "Non-Profit Bookkeeping",
    "Payroll Management",
    "Tax Preparation",
    "Financial Reporting"
  ],
  "COMPANY": [
    "About Us",
    "Careers",
    "Blog",
    "Testimonials",
    "Contact"
  ],
  "RESOURCES": [
    "FAQ",
    "Pricing",
    "Guides & Tips",
    "Templates",
    "Tools"
  ],
  "LEGAL": [
    "Privacy Policy",
    "Terms of Service",
    "Licenses",
    "Compliance",
    "Transparency"
  ]
};


  return (
    <>
      {/* Trust Logos Section */}
      <section className="py-12 px-6 border-t border-border">
        <h1 className="flex flex-wrap justify-center items-center gap-2 font-bold text-2xl">
          We Love Modern Technology And so will you
        </h1>
        <div className="max-w-7xl mx-auto mt-6">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustLogos.map((logo, index) => (
              <div key={index} className="text-lg font-semibold">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 px-6 bg-feature-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {securityFeatures.map((feature, idx) => (
              <div key={idx}>
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-background py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="font-semibold mb-4">{category}</h5>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

    <div className="border-t border-border pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">B</span>
      </div>
      <span className="font-semibold">Bookkeeping</span>
    </div>

    <div className="text-sm text-muted-foreground text-center md:text-left">
      <p>© 2024 Bookkeeping Company. All rights reserved.</p>
      <p className="mt-1">
        Bookkeeping Company. Licensed in all 50 states. Services provided professionally and securely.
      </p>
    </div>
  </div>
</div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
