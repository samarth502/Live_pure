import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      question: 'Is Liv Pure right for me?',
      answer:
        'Do you have deep stubborn fat stores that no diet or exercise seems to remove? Then the answer is yes. Liv Pure has changed the lives of over 234,000 women and men from 18 to 80 and is designed to rapidly dissolve fat in even the worst cases. But if by the very rare chance that it doesn , then youre 100% protected by our ironclad two month money back guarantee. Thats how confident we are in the power of Liv Pure',
    },
    {
      question: 'How does Liv Pure work?',
      answer:
        'Liv Pure is the only nutritional solution in the world proven to address the true root cause of low energy, slow metabolism and unexplained weight gain - Compromised liver function. As you’re probably aware, one of your liver’s main functions is to cleanse your body of the chemicals and toxins you’re exposed to through food, drugs, alcohol and the environment in general. However, science has discovered that your liver is also the fat burning furnace for your entire body. Everything you eat or drink eventually reaches your liver for processing. Your liver then determines if the food you eat, regardless of how healthy or unhealthy it is, will get burned as energy or if it will be stored as unsightly body fat. By supporting your liver health, you can naturally skyrocket energy, fat-burning and metabolism.What’s inside Liv Pure?',
    },  
    {
        question: 'Is Liv Pure safe?',
        answer:
          'Liv Pure is an all natural proprietary formula manufactured in the USA from the finest of foreign and domestic ingredients at our FDA registered and GMP certified facility using state of the art precision engineered machinery and under the most strictest and most sterile standards. Each ingredient is 100% plant based soy free, dairy free, vegetarian and non GMO and put through additional third party inspections and quality control to ensure high purity and votes. The only reported side effect from Liv Pure is having to toss your baggy clothes in the trash and spend hours in the dressing room trying out new sexy tight fitting clothes. As always, I advise you to consult your doctor if you have any medical questions.',
      },
      {
        question: 'Is this a one time payment?',
        answer:
          'Yes, your order today is a one time payment with no auto ship subscriptions or hidden charges',
      },
      {
        question: 'What do I do now?',
        answer:
          'This is the fun part. Click on one of the packages below. Enter your order details on our secure checkout page. After you finish, we ll get your Liv Pure shipped out to you straight away. Remember, your order is covered by our 60 day 100% money back guarantee. So there s no risk to you at all. Stock is running out fast and prices may go up at any moment. So just go ahead and click the button below. Complete your checkout and I ll be talking to you soon.',
      }
    // Add more FAQ data as needed...
  ];

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <h1>Frequently Asked Questions About Liv Pure Tablets</h1>
    <div className="w-[80%] mx-auto mt-12 ">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border-solid border-2 border-indigo-600 p-4 mb-4 rounded-md bg-white"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <h3 className="text-4xl font-bold ">{faq.question}</h3>
            <FontAwesomeIcon
              icon={expandedIndex === index ? faMinus : faPlus}
              className="text-gray-500"
            />
          </div>
          <CSSTransition
            in={expandedIndex === index}
            timeout={300}
            classNames="expand"
            unmountOnExit
          >
            <p className="my-5  text-gray-600 text-2xl">{faq.answer}</p>
          </CSSTransition>
        </div>
      ))}
    </div>
    </>
  );
};

export default FAQ;
