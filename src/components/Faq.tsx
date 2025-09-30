"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  icon: string;
}

const Faq = () => {
  const faqs: FaqItem[] = [
    {
      question: "Who is your ideal customer?",
      answer:
        "Most of our customers are Canadian small business corporations with annual sales between $500,000 and $5 million. We also specialize in non-profit organizations, however, don’t currently offer services to Sole Proprietors or Partnerships.",
      icon: "https://cdn.prod.website-files.com/64d2577f1392188411250ed6/64d3df82fb9e00678a2d5a39_User%20Manual.png",
    },
    {
      question: "Will you need an office at my business location?",
      answer:
        "As a virtual bookkeeping company, we work remotely and will not complete any bookkeeping work at your place of business.",
      icon: "https://cdn.prod.website-files.com/64d2577f1392188411250ed6/64d3df7a7831531782edd9c1_Health%20Graph.png",
    },
    {
      question: "Do we have to commit to work with Fusion for a period of time?",
      answer:
        "While we strive to develop strong working relationships and hope to work with our customers for decades, we don’t force anyone to work with us. If you decide not to continue with our services, just give us two weeks’ notice to cancel the bookkeeping agreement.",
      icon: "https://cdn.prod.website-files.com/64d2577f1392188411250ed6/64d3df6eb70df372b06900af_Available%20Updates.png",
    },
    {
      question: "How frequently will you update our bookkeeping?",
      answer:
        "We specialize in batch processing your bookkeeping on either a monthly or weekly basis. At the end of each month we complete the bank reconciliations before providing you with monthly reports.",
      icon: "https://cdn.prod.website-files.com/64d2577f1392188411250ed6/64d3df605bbfae52c48789ce_Time%20to%20Pay.png",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Got Questions? We’ve Got Answers</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the most common questions we get asked.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 text-left">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`p-6 transition cursor-pointer ${
                openIndex === index ? "border-primary shadow-md" : ""
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img
                    src={faq.icon}
                    alt="faq icon"
                    className="w-7 h-7 object-contain mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    {openIndex === index && (
                      <p className="text-muted-foreground mt-2">{faq.answer}</p>
                    )}
                  </div>
                </div>
                <span className="text-primary">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
