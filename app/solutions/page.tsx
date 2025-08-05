"use client";
import React from "react";
import Image from "next/image";
// import Header from '@/components/common/Header';
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
interface StatCardProps {
  value: string;
  unit: string;
  label: string;
  className?: string;
}
const StatCard: React.FC<StatCardProps> = ({
  value,
  unit,
  label,
  className = "",
}) => (
  <div
    className={`
    flex flex-col gap-[14px] justify-center items-start
    border-[4px] border-solid border-transparent
    bg-[linear-gradient(51deg,#0585db87_0%,_#cbeaff77_100%)]
    backdrop-blur-sm
    rounded-[12px]
    shadow-[0px_4px_20px_#888888ff]
    ${className}
  `}
  >
    <div className="flex justify-center items-center w-auto">
      <span className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-lexend font-semibold leading-[40px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] text-global-15">
        {value}
      </span>
      <span className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-lexend font-semibold leading-[40px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] text-global-15 ml-[4px] sm:ml-[8px]">
        {unit}
      </span>
    </div>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-lexend font-medium leading-[20px] sm:leading-[23px] md:leading-[25px] text-global-15">
      {label}
    </p>
  </div>
);

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div
    className="
    flex flex-col gap-[20px] justify-start items-start
    w-full max-w-[490px]
    border-[1px] border-solid border-[#d2d2d2]
    rounded-[6px]
    bg-global-7
    pt-[28px] sm:pt-[42px] md:pt-[56px]
    pr-[20px] sm:pr-[24px] md:pr-[26px]
    pb-[28px] sm:pb-[42px] md:pb-[56px]
    pl-[20px] sm:pl-[24px] md:pl-[26px]
    h-[300px]
    transition-all duration-300 ease-in-out
    hover:bg-white hover:shadow-lg hover:border-[#e5e5e5]
    cursor-pointer
    group
  "
  >
    <Image
      alt="Service Icon"
      className="w-[32px] sm:w-[38px] md:w-[44px] h-[32px] sm:h-[38px] md:h-[44px] transition-transform duration-300 ease-in-out group-hover:scale-125"
      height={44}
      src={icon}
      width={44}
    />
    <div className="flex flex-col gap-[12px] justify-start items-start w-full mb-[10px]">
      <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-urbanist font-semibold leading-[25px] sm:leading-[28px] md:leading-[31px] text-global-1 capitalize transition-transform duration-300 ease-in-out group-hover:scale-105">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[26px] md:leading-[29px] text-global-11 w-full">
        {description}
      </p>
    </div>
  </div>
);

interface ClientProfileCardProps {
  icon: string;
  title: string;
  description: string;
}
const ClientProfileCard: React.FC<ClientProfileCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div
    className="h-[200px] 
    flex flex-col gap-[40px] justify-center items-center
    w-full max-w-[302px]
    border border-transparent
    rounded-[16px]
    bg-global-6
    pt-[32px] sm:pt-[48px] md:pt-[64px]
    pr-[24px] sm:pr-[36px] md:pr-[48px]
    pb-[32px] sm:pb-[48px] md:pb-[64px]
    pl-[24px] sm:pl-[36px] md:pl-[48px]
    min-h-[400px]
  "
  >
    <Image
      alt="Client Icon"
      className="w-[32px] sm:w-[39px] md:w-[46px] h-[32px] sm:h-[39px] md:h-[46px]"
      height={46}
      src={icon}
      width={46}
    />
    <div className="flex flex-col gap-[24px] justify-start items-center w-full">
      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-lexend font-medium leading-[20px] sm:leading-[22px] md:leading-[25px] text-center text-global-5">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-dm-sans leading-[20px]  md:leading-[24px] text-left text-global-10 w-full">
        {description}
      </p>
    </div>
  </div>
);

