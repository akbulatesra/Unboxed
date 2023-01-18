import React from 'react';
import ContactForm from './Forms/ContactForm';
import ContactPlace from './ContactPlace';
import contact from './contactImg.svg';

function Contact() {
  return (
    <div className="m-[5%] font-poppins">
      <div>
        {' '}
        <h1 className="pb-[1%] text-5xl">SEND US YOUR REQUEST!</h1>
        <p className="pb-[1%] text-2xl opacity-50">
          {`Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we'd be
          happy to help!`}
        </p>
      </div>
      <div className="flex border-2">
        <div className="border-2 border-red-600">
          {' '}
          <ContactForm />
        </div>
        <div className="w-[38%]">
          <aside>
            <img
              src={contact}
              alt="smiling woman sitting in front of a computer with headphones, man on the background talking with the phone"
            />
            <ContactPlace />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Contact;
