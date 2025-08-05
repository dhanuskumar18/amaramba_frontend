"use client";
import React, { useState } from "react";
import Image from "next/image";

// import Header from '@/components/common/Header';
// import Footer from '@/components/common/Footer';
// import BreadCrumb from '@/components/ui/BreadCrumb';
import Footer from "@/components/Footer";
const CompanyProfilePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const breadcrumbItems = [
    { label: "About", href: "/about" },
    { label: "Company", active: true },
  ];
  const steps = [
    {
      number: "1",
      title: "STEP ONE: Complete an online or physical",
      description: "mandate. www.amarambacapital.co.mz/openaccount.",
    },
    {
      number: "2",
      title:
        "STEP TWO: Send your KYC Documents to info@amarambacapital.co.mz. These include",
      description:
        "• A certified copy of your ID\n• Proof of residential address\n• Proof of bank account not older than three months\n• Proof of tax number",
    },
    {
      number: "3",
      title:
        "STEP THREE: Fund your account using the banking details that will be emailed to Torne-se um cliente ACD em três etapas:",
      description: "",
    },
  ];
  const faqItems = [
    {
      question: "What are Financial Markets?",
      answer:
        "Financial markets, from the name itself, are a type of marketplace that provides an avenue for the sale and purchase of assets such as bonds, stocks, foreign exchange, and derivatives.",
    },
    {
      question: "What is Capital Market?",
      answer:
        "Capital markets are financial markets that bring buyers and sellers together to trade stocks, bonds, currencies, and other financial assets.",
    },
    {
      question: "What is a dividend?",
      answer:
        "A dividend is a distribution of profits by a corporation to its shareholders, usually paid in cash or additional shares.",
    },
  ];
  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };
  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="w-full bg-main">
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-main pt-[96px] pb-[20px]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-[56px]">
            <div className="flex flex-col lg:flex-row justify-start items-start w-full">
              <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[90%]">
                  <div className="flex flex-col gap-[16px] justify-start items-start w-full lg:flex-1 lg:sticky lg:top-0 lg:h-screen ">
                    <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                      {/* <BreadCrumb items={breadcrumbItems} className="w-full" /> */}
                      <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-lexend font-medium leading-[24px] sm:leading-[28px] lg:leading-[30px] text-justify capitalize text-blue-400 w-full">
                        About Company
                      </p>
                      <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px] text-dark">
                        Who We Are
                      </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-end w-full lg:w-[90%] gap-8 lg:gap-0">
                      <div className="w-full bg-[linear-gradient(140deg,#13b4fb_0%,#041e3f_100%)] rounded-[30px] p-[46px] flex justify-center items-end mt-[12px] ">
                        <Image
                          alt="Amaramba Logo"
                          className=""
                          height={300}
                          src="/images/img_logo_inverse_2_1.png"
                          width={300}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] justify-start items-center w-full lg:w-[48%] mt-[6px] lg:mt-0 lg:pl-8">
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-jakarta font-medium leading-[24px] sm:leading-[28px] lg:leading-[30px] text-justify capitalize text-dark w-full">
                      Amaramba Capital Dealer – Sociedade Financeira de
                      Corretagem, SA (ACD) provides cross-asset, domestic
                      securities trading, as well as market intelligence
                      services to institutional, corporate, and retail clients.
                    </p>
                    <div className="text-[14px] sm:text-[15px] lg:text-[16px] font-jakarta font-medium leading-[24px] sm:leading-[28px] lg:leading-[30px] text-justify capitalize text-dark w-full">
                      <p className="mb-4">
                        With the transformation of Amaramba Capital Broker – ACB
                        in June 2022 Amaramba Capital Dealer – ACD has now
                        positioned itself as Mozambique's largest full service
                        brokerage & dealership and non-bank advisory
                        institution.
                      </p>
                      <p className="mb-4">
                        Amaramba Capital Broker – ACB was a full-service
                        brokerage entity affiliated on the Mozambican Stock
                        Exchange (BVM), member of Depository & Settlement
                        Services Scheme (CVM) with a history dating back to the
                        2019. ACB adds over four years of excellence in
                        financial services across Mozambique's Capital and
                        Monetary Markets up to its transformation in June 2022
                        to Amaramba Capital Dealer – ACD leading brokerage &
                        dealership and investment advisory platforms with the
                        aim to increase over time its foothold in Mozambique.
                      </p>
                      <p className="mb-4">
                        ACD's core strategy is underpinned by an unwavering
                        focus on exceeding client expectations through unmatched
                        excellence across the financial services spectrum by
                        providing cross-asset, domestic securities trading, as
                        well as market intelligence services to institutional,
                        corporate, and retail clients. With some 4 years'
                        experience as a licensed firm under stockbroking scheme,
                        ACD has a team of qualified investment dealers and
                        research analysts which will help you make informed
                        decisions for your investments on the domestic capital
                        market with emphasis to primary and secondary markets
                        through Stock Exchange of Mozambique (Bolsa de Valores
                        de Moçambique – BVM).
                      </p>
                      <p className="mb-4">
                        ACD services cover trade execution, intermediary
                        settlement on behalf of the Central Depository &
                        Settlement (Central de Valores Mobiliários – CVM),
                        intermediary custodian services through the CVM, lead
                        brokerage/dealership services for an IPO (primary
                        market), additional listing or takeovers. In addition to
                        our share trading related services, we also cover
                        in-depth market analysis with the help of our research
                        team who regularly produce an economic perspective on
                        key market sectors and company valuations.
                      </p>
                      <p className="mb-4">
                        We are fully aware that timely knowledge and
                        responsiveness are key catalysts to stay ahead of
                        markets. Hence, our fundamental research and our near
                        intuitive feel for prevailing market conditions helps us
                        guide our clients towards optimizing their investment
                        portfolios.
                      </p>
                      <p className="mb-4">
                        ACD is regulated by the Bank of Mozambique (BM) in
                        Mozambique. The company is a member of the Stock
                        Exchange of Mozambique and participant of the Central
                        Depository & Settlement (CVM).
                      </p>
                      <p className="mb-4">
                        Since 2019, we have created and developed our own market
                        niche, which we manage in-house.
                      </p>
                      <p>
                        In 2022, the brokerage firm (Amaramba Capital Broker –
                        Sociedade Corretora, Ltd – ACB) was transformed into a
                        brokerage and dealership entity and rebranding to
                        Amaramba Capital Dealer – Sociedade Financeira de
                        Corretagem, SA), with the aim to increase over time its
                        foothold in Mozambique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Values Grid Section */}
        <section className="w-full bg-main py-[20px] mt-[50px]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-[162px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] w-full">
              {/* Purpose */}
              <div className="group flex flex-col gap-[20px] justify-start items-start w-full bg-light-gray hover:bg-white border border-[#D2D2D2] rounded-[6px] p-[26px] sm:p-[36px] lg:p-[56px_26px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <Image
                  alt="Purpose Icon"
                  className="w-[44px] h-[44px] transition-transform duration-300 ease-in-out group-hover:scale-150"
                  height={44}
                  src="/images/img_octicon_goal_16.svg"
                  width={44}
                />
                <div className="flex flex-col gap-[12px] justify-start items-start w-full mb-[10px]">
                  <h3 className="text-[20px] sm:text-[20px] font-urbanist font-semibold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left capitalize text-black transition-transform duration-300 ease-in-out group-hover:scale-110">
                    purpose
                  </h3>
                  <p className="text-[10px] sm:text-[14px]  font-lexend font-medium leading-[24px] sm:leading-[26px] lg:leading-[29px] text-left text-light w-full">
                    Committed to reshape capital market in Mozambique and
                    improve the financial well-being of its people
                  </p>
                </div>
              </div>
              {/* Vision */}
              <div className="group flex flex-col gap-[20px] justify-start items-start w-full bg-light-gray hover:bg-white border border-[#D2D2D2] rounded-[6px] p-[26px] sm:p-[36px] lg:p-[10px_26px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <Image
                  alt="Vision Icon"
                  className="w-[44px] h-[44px] mt-[44px] transition-transform duration-300 ease-in-out group-hover:scale-150"
                  height={44}
                  src="/images/img_mingcute_eye_fill.svg"
                  width={44}
                />
                <div className="flex flex-col gap-[12px] justify-start items-start w-full">
                  <h3 className="text-[20px] sm:text-[20px] font-urbanist font-semibold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left capitalize text-black transition-transform duration-300 ease-in-out group-hover:scale-110">
                    vision
                  </h3>
                  <p className="text-[10px] sm:text-[14px]  font-lexend font-medium leading-[24px] sm:leading-[26px] lg:leading-[29px] text-left text-light w-full">
                    Emerge as the premier Mozambican primary dealer with
                    best-in-class global practice in securities trading,
                    products innovation, and customer service to facilitate the
                    financial well-being of the society.
                  </p>
                </div>
              </div>
              {/* Mission */}
              <div className="group flex flex-col gap-[28px] justify-start items-start w-full bg-light-gray hover:bg-white border border-[#D2D2D2] rounded-[6px] p-[24px] sm:p-[30px] lg:p-[36px_24px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <Image
                  alt="Mission Icon"
                  className="w-[44px] h-[44px] mt-[10px] transition-transform duration-300 ease-in-out group-hover:scale-150"
                  height={44}
                  src="/images/img_solar_flag_bold.svg"
                  width={44}
                />
                <div className="flex flex-col gap-[12px] justify-start items-start w-full">
                  <h3 className="text-[20px] sm:text-[20px] font-urbanist font-semibold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left capitalize text-black transition-transform duration-300 ease-in-out group-hover:scale-110">
                    Mission
                  </h3>
                  <p className="text-[10px] sm:text-[14px]  font-lexend font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-left text-light w-full">
                    To unleash the true potential of wealth to enhance the
                    wealth-generating capability of our client base in a
                    globalizing environment
                  </p>
                </div>
              </div>
              {/* Values */}
              <div className="group flex flex-col gap-[16px] justify-start items-start w-full bg-light-gray hover:bg-white border border-[#D2D2D2] rounded-[6px] p-[26px] sm:p-[32px] lg:p-[38px_26px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <Image
                  alt="Values Icon"
                  className="w-[44px] h-[44px] mt-[20px] transition-transform duration-300 ease-in-out group-hover:scale-150"
                  height={44}
                  src="/images/img_ic_round_star.svg"
                  width={44}
                />
                <div className="flex flex-col gap-[12px] justify-start items-start w-full">
                  <h3 className="text-[20px] sm:text-[20px] font-urbanist font-semibold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left capitalize text-black transition-transform duration-300 ease-in-out group-hover:scale-110">
                    values
                  </h3>
                    <p className="text-[10px] sm:text-[14px]  font-lexend font-medium leading-[24px] sm:leading-[26px] lg:leading-[29px] text-left text-light w-full">
                    ACD is committed to core values - Integrity, Customer
                    Centricity, Trust, Respect, Passion for Excellence, Teamwork
                  </p>
                </div>
              </div>
              {/* Corporate Social Responsibility */}
              <div className="group flex flex-col gap-[16px] justify-center items-start w-full bg-light-gray hover:bg-white border border-[#D2D2D2] rounded-[6px] p-[56px] sm:p-[62px] lg:p-[68px_56px] lg:col-span-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                <Image
                  alt="CSR Icon"
                  className="w-[34px] h-[34px] transition-transform duration-300 ease-in-out group-hover:scale-150"
                  height={34}
                  src="/images/img_vector_light_blue_a400.svg"
                  width={34}
                />
                <h3 className="text-[20px] sm:text-[20px] font-urbanist font-semibold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-left capitalize text-black transition-transform duration-300 ease-in-out group-hover:scale-110">
                  Corporate social responsibility
                </h3>
                <p className="text-[10px] sm:text-[14px]   font-lexend font-medium leading-[24px] sm:leading-[26px] lg:leading-[29px] text-left text-light w-full">
                  Corporate Social Responsibility (CSR) in ACD is aligned with
                  its tradition of creating wealth in the community with a
                  two-pronged focus on Education & Health. Besides planning on
                  funding charitable ......
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="w-full bg-main py-[76px]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-[56px]">
            <div className="flex flex-col gap-[96px] justify-start items-center w-full lg:w-[84%] mx-auto">
              {/* Section Header */}
              <div className="flex flex-col gap-[16px] justify-start items-center w-auto">
                <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-lexend font-normal leading-[6px] sm:leading-[7px] lg:leading-[8px] text-left text-primary-blue">
                  Services
                </span>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px] text-center text-gray">
                  What Our Clients Are Saying
                </h2>
              </div>
              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
                {/* Trading Service */}
                <div className="bg-light-gray rounded-[30px] mr-10 p-[32px] relative">
                  <div className="flex items-start gap-[20px]">
                    <div className="flex-shrink-0">
                      <div className="absolute top-[100px] left-[-50px] bg-primary-light-blue rounded-[30px] p-[50px] w-[150px] h-[150px] flex items-center justify-center">
                        <Image
                          alt="Trading Icon"
                          className="w-[100px] h-[100px]"
                          height={100}
                          src="/images/img_streamline_ulti.svg"
                          width={100}
                        />
                      </div>
                    </div>
                    <div className="p-10 pl-20 flex-1">
                      <h3 className=" text-[20px] sm:text-[22px] lg:text-[24px] font-lexend font-semibold leading-[25px] sm:leading-[28px] lg:leading-[30px] text-left text-black mb-[12px]">
                        Trading
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[28px] lg:leading-[30px] text-left text-light mb-[16px]">
                        We offer a full-service brokerage/dealership and
                        execution desk across multiple asset classes driven by
                        the relationship we have with our clients since 2019.
                      </p>
                      <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-left text-primary-light-blue cursor-pointer hover:underline">
                        Read more
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-[16px] right-[16px] text-primary-light-blue text-[32px] font-bold">
                    "
                  </div>
                </div>

                {/* Research Service */}
                <div className="bg-light-gray ml-10 rounded-[30px] p-[32px] relative">
                  <div className="flex items-start gap-[20px]">
                    <div className="flex-shrink-0">
                      <div className="absolute top-[100px]  left-[-50px] bg-primary-light-blue rounded-[30px] p-[50px] w-[150px] h-[150px] flex items-center justify-center">
                        <Image
                          alt="Research Icon"
                          className="w-[100px] h-[100px]"
                          height={100}
                          src="/images/img_material_symbols_tab_search.svg"
                          width={100}
                        />
                      </div>
                    </div>
                    <div className=" p-10 pl-20  flex-1">
                      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-lexend font-semibold leading-[25px] sm:leading-[28px] lg:leading-[30px] text-left text-black mb-[12px]">
                        Research
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[28px] lg:leading-[30px] text-left text-light mb-[16px]">
                        ACD offers avant-garde in-depth coverage of the
                        Mozambique securities market. We produce regular market
                        wraps covering both the equity and debt instruments.
                      </p>
                      <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-left text-primary-light-blue cursor-pointer hover:underline">
                        Read more
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-[16px] right-[16px] text-primary-light-blue text-[32px] font-bold">
                    "
                  </div>
                </div>

                {/* Sponsor and Corporate Access */}
                <div className="bg-light-gray mr-10 rounded-[30px] p-[32px] relative">
                  <div className="flex items-start gap-[20px]">
                    <div className="flex-shrink-0">
                      <div className="absolute top-[100px]  left-[-50px] bg-primary-light-blue rounded-[30px] p-[50px] w-[150px] h-[150px] flex items-center justify-center">
                        <Image
                          alt="Corporate Access Icon"
                          className="w-[100px] h-[100px]"
                          height={100}
                          src="/images/img_academicons_ope.svg"
                          width={100}
                        />
                      </div>
                    </div>
                    <div className=" p-10 pl-20  flex-1">
                      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-lexend font-semibold leading-[25px] sm:leading-[28px] lg:leading-[30px] text-left text-black mb-[12px]">
                        Sponsor and Corporate Access
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[28px] lg:leading-[30px] text-left text-light mb-[16px]">
                        We have been pioneers in the market for operating in the
                        capacity of independent stockbroking firm, dealing with
                        equity and debt instruments listed on the Stock Exchange
                        of Mozambique.
                      </p>
                      <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-left text-primary-light-blue cursor-pointer hover:underline">
                        Read more
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-[16px] right-[16px] text-primary-light-blue text-[32px] font-bold">
                    "
                  </div>
                </div>

                {/* Account Options */}
                <div className="bg-light-gray ml-10 rounded-[30px] p-[32px] relative">
                  <div className="flex items-start gap-[20px]">
                    <div className="flex-shrink-0">
                      <div className="absolute top-[100px]  left-[-50px] bg-primary-light-blue rounded-[30px] p-[50px] w-[150px] h-[150px] flex items-center justify-center">
                        <Image
                          alt="Account Options Icon"
                          className="w-[100px] h-[100px]"
                          height={100}
                          src="/images/img_mdi_account_cog.svg"
                          width={100}
                        />
                      </div>
                    </div>
                    <div className=" p-10 pl-20    flex-1">
                      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-lexend font-semibold leading-[25px] sm:leading-[28px] lg:leading-[30px] text-left text-black mb-[12px]">
                        Account Options
                      </h3>
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[28px] lg:leading-[30px] text-left text-light mb-[16px]">
                        You can choose the level of service you require from
                        your ACD representative, depending on how involved you
                        need us to be in each buy and sell decision.
                      </p>
                      <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-left text-primary-light-blue cursor-pointer hover:underline">
                        Read more
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-[16px] right-[16px] text-primary-light-blue text-[32px] font-bold">
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile App Section */}
        <section className="w-full bg-main py-[68px]">
          <div className="relative w-full">
            <div className="flex flex-row justify-start items-center   bg-[linear-gradient(140deg,#041e3f_0%,#13b4fb_100%)] h-[55vh] mt-36 m-10 rounded-[30px]">
              <Image
                alt="Mobile App Background"
                className="w-full sm:w-[60%] lg:w-[40%] h-auto absolute bottom-0"
                height={600}
                src="/images/img_image_44.png"
                width={600}
              />
              <div className="flex flex-row justify-center items-end w-full">
                <div className="flex flex-row justify-end items-center w-[100%] ">
                  <Image
                    alt="App Logo"
                    className="w-[180px] h-[120px] sm:w-[220px] sm:h-[150px] lg:w-[260px] lg:h-[178px] "
                    height={178}
                    src="/images/img_logo_inverse_2_1.png"
                    width={260}
                  />
                  <div className="flex flex-col  items-start w-[40%] p-10 py-20">
                    <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-lexend font-normal leading-[6px] sm:leading-[7px] lg:leading-[8px] text-left text-white ">
                      About Company
                    </span>
                    <h3 className=" mt-3 text-[24px] sm:text-[30px] lg:text-[36px] font-lexend font-medium leading-[30px] sm:leading-[38px] lg:leading-[45px] text-left text-white w-[82%] ">
                      Connected With All The Banks You Need
                    </h3>
                    <p className=" text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[26px] lg:leading-[29px] text-left text-white w-[80%]  ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button
                      // variant="primary"
                      className="mt-3 bg-white text-black rounded-[30px] px-[24px] sm:px-[30px] lg:px-[30px] py-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-lexend font-normal leading-[18px] sm:leading-[19px] lg:leading-[20px] text-center gap-[8px]  hover:bg-gray-100 transition-colors flex items-center justify-center"
                    >
                      Get Started Now
                      <Image
                        alt="Arrow"
                        className="w-[12px] h-[12px]"
                        height={12}
                        src="/images/img_vector_black_900.svg"
                        width={12}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Securities Market Overview Section */}
        <section className="w-full bg-main py-[150px] pb-[50px] overflow-hidden">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 ">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex flex-row justify-start items-start w-full  ">
                <div className="flex flex-row justify-between items-start w-full   ">
                  <Image
                    alt="Securities Market"
                    className="w-full sm:w-[40%] lg:w-[34%] h-auto rounded-[22px] mb-[150px] relative left-[-100px] top-[-120px]"
                    height={416}
                    src="/images/img_7133672_323_1.png"
                    width={448}
                  />
                  <div className="flex flex-col gap-[40px] justify-center items-center w-full sm:w-[55%] lg:w-[70%] ">
                    <div className="flex flex-col gap-[4px] justify-start items-center w-full">
                      <span className=" text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[20px] sm:leading-[22px] lg:leading-[23px] text-center text-primary-light-blue">
                        About Company
                      </span>
                      <h2 className="text-center text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px]  text-dark-gray">
                        Securities Market Overview
                      </h2>
                    </div>
                    <div className="flex flex-col gap-[48px] justify-start items-center w-full mb-[4px]">
                      <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-center text-medium w-full">
                        The Mozambican securities market is regulated by the
                        Bank of Mozambique (BM).
                      </p>
                      <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-center text-medium w-[90%]">
                        The Stock Exchange of Mozambique (BVM) is the sole
                        securities exchange in Mozambique and specializes on
                        equity and fixed income securities.
                        <br />
                        The BVM is still a 'traditional' market whereby sellers
                        cannot 'short sell' (i.e. sell securities that they do
                        not yet own) and buyers have to take delivery of
                        securities that they purchase.
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  alt="Market Chart"
                  className="w-full sm:w-[30%] lg:w-[22%]  rounded-[22px] self-end relative right-[-50px]  "
                  height={416}
                  src="/images/img_124650_1.png"
                  width={448}
                />
              </div>
              <div className=" ml-[100px] ">
                <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px] text-left text-secondary">
                  Regulatory
                </h3>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-left text-primary w-[38%] mt-[16px]">
                  Board Charter; Organizational Structure; Biographies of
                  Directors and Company Secretary; Audited Financial Statements
                  and Fee Structure.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Open Account Section */}
        <section className="w-full bg-light-blue py-[34px] ">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-[44px] justify-start items-center w-full">
              <div className="flex flex-col gap-[6px] justify-start items-center w-auto px-4 sm:px-6 lg:px-[56px]">
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px] text-center text-secondary">
                  Open An Account
                </h2>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[20px] sm:leading-[22px] lg:leading-[23px] text-center text-primary mb-[18px]">
                  Become a ACD client in three steps
                </p>
              </div>
              {/* Steps Slider */}
              <div className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-row justify-center items-center w-full px-4 sm:px-6 lg:px-[56px]">
                  <div className="flex flex-row justify-center items-center w-full max-w-[800px]">
                    <button
                      className="w-[70px] h-[70px] bg-gray-light rounded-[34px] p-[16px] flex items-center justify-center hover:bg-gray-300 transition-colors"
                      onClick={prevStep}
                    >
                      <Image
                        alt="Previous"
                        className="w-[38px] h-[38px]"
                        height={38}
                        src="/images/img_button.svg"
                        width={38}
                      />
                    </button>
                    <div className="flex flex-col gap-[28px] justify-start items-center w-full px-4 sm:px-6 lg:px-[56px] mb-[8px]">
                      <div className="w-[64px] h-[64px] bg-primary-blue rounded-[32px] flex items-center justify-center">
                        <span className="text-[20px] sm:text-[22px] lg:text-[25px] font-lexend font-normal leading-[25px] sm:leading-[28px] lg:leading-[32px] text-center text-white">
                          {steps[currentStep].number}
                        </span>
                      </div>
                      <div className="flex flex-col gap-[10px] justify-start items-center w-full">
                        <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-lexend font-bold leading-[20px] sm:leading-[22px] lg:leading-[25px] text-center text-secondary">
                          {steps[currentStep].title}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] text-center text-muted whitespace-pre-line">
                          {steps[currentStep].description}
                        </p>
                      </div>
                    </div>
                    <button
                      className="w-[70px] h-[70px] bg-gray-light rounded-[34px] p-[16px] flex items-center justify-center hover:bg-primary-light-blue transition-colors"
                      onClick={nextStep}
                    >
                      <Image
                        alt="Next"
                        className="w-[38px] h-[38px]"
                        height={38}
                        src="/images/img_button_blue_500.svg"
                        width={38}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="w-full bg-main py-[134px]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-[56px]">
            <div className="flex flex-col gap-[100px] justify-start items-center w-[94%] mx-auto">
              <div className="flex flex-row justify-start items-center w-full">
                <div className="flex flex-col gap-[8px] justify-start items-end w-full px-4 sm:px-6 lg:px-[56px] pr-[140px] mb-[8px]">
                  <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[20px] sm:leading-[22px] lg:leading-[23px] text-center text-primary-light-blue mr-[450px]">
                    Meet the Team
                  </span>
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px] text-left text-secondary">
                    Meet our Directors and Company Secretary
                  </h2>
                </div>
                <div className="flex flex-col justify-start items-center w-[10%]">
                  <div className="flex flex-row justify-center items-start w-full">
                    <div className="flex flex-col justify-start items-end w-full">
                      <div className="flex flex-row justify-end items-center w-full">
                        <div className="relative ">
                       
                          <button >
                              <Image
                                 alt="Download Icon"
                                 height={50}
                                 src="/images/downloadtext.png"
                                 width={50}
                               />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team Grid */}
              <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-[144px]">
                <div className="flex flex-col sm:flex-row gap-[18px] justify-center items-center w-full mr-[8px]">
                  <div className="flex flex-col justify-center items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="Joaquim Bazar"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[304px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={380}
                        src="/images/img_joaquim_bazar_1.png"
                        width={304}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col justify-center items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">Joaquim Bazar</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="Baptista Machava"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[298px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={372}
                        src="/images/img_baptista_machava.png"
                        width={298}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">Baptista Machava</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="Renata Santos"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[304px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={380}
                        src="/images/img_renata_santos_1.png"
                        width={304}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">Renata Santos</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="Fernando Cuna"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[304px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={380}
                        src="/images/img_fernando_cuna_1.png"
                        width={304}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">Fernando Cuna</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-[18px] justify-start items-center w-full">
                  <div className="flex flex-col justify-start items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="Crice"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[304px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={380}
                        src="/images/img_crice_foto_1.png"
                        width={304}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">Crice</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="Elida Manhenhan"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[304px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={380}
                        src="/images/img_elida_manhenhan.png"
                        width={304}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">Elida Manhenhan</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="Cyrus dos Anjos"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[308px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={380}
                        src="/images/img_cyrus_dos_anjos.png"
                        width={308}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">Cyrus dos Anjos</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-center w-full sm:w-auto p-[14px] sm:p-[16px] lg:p-[18px]">
                    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105">
                      <Image
                        alt="H Zimba"
                        className="w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[300px] h-auto rounded-[20px] transition-transform duration-300 group-hover:scale-105"
                        height={376}
                        src="/images/img_h_zimba_photo_1_scaled.png"
                        width={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex flex-col items-center justify-center py-8 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[20px]">
                        <div className="flex flex-col items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-white font-medium">View Detail</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold px-4 text-center absolute bottom-8">H Zimba</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Board Charter Section */}
        <section className="w-full bg-main py-[110px]">
          <div className="w-full max-w-[1720px] mx-auto ">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col justify-start items-center w-[32%] mt-[4px]">
                <div className="w-full ">
                  <Image
                    alt="Board Charter"
                    className=" "
                    height={600}
                    src="/images/building.png"
                    width={620}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[34px] justify-start items-start w-[60%] ">
                <div className="flex flex-col gap-[16px] justify-start items-start w-full">
                  <div className="flex flex-col gap-[6px] justify-start items-start w-full ">
                    <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[20px] sm:leading-[22px] lg:leading-[23px] text-left text-primary-light-blue">
                      Regulatory
                    </span>
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px] text-left text-secondary">
                      Board Charter
                    </h2>
                  </div>
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-dm-sans font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-justify text-light-gray w-[88%]">
                    AMARAMBA CAPITAL DEALER, SA is a Mozambican company and the
                    first licensed independent stock broker by the Central Bank
                    (Capital Market Authority), which is engaged in the business
                    of stock brokerage, bond dealing and financial advisory.
                    <br />
                    <br />
                    A key flow of the system and one of the Capital Market
                    maintains a low profile in having a vivid and sound Capital
                    Market. Notably, all major banks have their own brokerage
                    arms or at least hold the respective licenses, however, the
                    Expressive part of major banks has its own brokerage arms
                    only by a way of addition to the core business.
                    <br />
                    <br />
                    Being the first independent broker firm operating in
                    Mozambique, we intend to catch the same market pool merely
                    for capital market as opposite to commercial banks (for
                    those looking for funding and those investing).
                    <br />
                    <br />
                    The Board of Directors is responsible for the management of
                    the company. The current members of the Board of Directors
                    were elected at the General Meeting on dd:mm 2022, having xx
                    executive members, of whom xx are independent directors. The
                    members of the Board of Directors have recognized skills,
                    academic background, and professional experience,
                    considering the activities intended by the Company and the
                    strategy defined for future years.
                  </p>
                </div>
                <div className="flex flex-col gap-[38px] justify-start items-center w-[48%]">
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[18px] sm:text-[19px] lg:text-[20px] font-lexend font-medium leading-[22px] sm:leading-[24px] lg:leading-[25px] text-left text-primary-light-blue">
                      Download The 2020 External Audit
                    </span>
                    <Image
                      alt="Download"
                      className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] ml-[48px] self-end"
                      height={24}
                      src="/images/img_line_md_download_loop_gray_900_04.svg"
                      width={24}
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[18px] sm:text-[19px] lg:text-[20px] font-lexend font-medium leading-[22px] sm:leading-[24px] lg:leading-[25px] text-left text-primary-light-blue">
                      Download The 2020 External Audit
                    </span>
                    <Image
                      alt="Download"
                      className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] ml-[50px]"
                      height={24}
                      src="/images/img_line_md_download_loop_gray_900_04.svg"
                      width={24}
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[18px] sm:text-[19px] lg:text-[20px] font-lexend font-medium leading-[22px] sm:leading-[24px] lg:leading-[25px] text-left text-primary-light-blue">
                      Download The 2020 External Audit
                    </span>
                    <Image
                      alt="Download"
                      className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] ml-[50px]"
                      height={24}
                      src="/images/img_line_md_download_loop_gray_900_04.svg"
                      width={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline Section */}
        <section className="w-full bg-main py-[50px]">
          <div className="w-full max-w-[1720px] mx-auto ">
            <div className="flex flex-col gap-[18px] justify-start items-center w-full">
              <div className="flex flex-row justify-between items-start w-full max-w-[1720px]">
                <div className=" ml-5 flex flex-row justify-center items-center w-[16%] bg-section border border-[#c7c7c7] rounded-[6px] p-[6px] sm:p-[8px] lg:p-[12px] ">
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-left text-primary w-full">
                    Late in 2022 ,repositioning from broker to dealer ( primary
                    Dealer)
                    <br />
                    and appointed as specialist government bonds trader
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-[16%] bg-section border border-[#c7c7c7] rounded-[6px] p-[10px] self-end">
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-left text-primary w-[94%]">
                    Corporate certificate and Special regime
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-[16%] bg-section border border-[#c7c7c7] rounded-[6px] p-[6px] sm:p-[8px] lg:p-[12px]">
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-left text-primary w-full">
                    Project presentation to Central Bank Executive and DRL
                    (Regulatory and Licensing Division) Operation Risk Framework
                  </p>
                </div>
                <button className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[20px] sm:leading-[22px] lg:leading-[23px] text-left text-primary bg-section border border-[#c7c7c7] rounded-[6px] px-[20px] sm:px-[27px] lg:px-[34px] py-[20px] self-end mb-[22px] hover:bg-gray-300 transition-colors">
                  Project Concept
                </button>
              </div>
              <div className="flex flex-row justify-between items-end w-full px-[94px] py-2">
                <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-lexend font-bold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-primary mt-[12px] ml-[14px]">
                  2022
                </span>
                <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-lexend font-bold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-primary mt-[12px]">
                  2018
                </span>
                <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-lexend font-bold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-primary mt-[12px]">
                  2016
                </span>
                <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-lexend font-bold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-primary mt-[12px]">
                  2014
                </span>
              </div>
            </div>
            {/* Timeline Line */}
            <div className="relative w-full mt-[16px]">
              <div className="w-full h-[2px] bg-primary-light-blue-alpha" />
              <div className="flex flex-row justify-between items-center w-full absolute top-[-24px] px-[94px]">
                <div className="w-[48px] h-[48px] bg-primary-light-blue border-[10px] border-[#e7f7ff] rounded-[24px] ml-[14px]" />
                <div className="w-[48px] h-[48px] bg-primary-light-blue border-[10px] border-[#e7f7ff] rounded-[24px]" />
                <div className="w-[48px] h-[48px] bg-primary-light-blue border-[10px] border-[#e7f7ff] rounded-[24px]" />
                <div className="w-[48px] h-[48px] bg-primary-light-blue border-[10px] border-[#e7f7ff] rounded-[24px]" />
                <div className="w-[48px] h-[48px] bg-primary-light-blue border-[10px] border-[#e7f7ff] rounded-[24px]" />
                <div className="w-[48px] h-[48px] bg-primary-light-blue border-[10px] border-[#e7f7ff] rounded-[24px]" />
                <div className="w-[48px] h-[48px] bg-primary-light-blue border-[10px] border-[#e7f7ff] rounded-[24px]" />
              </div>
            </div>
            {/* Years below the timeline */}
            <div className="flex flex-row justify-between items-center w-full max-w-[1262px] mx-auto mt-[36px] px-[94px]">
              <div className="w-[48px]" />
              <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-lexend font-bold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-primary">
                2019
              </span>
              <div className="w-[350px]" />
              <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-lexend font-bold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-primary">
                2017
              </span>
              <div className="w-[350px]" />
              <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-lexend font-bold leading-[30px] sm:leading-[35px] lg:leading-[40px] text-left text-primary">
                2015
              </span>
              <div className="w-[48px]" />
            </div>

            <div className="flex flex-row justify-start items-start w-full max-w-[1414px] mx-auto mt-[36px]">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-row justify-center items-center w-[30%] bg-section border border-[#c7c7c7] rounded-[6px] p-[4px] sm:p-[8px] lg:p-[12px]">
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-left text-primary w-[96%]">
                    Securities Exchange co-ordination and Kickoff
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-[32%] bg-section border border-[#c7c7c7] rounded-[6px] p-[10px] mr-[210px]">
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-left text-primary w-[96%]">
                    Follow up meetings and exchange of several information with
                    Regulatory and Licensing Division, Central Bank
                    Authorization by Central Bank
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-[30%] bg-section border border-[#c7c7c7] rounded-[6px] p-[6px] sm:p-[8px] lg:p-[10px]">
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] text-left text-primary w-full ml-[4px]">
                  Market Intelligence
                  <br />
                  Project Information Pack
                  <br />
                  License Application
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="w-full bg-main py-[100px]">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-[70px]">
            <div className="flex flex-col gap-[210px] justify-start items-center w-full">
              <div className="flex flex-col gap-[40px] justify-start items-center w-full">
                <div className="flex flex-col gap-[6px] justify-start items-start w-full">
                  <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-lexend font-normal leading-[20px] sm:leading-[22px] lg:leading-[23px] text-left text-primary-light-blue">
                    Let Us Help You
                  </span>
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-lexend font-medium leading-[40px] sm:leading-[50px] lg:leading-[60px] text-left text-secondary">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="flex flex-col gap-[6px] justify-start items-center w-full">
                  {faqItems.map((item, index) => (
                    <div key={index} className="w-full">
                      {index > 0 && (
                        <div className="w-full h-[1px] bg-border" />
                      )}
                      <div className="flex flex-row justify-start items-center w-full py-[10px] sm:py-[12px] lg:py-[14px] bg-white">
                        <div className="flex flex-row justify-between items-center w-full">
                          <h3 className="text-[18px] sm:text-[19px] lg:text-[20px] font-lexend font-bold leading-[22px] sm:leading-[24px] lg:leading-[25px] text-left text-black mb-[6px] self-end">
                            {item.question}
                          </h3>
                          <button
                            className="w-[44px] h-[44px] sm:w-[46px] sm:h-[46px] lg:w-[48px] lg:h-[48px] bg-gray-medium rounded-[24px] p-[16px] flex items-center justify-center hover:bg-primary-light-blue transition-colors"
                            onClick={() => toggleFAQ(index)}
                          >
                            <Image
                              alt={expandedFAQ === index ? "Close" : "Open"}
                              className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px] lg:w-[16px] lg:h-[16px]"
                              height={16}
                              src={
                                expandedFAQ === index
                                  ? "/images/img_xmark.svg"
                                  : "/images/img_plus.svg"
                              }
                              width={16}
                            />
                          </button>
                        </div>
                      </div>
                      {expandedFAQ === index && (
                        <div className="flex flex-row justify-start items-center w-full py-[36px] bg-white">
                          <div className="flex flex-row justify-start items-center w-full">
                            <p className="text-[18px] sm:text-[19px] lg:text-[20px] font-lexend font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] text-left text-alpha w-[56%]">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                      {index === faqItems.length - 1 && (
                        <div className="w-full h-[1px] bg-border" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyProfilePage;