interface StakeholderCardProps {
  icon: string;
  title: string;
  description: string;
}
const StakeholderCard: React.FC<StakeholderCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div
    className="
    flex flex-col gap-[16px] sm:gap-[20px] justify-start items-start
    w-full max-w-[490px]
    border-[1px] border-solid border-[#d2d2d2]
    rounded-[6px]
    bg-global-7
    pt-[20px]  md:pt-[26px]
    pr-[20px] sm:pt-[24px] md:pr-[26px]
    pb-[20px] sm:pb-[24px] md:pb-[26px]
    pl-[20px] sm:pl-[24px] md:pl-[26px]
  "
  >
    <Image
      alt="Stakeholder Icon"
      className="w-[32px] sm:w-[38px] md:w-[44px] h-[32px] sm:h-[38px] md:h-[44px]"
      height={44}
      src={icon}
      width={44}
    />
    <div className="flex flex-col gap-[40px] sm:gap-[52px] justify-start items-start w-full mb-[12px] sm:mb-[40px]">
      <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-urbanist font-semibold leading-[25px] sm:leading-[28px] md:leading-[31px] text-global-1 capitalize">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[26px] md:leading-[29px] text-global-11 w-full">
        {description}
      </p>
    </div>
  </div>
);
const FinancialServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-[59px] sm:gap-[89px] md:gap-[118px] bg-global-8">
      {/* Main Content */}
      <div className="flex flex-col justify-start items-center w-full gap-[59px] sm:gap-[89px] md:gap-[118px] ">
        {/* Trading Section */}
        <section className="w-full py-20">
          <div className="w-full max-w-[1720px] mx-auto px-[28px] sm:px-[42px] md:px-[56px]">
            <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-[24px] lg:gap-0">
              {/* Left Content */}
              <div className="flex flex-col gap-[11px] sm:gap-[16px] md:gap-[22px] justify-start items-start w-full lg:w-[50%]">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-lexend leading-[6px] sm:leading-[7px] md:leading-[8px] text-left text-global-3 ml-[3px] sm:ml-[4px] md:ml-[6px]">
                  What We Offer
                </p>
                <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-lexend font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-left text-global-7">
                  Trading
                </h1>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[27px] md:leading-[30px] text-justify text-global-11 w-full lg:w-[82%]">
                  We offer a full-service brokerage/dealership and execution
                  desk across multiple asset classes driven by the relationship
                  we have with our clients since 2019. Our trading desk strives
                  to optimize efficiency of execution while providing a bespoke
                  service to our clients. Our independency allows us to deliver
                  tailor-made advisory solutions for our clients as well as
                  precise market color, knowledge, and intelligence. We trade
                  stocks, bonds, and other securities in Mozambique. We offer a
                  full-service brokerage/dealership and execution desk across
                  multiple asset classes driven by the relationship we have with
                  our clients since 2019. Our trading desk strives to optimize
                  efficiency of execution while providing a bespoke service to
                  our clients. Our independency allows us to deliver tailor-made
                  advisory solutions for our clients as well as precise market
                  color, knowledge, and intelligence. We trade stocks, bonds,
                  and other securities in Mozambique.
                </p>
              </div>
              {/* Right Content - Trading Image with Stats Overlay */}
              <div className="relative w-full lg:w-[50%] mt-[9px] sm:mt-[13px] md:mt-[18px] mr-0 lg:mr-[4px] sm:mr-[6px] md:mr-[8px]">
                <div className="relative w-full max-w-[808px] mx-auto">
                  {/* Main Trading Image */}
                  <div className="w-full">
                    <Image
                      alt="Trading Dashboard"
                      className="w-full h-auto rounded-[22px]"
                      height={538}
                      src="/images/img_35937_1.png"
                      width={808}
                    />
                  </div>
                  {/* Stat Cards Overlay - Positioned over the man's body and desk area */}
                  <div className="absolute -bottom-[20%] left-[5%] flex justify-center items-center gap-[10px] sm:gap-[15px] md:gap-[20px]">
                    {/* Merchant Join Card */}
                    <StatCard
                      className="
                        pt-[21px] sm:pt-[31px] md:pt-[42px]
                        pr-[14px] sm:pr-[21px] md:pr-[28px]
                        pb-[21px] sm:pb-[31px] md:pb-[42px]
                        pl-[14px] sm:pl-[21px] md:pl-[28px]
                        
                      "
                      label="MERCHANT JOIN"
                      unit="K"
                      value="2387"
                    />
                    {/* App Downloads Card */}
                    <StatCard
                      className="
                        pt-[33px] sm:pt-[49px] md:pt-[66px]
                        pr-[28px] sm:pr-[42px] md:pr-[56px]
                        pb-[33px] sm:pb-[49px] md:pb-[66px]
                        pl-[39px] sm:pl-[58px] md:pl-[78px]
                        -mb-[20px] sm:-mb-[30px] md:-mb-[140px]
                        ml-[50px] sm:ml-[75px] md:ml-[100px]
                      "
                      label="APP DOWNLOADS"
                      unit="K"
                      value="3459"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="w-full mt-[88px] sm:mt-[132px] md:mt-[176px]">
          <div className="w-full max-w-[1720px] mx-auto px-[28px] sm:px-[42px] md:px-[56px]">
            <div className="flex flex-col justify-start items-center w-full max-w-[1534px] mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center mb-[69px] sm:mb-[103px] md:mb-[138px]">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-lexend leading-[6px] sm:leading-[7px] md:leading-[8px] text-left text-global-3">
                  Services
                </p>
                <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-lexend font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-center text-global-9 mt-[8px] sm:mt-[12px] md:mt-[16px]">
                  What Our Clients Are Saying
                </h2>
              </div>
              {/* Service Cards */}
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[26px] w-full justify-center items-start mb-[24px] sm:mb-[36px] md:mb-[48px]">
                <ServiceCard
                  description="You give us the discretion to manage your portfolio using an agreed house strategy."
                  icon="/images/img_octicon_goal_16.svg"
                  title="Discretionary Account"
                />
                <ServiceCard
                  description="We provide you with advice and ideas and only execute the decisions we agree on together."
                  icon="/images/img_octicon_goal_16.svg"
                  title="Advisory Account"
                />
                <ServiceCard
                  description="We act on your requests as opposed to offering advice"
                  icon="/images/img_octicon_goal_16.svg"
                  title="Execution Only"
                />
              </div>
              {/* Service Description */}
              <div className="w-full max-w-[1388px] mx-auto">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-lexend font-medium leading-[24px] sm:leading-[27px] md:leading-[30px] text-center text-global-11">
                  Each approach provides a different level of relationship,
                  advice, service, and cost. But no matter what level of
                  involvement you choose, you will have full access to our
                  highly skilled and experienced investment research team who
                  will provide quantitative, economic, fundamental, and
                  technical research on a variety of investment counters.
                  <br />
                  Our clients are domestically mobile, and they live in a
                  complex world. Therefore, ACD specializes in creating a single
                  point of contact, through which we integrate a truly local
                  product offering.
                  <br />
                  Our focus is on the relationship with our customer base.
                </p>
              </div>
              {/* Download Button */}
              <div className="flex justify-center items-start w-[4%] mt-[15px] sm:mt-[22px] md:mt-[30px]">
                <div className="flex flex-col justify-start items-center w-full">
                  <div className="flex justify-center items-center w-full">
                    <button aria-label="Download">
                      <Image
                        alt="Download"
                        height={100}
                        src="/images/downloadtext.png"
                        width={100}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Research Section */}
        <section className="w-full mt-[70px] ">
          <div className="w-full max-w-[1920px] mx-auto px-[42px] sm:px-[63px] md:px-[84px]">
            <div className="relative w-full">
              {/* Background Image */}
              <Image
                alt="Research Background"
                className="w-[66%] h-auto rounded-[12px]"
                height={650}
                src="/images/img_2151957127_1.png"
                width={1172}
              />
              {/* Research Content Card */}
              <div
                className="
                absolute -top-[10%] right-0
                w-[50%]
                bg-global-8
                rounded-[18px]
                shadow-[-31px_31px_96px_#00000019]
                pt-[18px] sm:pt-[27px] md:pt-[36px]
                pr-[20px] sm:pr-[30px] md:pr-[40px]
                pb-[18px] sm:pb-[27px] md:pb-[36px]
                pl-[20px] sm:pl-[30px] md:pl-[40px]
                mr-[8px] sm:mr-[12px] md:mr-[16px]
              "
              >
                <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full">
                  <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-start w-full mt-[8px] sm:mt-[12px] md:mt-[16px]">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[18px] sm:leading-[20px] md:leading-[23px] text-left text-global-4">
                      What We Do
                    </p>
                    <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-lexend font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-left text-global-6">
                      Research
                    </h2>
                  </div>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans leading-[21px] sm:leading-[24px] md:leading-[28px] text-justify text-global-10 w-[94%]">
                    ACD offers avant-garde in-depth coverage of the Mozambique
                    securities market. We produce regular market wraps covering
                    both the equity and debt instruments, offer regular coverage
                    of select stocks – with a particular focus on Financial &
                    Infrastructure sectors – as well as macroeconomic deep dives
                    and event-driven recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Client Profile Section */}
        <section className="w-full mt-[60px] ">
          <div className="flex flex-col gap-[26px] sm:gap-[39px] md:gap-[52px] justify-start items-center w-[36%] mx-auto">
            {/* Section Header */}
            <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center w-full px-[28px] sm:px-[42px] md:px-[56px]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-4">
                What We Do
              </p>
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-lexend font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-center text-global-6">
                Client Profile
              </h2>
            </div>
            {/* Client Profile Cards */}
            <div className="flex flex-col lg:flex-row gap-[18px] sm:gap-[21px] md:gap-[24px] w-full justify-center items-start mr-[18px] sm:mr-[27px] md:mr-[36px] ml-[18px] sm:ml-[27px] md:ml-[36px]">
              <ClientProfileCard
                description="Local asset managers Foreign fund managers
