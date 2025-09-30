import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "- Graham Folster",
      rating: 5,
      comment: "Excellent bookkeeping services and more! The team at Fusion has helped us grow our business. From transitioning to a cloud bookkeeping system, advising us on cash flow management, and even researching structures for future tax planning. We highly recommend partnering with Fusion!",
      avatar: "GF"
    },
    {
      name: "- Graham Folster",
      rating: 5,
      comment: "Excellent bookkeeping services and more! The team at Fusion has helped us grow our business. From transitioning to a cloud bookkeeping system, advising us on cash flow management, and even researching structures for future tax planning. We highly recommend partnering with Fusion!",
      avatar: "GF"
    },
    {
      name: "- Graham Folster",
      rating: 5,
      comment: "Excellent bookkeeping services and more! The team at Fusion has helped us grow our business. From transitioning to a cloud bookkeeping system, advising us on cash flow management, and even researching structures for future tax planning. We highly recommend partnering with Fusion!",
      avatar: "GF"
    },
    {
      name: "- Graham Folster",
      rating: 5,
      comment: "Excellent bookkeeping services and more! The team at Fusion has helped us grow our business. From transitioning to a cloud bookkeeping system, advising us on cash flow management, and even researching structures for future tax planning. We highly recommend partnering with Fusion!",
      avatar: "GF"
    },
  ];

  return (
    <section className="py-20 px-6 bg-testimonial-bg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Their words. not ours</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
         We thrive on our clients feedback... Can’t wait to hear yours!
        </p>
        
        <div className="flex justify-center mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-primary text-primary" />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;