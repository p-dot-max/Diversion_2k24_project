import { useState } from "react";

const FaqItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3">
      <dt className="flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left w-full text-gray-700 text-sm font-medium bg-transparent outline-none focus:outline-none"
        >
          <div className="flex justify-between items-center font-semibold">
            <span>{question}</span>
            <span className="text-xl">{isOpen ? "-" : "+"}</span>
          </div>
        </button>
      </dt>
      <dd
        className={`${isOpen ? "block" : "hidden"} mt-2 text-gray-500 text-sm`}
      >
        {answer}
      </dd>
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question:
        "1. What does your blockchain-powered supply chain offer to farmers?",
      answer:
        "Our blockchain solution ensures transparency and traceability throughout the agricultural supply chain. Farmers can track their produce from cultivation to market, promoting trust and fair transactions.",
    },
    {
      question:
        "2. How can I buy and sell farming supplies on your e-commerce platform?",
      answer:
        "Et excepteur ex minim duis ad ullamco id velit anim eu duis commodo fugiat.",
    },
    {
      question: "3. How accurate is your AI model in detecting crop diseases?",
      answer:
        "Eiusmod ad cupidatat tempor consequat elit ex minim quis est elit.",
    },
    {
      question:
        "4. Is your platform accessible for farmers with varying levels of technological literacy?",
      answer: "Proident Lorem officia quis esse elit.",
    },
    {
      question:
        "5. How does your agri-tech solution contribute to sustainable farming practices?",
      answer:
        "Ex id dolor exercitation in excepteur minim Lorem cillum sit sunt irure eiusmod aute.",
    },
  ];

  return (
    <div className="bg-white p-6 md:p-8 lg:p-12">
      <h2 className="text-2xl font-bold text-custom-green mb-4">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-6">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </dl>
    </div>
  );
};

export default FaqSection;
