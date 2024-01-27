import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Faq = () => {
  return (
    <div className="rounded-custom">
      <Accordion type="single" collapsible>
        <AccordionItem className="bg-custom shadow-custom" value="item-1">
          <AccordionTrigger>
            <div className="text-base mx-5">
              1. What does your blockchain-powered supply chain offer to
              farmers?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-5 text-justify">
              Our blockchain solution ensures transparency and traceability
              throughout the agricultural supply chain. Farmers can track their
              produce from cultivation to market, promoting trust and fair
              transactions.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="text-base mx-5">
              2. How can I buy and sell farming supplies on your e-commerce
              platform?
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="text-base mx-5">
              3. How accurate is your AI model in detecting crop diseases?
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="text-base mx-5">
              4. Is your platform accessible for farmers with varying levels of
              technological literacy?
            </div>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="text-base mx-5">
              5. How does your agri-tech solution contribute to sustainable
              farming practices?
            </div>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
