import React, { useState } from "react";
import Collapse from "../../Components/UI/Collapse";

const FAQ = () => {
  const [openTab, setOpenTab] = useState(0);

  const toggleTab = (idx) => {
    setOpenTab(openTab === idx ? 0 : idx);
  };

  const faqData = [
    {
      id: 1,
      question: "What is Fivestack.dev?",
      answer:
        "Fivestack.dev is a comprehensive development platform that provides tools, resources, and services to help developers build, deploy, and scale modern web applications efficiently.",
    },
    {
      id: 2,
      question: "What technologies does Fivestack support?",
      answer:
        "Fivestack supports a wide range of modern technologies including React, Next.js, Vue, Node.js, Python, and various cloud deployment platforms to meet your development needs.",
    },
    {
      id: 3,
      question: "How does Fivestack help with project deployment?",
      answer:
        "Fivestack provides seamless deployment solutions with automated CI/CD pipelines, cloud integration, and monitoring tools to ensure your applications are deployed reliably and efficiently.",
    },
    {
      id: 4,
      question: "Is there a free tier available?",
      answer:
        "Yes, Fivestack offers a generous free tier that includes essential development tools and limited resources, perfect for getting started and small projects.",
    },
    {
      id: 5,
      question: "What kind of support does Fivestack provide?",
      answer:
        "We offer comprehensive support including detailed documentation, community forums, video tutorials, and premium support options for enterprise customers.",
    },
    {
      id: 6,
      question: "How secure is the Fivestack platform?",
      answer:
        "Security is our top priority. Fivestack implements enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 text-base-content transition-colors duration-300">
      <div className="max-w-7xl px-4 sm:px-6 md:px-8 py-16 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#A346E6]">Questions</span>
          </h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Everything you need to know about Fivestack.dev and how it can help accelerate your development workflow.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {faqData.slice(0, 3).map((item) => (
              <Collapse
                key={item.id}
                isOpen={openTab === item.id}
                onClick={() => toggleTab(item.id)}
                title={item.question}
              >
                {item.answer}
              </Collapse>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqData.slice(3).map((item) => (
              <Collapse
                key={item.id}
                isOpen={openTab === item.id}
                onClick={() => toggleTab(item.id)}
                title={item.question}
              >
                {item.answer}
              </Collapse>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 p-8 bg-base-100 rounded-2xl shadow-lg transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="opacity-70 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <button className="btn btn-primary btn-lg">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
