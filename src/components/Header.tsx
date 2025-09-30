import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-semibold">lemonade</span>
        </div> */}
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Our Teams</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Who We Are</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
        </nav>
        
        <div className="flex items-center gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Log in</a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">Get started</a>
          
        </div>
      </div>
    </header>
  );
};

export default Header;