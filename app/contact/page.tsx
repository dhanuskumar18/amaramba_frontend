'use client';
import React, { useState } from 'react';
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';
import EditText from '../../components/ui/EditText';
import Dropdown from '../../components/ui/Dropdown';
// import { TextArea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Footer from '@/components/Footer';
interface ContactFormData {
  name: string;
  email: string;
  address: string;
  subject: string;
  message: string;
}
interface FAQItem {
  id: number;
  question: string;
  answer?: string;
  isOpen: boolean;
}
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    address: '',
    subject: '',
    message: ''
  });
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "What are Financial Markets?",
      answer: "Financial markets, from the name itself, are a type of marketplace that provides an avenue for the sale and purchase of assets such as bonds, stocks, foreign exchange, and derivatives.",
      isOpen: false
    },
    {
      id: 2,
      question: "What is Capital Market?",
      answer: "A capital market is a financial market in which long-term debt or equity-backed securities are bought and sold, in contrast to a money market where short-term debt is bought and sold.",
      isOpen: false
    },
    {
      id: 3,
      question: "What is a dividend?",
      answer: "A dividend is a distribution of profits by a corporation to its shareholders. When a corporation earns a profit or surplus, it is able to pay a proportion of the profit as a dividend to shareholders.",
      isOpen: false
    }
  ]);
  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'trading', label: 'Trading Support' },
    { value: 'account', label: 'Account Issues' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' }
  ];
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };
  const toggleFAQ = (id: number) => {
    setFaqItems(prev => prev.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ));
  };
  return (
    <div className="w-full bg-global-8 flex flex-col justify-start items-center gap-[120px] py-20 pb-0">
      {/* Header */}
      {/* <Header /> */}
      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[14px] justify-start items-center w-full">
          {/* Contact Section */}
          <div className="flex flex-col gap-[28px] justify-start items-start w-full">
            {/* Header Section */}
            <div className="flex flex-col gap-[14px] justify-start items-start w-full">
              <a href="#" className="text-[16px] sm:text-[20px] font-lexend font-normal leading-[20px] sm:leading-[25px] text-global-3">
                Contact Us
              </a>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] md:leading-[60px] text-global-7">
                Get In Touch
              </h1>
            </div>
            <p className="text-[14px] sm:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[30px] text-justify text-global-11 w-full sm:w-[70%] md:w-[40%]">
              Contact ACD for any queries you may have regarding our services or how we operate.
            </p>
          </div>
          {/* Contact Information and Form */}
          <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-0 w-full">
            {/* Contact Information */}
            <div className="flex flex-col gap-[38px] w-full lg:w-[36%] px-2 sm:px-4">
              {/* Address */}
              <div className="flex flex-row gap-[20px] justify-center items-center w-full">
                <button className="w-[66px] h-[64px] bg-global-8 rounded-[32px] p-[20px] flex justify-center items-center">
                  <img 
                    src="/images/img_group_8895.svg" 
                    alt="Address Icon" 
                    className="w-full h-full"
                    width={26}
                    height={24}
                  />
                </button>
                <div className="flex flex-col gap-[4px] justify-start items-start flex-1">
                  <h3 className="text-[20px] sm:text-[24px] font-lexend font-medium leading-[25px] sm:leading-[30px] text-global-16">
                    Address
                  </h3>
                  <p className="text-[20px] sm:text-[24px] font-lexend font-medium leading-[30px] sm:leading-[37px] text-global-18 w-full">
                    Rua dos Desportistas, n° 918, Edifício Jat V-3, 5° Piso Maputo – Mozambique
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex flex-row gap-[20px] justify-center items-start w-full">
                <div className="flex flex-row justify-center items-start bg-global-8 rounded-[32px] w-[66px] h-[66px]">
                  <div className="flex justify-center items-start px-[20px] py-[20px] mb-[42px]">
                    <img 
                      src="/images/img_.svg" 
                      alt="Phone Icon" 
                      className="w-[24px] h-[24px]"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] justify-start items-start flex-1 mb-[14px]">
                  <h3 className="text-[20px] sm:text-[24px] font-lexend font-medium leading-[25px] sm:leading-[30px] text-global-16">
                    Lets Talk us
                  </h3>
                  <p className="text-[20px] sm:text-[24px] font-lexend font-medium leading-[25px] sm:leading-[30px] text-global-18">
                    Phone number: +258 87 300 2540
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-row gap-[20px] justify-center items-start w-full">
                <button className="w-[66px] h-[64px] bg-global-8 rounded-[32px] p-[20px] flex justify-center items-end">
                  <img 
                    src="/images/img_group_8895_light_blue_700_01.svg" 
                    alt="Email Icon" 
                    className="w-full h-full"
                    width={26}
                    height={24}
                  />
                </button>
                <div className="flex flex-col gap-[10px] justify-start items-start flex-1 mb-[12px]">
                  <h3 className="text-[20px] sm:text-[24px] font-lexend font-medium leading-[25px] sm:leading-[30px] text-global-16">
                    Send us email
                  </h3>
                  <p className="text-[20px] sm:text-[24px] font-lexend font-medium leading-[25px] sm:leading-[30px] text-global-18">
                    info@amarambacapital.co.mz
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="flex flex-row justify-end items-center w-full lg:flex-1 px-4 sm:px-8 lg:px-[56px] lg:pr-[108px]">
              <div className="flex flex-col gap-[30px] justify-start items-center w-full lg:w-[64%]">
                {/* Name and Email Row */}
                <div className="flex flex-col sm:flex-row gap-[20px] justify-start items-center w-full">
                  <EditText
                    placeholder="Name"
                    value={formData.name}
                    onChange={(value) => handleInputChange('name', value)}
                    className="pt-[12px] pr-[18px] pb-[12px] pl-[18px] bg-gray-200 rounded-[5px] text-[16px] font-lexend font-normal leading-[20px] text-global-18"
                  />
                  <EditText
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    className="pt-[12px] pr-[18px] pb-[12px] pl-[18px] bg-gray-200 rounded-[5px] text-[16px] font-lexend font-normal leading-[20px] text-global-18"
                  />
                </div>
                {/* Address */}
                <EditText
                  placeholder="Address"
                  value={formData.address}
                  onChange={(value) => handleInputChange('address', value)}
                  className="pt-[12px] pr-[18px] pb-[12px] pl-[18px] bg-gray-200 rounded-[5px] text-[16px] font-lexend font-normal leading-[20px] text-global-18 w-full"
                />
                {/* Subject Dropdown */}
                <Dropdown
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(value) => handleInputChange('subject', value)}
                  options={subjectOptions}
                  rightImage={{
                    src: "/images/img_arrow_down_black_900.svg",
                    width: 8,
                    height: 6
                  }}
                  className="pt-[12px] pr-[30px] pb-[12px] pl-[22px] bg-gray-200 rounded-[5px] text-[16px] font-lexend font-normal leading-[20px] text-global-18 w-full"
                />
                {/* Message TextArea */}
                <Textarea
                  placeholder="Write Message.."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  className="pt-[24px] pr-[20px] pb-[12px] pl-[20px] bg-gray-200 rounded-[5px] text-[16px] font-lexend font-normal leading-[20px] text-global-18 w-full"
                />
                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="pt-[18px] pr-[44px] pb-[18px] pl-[34px] bg-global-2 rounded-[5px] text-[18px] font-lexend font-semibold leading-[23px] text-right text-global-15 w-full flex items-center justify-center gap-[6px]"
                >
                  Send Message
                  <img 
                    src="/images/img__white_a700.svg" 
                    alt="Send Icon" 
                    className="w-[10px] h-[16px]"
                    width={10}
                    height={16}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full mt-[50px]">
        <div className="flex flex-row justify-start items-center w-full">
          <iframe
            title="Amaramba Capital Location Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=32.5729,-25.9692,32.6029,-25.9392&layer=mapnik&marker=-25.9542,32.5879"
            className="w-full h-[400px] sm:h-[500px] md:h-[564px] border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      {/* FAQ Section */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-[50px]">
        <div className="flex flex-col gap-[40px] justify-start items-center w-full">
          {/* FAQ Header */}
          <div className="flex flex-col gap-[6px] justify-start items-start w-full">
            <span className="text-[16px] sm:text-[18px] font-lexend font-normal leading-[20px] sm:leading-[23px] text-global-4">
              Security
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] md:leading-[60px] text-global-6">
              Global Questions
            </h2>
          </div>
          {/* FAQ Items */}
          <div className="flex flex-col gap-[4px] justify-start items-center w-full">
            {faqItems.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* FAQ Item */}
                <div className={`w-full ${item.isOpen ? 'bg-global-8' : ''}`}>
                  <div className="flex flex-row justify-start items-center pt-[10px] pb-[10px] w-full">
                    <div className="flex flex-row justify-center items-center w-full">
                      <div className="flex flex-col justify-start items-start flex-1">
                        <h3 className="text-[18px] sm:text-[20px] font-lexend font-bold leading-[22px] sm:leading-[25px] text-global-1">
                          {item.question}
                        </h3>
                        {/* Answer - Only show when expanded */}
                        {item.isOpen && item.answer && (
                          <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-[16px]">
                            <p className="text-[16px] sm:text-[20px] font-lexend font-normal leading-[20px] sm:leading-[24px] text-global-17 w-full lg:w-[56%] mt-[16px] lg:self-end">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                      <button 
                        onClick={() => toggleFAQ(item.id)}
                        className={`w-[48px] h-[48px] rounded-[24px] p-[14px] flex justify-center items-center ml-4 ${
                          item.isOpen 
                            ? 'bg-global-2' 
                            : 'bg-global-10'
                        }`}
                      >
                        <img 
                          src={item.isOpen ? "/images/img_xmark.svg" : "/images/img_plus.svg"}
                          alt={item.isOpen ? "Close" : "Expand"}
                          className="w-full h-full"
                          width={item.isOpen ? 20 : 16}
                          height={item.isOpen ? 20 : 16}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Divider - Don't show after the last item */}
                {index < faqItems.length - 1 && (
                  <div className="w-full h-[1px] bg-global-9"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default ContactPage;