import React from "react";
import FAQCard from "./FAQCard";
import "../Styles/FAQ.css";
const faqList = [
  {
    question: "What is SMIP and how does it work?",
    answer: "SMIP (Social Media Integration Platform) is a tool that lets you manage multiple social media accounts like Facebook, Instagram, Twitter, and more — all from one place. You can read messages, reply to chats, post content, and track notifications in a single dashboard.",
  },
  {
    question: "Can I reply to messages from different platforms in one chat box?",
    answer: "Yes! SMIP combines chats from different social platforms into one clean inbox. You can switch between platforms and reply without needing to open each app separately.",
  },
  {
    question: "Is it safe to connect my social media accounts?",
    answer: "Absolutely. We use secure OAuth-based authentication and never store your passwords. Your data is encrypted and only you have access to it.",
  },
  {
    question: "Can I schedule posts for multiple platforms at once?",
    answer: "This feature is coming soon! You'll be able to create a post and schedule it across platforms like Instagram, Facebook, and X (formerly Twitter) in just a few clicks.",
  },
  {
    question: "Will SMIP show me all notifications from my accounts?",
    answer: "Yes. Our notification box gathers alerts from all your connected platforms and shows them in one place, so you never miss out on anything important.",
  },
  {
    question: "Can I use SMIP for business pages too?",
    answer: "Yes! SMIP supports both personal profiles and business pages. You can manage business DMs, comments, and posts efficiently from the same dashboard.",
  },
];


const FAQ = () => {
  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqList.map((item, index) => (
          <FAQCard key={index} number={index + 1} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
