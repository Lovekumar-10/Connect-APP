import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";


const FAQCard = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-header">
        <div className="faq-number">{number < 10 ? `0${number}` : number}</div>
        <div className="faq-question">{question}</div>
        <div className="faq-toggle-icon">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQCard;

