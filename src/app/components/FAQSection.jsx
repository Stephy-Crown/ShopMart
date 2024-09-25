// "use client";
// import { useState } from "react";

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What payment methods do you accept?",
//       answer: "We accept all major credit cards, PayPal, and Apple Pay.",
//     },
//     {
//       question: "How can I track my order?",
//       answer:
//         "Once your order is shipped, you will receive a tracking number via email.",
//     },
//     {
//       question: "What is your return policy?",
//       answer:
//         "We accept returns within 30 days of purchase. The product must be in original condition.",
//     },
//     {
//       question: "Do you offer international shipping?",
//       answer:
//         "Yes, we ship internationally. Shipping fees and delivery times may vary based on your location.",
//     },
//     {
//       question: "How do I report a problem with my order?",
//       answer:
//         "You can report any issues via our Contact Us page or email support directly.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-section py-10">
//       <h2 className="text-xl font-bold text-center mb-6">
//         Frequently Asked Questions
//       </h2>
//       <div className="max-w-4xl mx-auto px-4">
//         {faqs.map((faq, index) => (
//           <div key={index} className="mb-4">
//             <button
//               className="flex items-center justify-between w-full text-lg font-semibold"
//               onClick={() => toggleFAQ(index)}
//             >
//               <span>{faq.question}</span>
//               <svg
//                 className={`w-6 h-6 transform transition-transform ${
//                   activeIndex === index ? "rotate-90" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//             {activeIndex === index && (
//               <p className="mt-2 text-gray-600">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;

// src/app/components/FAQSection.js
"use client";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. The product must be in original condition.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship internationally. Shipping fees and delivery times may vary based on your location.",
    },
    {
      question: "How do I report a problem with my order?",
      answer:
        "You can report any issues via our Contact Us page or email support directly.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section bg-[#ffffff] py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-[16px] md:text-xl">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              className="flex items-center justify-between w-full text-lg font-semibold text-left py-4"
              onClick={() => toggleFAQ(index)}
            >
              <span className="truncate text-[16px] md:text-xl">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600 text-base md:text-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