Banks & insurance companies Corporates Owned state entities"
                icon="/images/img_017_robot_arm.png"
                title="Institutional clients"
              />
              <ClientProfileCard
                description="High net worth Retail clients
Diaspora
Registered groups"
                icon="/images/img_017_robot_arm_46x46.png"
                title="Retail client"
              />
            </div>
          </div>
        </section>
        {/* Depository & Custody Services Section */}
        <section className="w-full mt-[70px] overflow-hidden">
          <div className="flex flex-row justify-start items-start w-full">
            {/* Left Image */}
            <div className="flex flex-row justify-center items-start w-full mt-[60px] sm:mt-[90px] md:mt-[120px] relative -left-16">
              <Image
                alt="Depository Services"
                className="w-[33%] h-auto rounded-[22px] self-end"
                height={444}
                src="/images/img_464_1.png"
                width={466}
              />
              {/* Content Section */}
              <div className="flex flex-col gap-[24px] sm:gap-[36px] md:gap-[48px] justify-start items-center w-[64%] ml-[18px] sm:ml-[27px] md:ml-[36px] mb-[100px] sm:mb-[150px] md:mb-[200px]">
                <h2 className="px-20 text-[24px] sm:text-[36px] md:text-[48px] font-lexend font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-center text-global-5 w-full mt-[4px] sm:mt-[6px] md:mt-[8px]">
                  Depository & Custody Services
                </h2>
                <p className="px-20 text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[21px] sm:leading-[24px] md:leading-[28px] text-center text-global-8 w-full">
                  As affiliated at Depository & Custody Services Scheme (CVM),
                  ACD offers a wide breadth of services to its clients, the
                  cornerstone of its custody servicing activities are:
                </p>
                {/* Services List */}
                <div className="flex flex-col justify-center items-center w-[68%] gap-[15px]">
                  {/* First Row - 2 items */}
                  <div className="flex flex-row justify-between items-center w-full gap-[50px] py-3">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-3 whitespace-nowrap">
                      Safekeeping and record-keeping services.
                    </p>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-3 whitespace-nowrap">
                      Securities asset servicing.
                    </p>
                  </div>
                  {/* Second Row - 2 items */}
                  <div className="flex flex-row justify-between items-center w-full gap-[60px] py-3">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-3 whitespace-nowrap">
                      Transaction processing and settlement.
                    </p>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-3 whitespace-nowrap">
                      Account opening services.
                    </p>
                  </div>
                  {/* Third Row - 1 centered item */}
                  <div className="flex flex-row justify-center items-center w-full py-3">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-lexend leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-3 whitespace-nowrap">
                      Securities immobilization and pledges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <Image
              alt="Financial Services"
              src="/images/img_124663_1.png"
              width={400}
              height={500}
              className="w-[30%] h-auto rounded-[22px] relative -right-10 "
            />
          </div>
        </section>
        {/* Sponsor and Corporate Access Section */}
        <section className="w-full mt-[70px] ">
          <div className="w-full max-w-[1920px] mx-auto px-[28px] sm:px-[42px] md:px-[56px]">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1702px] mx-auto">
              {/* Left Image */}
              <Image
                alt="Corporate Access"
                src="/images/img_21493_1.png"
                width={550}
                height={530}
                className="w-full lg:w-[30%]  rounded-[22px] "
              />
              {/* Right Content */}
              <div className="flex flex-col gap-[9px] sm:gap-[13px] md:gap-[18px] justify-start items-center w-full lg:w-[60%] mr-0 lg:mr-[14px] sm:mr-[21px] md:mr-[28px] mt-[24px] lg:mt-0">
                <div className="flex flex-row justify-start items-center w-full">
                  <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-lexend font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-left text-global-5">
                    Sponsor and Corporate Access
                  </h2>
                </div>
                <p className=" text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans leading-[21px] sm:leading-[24px] md:leading-[28px] text-left text-global-10 w-full">
                  We have been pioneers in the market for operating in the
                  capacity of independent stockbroking firm, dealing with equity
                  and debt instruments listed on the Stock Exchange of
                  Mozambique. We have helped investors from primary & secondary
                  markets raise over USD160 millions during the past 4 years. We
                  accompany issuers in their journey on public markets and
                  connect issuers to the right investors having access to the
                  market and assist local or international investors. Under
                  managed portfolios scheme, if you understand your risk profile
                  but are unsure of the right instruments, optimal timings and
                  best practices when managing funds, you can select from a few
                  professionally managed funds. We have various global partners
                  who we consistently work with in lockstep. However our
                  objective has always been to maintain a strong servicing
                  relationship with the end-client allowing them to route
                  business to us through our multiple arrangements for execution
                  through a wide global partner network. Our primary focus is to
                  market Mozambican&apos;s promising economic story by actively
                  encouraging reserve roadshows while also consistently taking
                  corporate access to major global financial center.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Key Stakeholders Section */}
        <section className="w-full mt-[40px] sm:mt-[60px] md:mt-[80px]">
          <div className="w-full max-w-[1920px] mx-auto px-[28px] sm:px-[42px] md:px-[56px]">
            <div className="flex flex-col gap-[39px] sm:gap-[58px] md:gap-[78px] justify-start items-center w-full">
              {/* Section Header */}
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-lexend font-medium leading-[30px] sm:leading-[45px] md:leading-[60px] text-center text-global-5">
                Key Stakeholders
              </h2>
              {/* Stakeholder Cards */}
              <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[26px] w-full max-w-[1526px] justify-center">
                <StakeholderCard
                  description="You give us the discretion to manage your portfolio using an agreed house strategy."
                  icon="/images/img_octicon_goal_16.svg"
                  title="MOZAMBIQUE CENTRAL BANK"
                />
                <StakeholderCard
                  description="Mozambique Central Depository and Settlement Corporation which is embedded into BVM (Mozambique Securities Exchange)."
                  icon="/images/img_octicon_goal_16.svg"
                  title="MOZAMBIQUE SECURITIES EXCHANGE"
                />
                <StakeholderCard
                  description="Market participants include the government, commercial banks, brokers, dealers, large companies, pension funds and insurance firms."
                  icon="/images/img_octicon_goal_16.svg"
                  title="MARKET PARTICIPANTS"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default FinancialServicesPage;
