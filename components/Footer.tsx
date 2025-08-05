import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

export default function   Footer() {
  return (
    <footer className="w-full p-4  pt-8 mb-0 min-h-screen bg-background px-4 md:px-8 lg:px-16 bg-gray-50 ">
          <div className="w-full max-w-[1720px] mx-auto bg-gray-50 ">
            <div className="
              bg-global-1
              rounded-[8px] sm:rounded-[12px] md:rounded-[16px]
              pt-[20px] sm:pt-[30px] md:pt-[40px]
              pr-[20px] sm:pr-[30px] md:pr-[40px]
              pb-[20px] sm:pb-[30px] md:pb-[40px]
              pl-[20px] sm:pl-[30px] md:pl-[40px]
            "
        >
          <div className="flex flex-col justify-start items-center w-full">
            {/* Footer Top Section */}
            <div className="flex flex-col lg:flex-row justify-start items-start w-[90%] mt-[21px] sm:mt-[31px] md:mt-[42px]">
              {/* Left Content */}
              <div className="flex flex-col gap-[13px] sm:gap-[19px] md:gap-[26px] justify-start items-start w-full lg:w-[48%]">
                <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-inter font-semibold leading-[24px] sm:leading-[36px] md:leading-[49px] text-left text-global-15">
                  <span className="text-global-15">Invest Smarter. </span>
                  <span className="text-global-4">Grow Faster</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-start items-center w-full gap-[10px] sm:gap-[14px]">
                  <Button
                    className="
                          w-full sm:w-auto
                          pt-[6px] sm:pt-[9px] md:pt-[12px]
                          pr-[17px] sm:pr-[25px] md:pr-[34px]
                          pb-[6px] sm:pb-[9px] md:pb-[12px]
                          pl-[17px] sm:pl-[25px] md:pl-[34px]
                          text-[12px] sm:text-[13px] md:text-[15px]
                          font-inter font-semibold
                          leading-[15px] sm:leading-[17px] md:leading-[20px]
                          text-justify capitalize
                          text-global-15
                          bg-global-2
                          rounded-[14px]
                        "
                  >
                    open an account
                  </Button>
                  <Button
                    className="
                          w-full sm:w-auto
                          pt-[6px] sm:pt-[9px] md:pt-[12px]
                          pr-[11px] sm:pr-[16px] md:pr-[22px]
                          pb-[6px] sm:pb-[9px] md:pb-[12px]
                          pl-[11px] sm:pl-[16px] md:pl-[22px]
                          text-[12px] sm:text-[13px] md:text-[15px]
                          font-inter font-semibold
                          leading-[15px] sm:leading-[17px] md:leading-[20px]
                          text-justify capitalize
                          text-global-15
                          bg-button-1
                          rounded-[14px]
                          ml-0 sm:ml-[14px]
                        "
                  >
                    Browse stocks
                  </Button>
                </div>
              </div>
              {/* Right Stats */}
              {/* <div className="flex flex-col sm:flex-row justify-end items-center w-full lg:w-[52%] gap-[20px] sm:gap-[30px] mt-[24px] lg:mt-0">
                <div className="flex flex-col gap-[5px] sm:gap-[7px] md:gap-[10px] justify-start items-start">
                  <span className="text-[20px] sm:text-[29px] md:text-[39px] font-inter font-semibold leading-[24px] sm:leading-[36px] md:leading-[48px] text-justify text-global-15">
                    6.3k
                  </span>
                  <span className="text-[12px] sm:text-[13px] md:text-[15px] font-inter font-medium leading-[15px] sm:leading-[17px] md:leading-[20px] text-justify text-global-14">
                    Users
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-end items-center gap-[20px] sm:gap-[30px]">
                  <div className="flex flex-col gap-[5px] sm:gap-[7px] md:gap-[10px] justify-start items-start">
                    <span className="text-[20px] sm:text-[29px] md:text-[39px] font-inter font-semibold leading-[24px] sm:leading-[36px] md:leading-[48px] text-justify text-global-15">
                      26k
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[15px] font-inter font-medium leading-[15px] sm:leading-[17px] md:leading-[20px] text-justify text-global-14">
                      Certified Investors
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-start">
                    <span className="text-[20px] sm:text-[29px] md:text-[39px] font-inter font-semibold leading-[24px] sm:leading-[36px] md:leading-[48px] text-justify text-global-15">
                      99.9%
                    </span>
                    <span className="text-[12px] sm:text-[13px] md:text-[15px] font-inter font-medium leading-[15px] sm:leading-[17px] md:leading-[20px] text-justify text-global-14">
                      Success Rate
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
            {/* Footer Middle Section */}
            <div className="flex flex-col lg:flex-row justify-center items-start w-[90%] mt-[39px] sm:mt-[58px] md:mt-[78px]">
              {/* Company Info */}
              <div className="flex flex-col gap-[9px] sm:gap-[13px] md:gap-[18px] justify-start items-start w-full lg:w-[36%]">
                <Image
                  alt="Footer Logo"
                  className="w-[66px] sm:w-[99px] md:w-[132px] h-auto"
                  height={42}
                  src="/images/logo2.svg"
                  width={132}
                />
                <div className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] justify-start items-start w-full">
                  <p className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[16px] sm:leading-[18px] md:leading-[21px] text-justify text-global-12">
                    Aliquam rhoncus ligula est, non pulvinar elit
                    <br />
                    convallis nec. Donec mattis odio at.
                  </p>
                  {/* Social Media Icons */}
                  <div className="flex flex-row justify-start items-center w-full gap-[5px] sm:gap-[7px] md:gap-[10px]">
                    <button className="w-[22px] sm:w-[33px] md:w-[44px] h-[22px] sm:h-[33px] md:h-[44px] bg-global-5 rounded p-[6px] sm:p-[9px] md:p-[12px]">
                      <Image
                        alt="Social"
                        className="w-full h-full"
                        height={20}
                        src="/images/img_social.svg"
                        width={20}
                      />
                    </button>
                    <Image
                      alt="Social"
                      className="w-[22px] sm:w-[33px] md:w-[44px] h-[22px] sm:h-[33px] md:h-[44px] ml-[5px] sm:ml-[7px] md:ml-[10px]"
                      height={44}
                      src="/images/img_social_gray_800_02.svg"
                      width={44}
                    />
                    <button className="w-[22px] sm:w-[33px] md:w-[44px] h-[22px] sm:h-[33px] md:h-[44px] bg-global-4 rounded p-[6px] sm:p-[9px] md:p-[12px] ml-[5px] sm:ml-[7px] md:ml-[10px] shadow-[0px_5px_19px_#1c51a0]">
                      <Image
                        alt="Social"
                        className="w-full h-full"
                        height={20}
                        src="/images/img_social_white_a700.svg"
                        width={20}
                      />
                    </button>
                    <button className="w-[22px] sm:w-[33px] md:w-[44px] h-[22px] sm:h-[33px] md:h-[44px] bg-global-5 rounded p-[6px] sm:p-[9px] md:p-[12px] ml-[5px] sm:ml-[7px] md:ml-[10px]">
                      <Image
                        alt="Twitter"
                        className="w-full h-full"
                        height={20}
                        src="/images/img_twitter.svg"
                        width={20}
                      />
                    </button>
                    <button className="w-[22px] sm:w-[33px] md:w-[44px] h-[22px] sm:h-[33px] md:h-[44px] bg-global-5 rounded p-[6px] sm:p-[9px] md:p-[12px] ml-[5px] sm:ml-[7px] md:ml-[10px]">
                      <Image
                        alt="YouTube"
                        className="w-[8px] sm:w-[12px] md:w-[16px] h-[6px] sm:h-[9px] md:h-[12px]"
                        height={12}
                        src="/images/img_youtube.svg"
                        width={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* Footer Links */}
              <div className="flex flex-col lg:flex-row justify-end items-start w-full lg:w-[64%] mt-[24px] lg:mt-[4px] gap-[24px] lg:gap-0">
                {/* Quick Links */}
                <div className="flex flex-col justify-start items-start w-full lg:w-[20%]">
                  <h3 className="text-[10px] sm:text-[11px] md:text-[13px] font-inter font-medium leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify uppercase text-global-15">
                    Quick links
                  </h3>
                  <div className="flex flex-col gap-[4px] sm:gap-[6px] mt-[8px] sm:mt-[12px] md:mt-[16px]">
                    <Link href="/" className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px] hover:text-global-4 transition-colors cursor-pointer">
                      Home
                    </Link>
                    <Link href="/about" className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px] hover:text-global-4 transition-colors cursor-pointer">
                      About us
                    </Link>
                    <Link href="/solutions" className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px] hover:text-global-4 transition-colors cursor-pointer">
                      Our Solutions
                    </Link>
                    <Link href="/contact" className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px] hover:text-global-4 transition-colors cursor-pointer">
                      Contact us
                    </Link>
                  </div>
                </div>
                {/* Useful Links */}
                <div className="flex flex-row justify-center items-start w-full lg:w-[60%] px-[28px] sm:px-[42px] md:px-[56px]">
                  <div className="flex flex-col justify-start items-start w-auto">
                    <h3 className="text-[10px] sm:text-[11px] md:text-[13px] font-inter font-medium leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify uppercase text-global-15">
                      useful Links
                    </h3>
                    <div className="flex flex-col gap-[4px] sm:gap-[6px] mt-[8px] sm:mt-[12px] md:mt-[16px]">
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px]">
                        Who we are
                      </span>
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-13 mt-[4px] sm:mt-[6px] md:mt-[8px]">
                        Security Market Overview
                      </span>
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px] mt-[2px] sm:mt-[3px] md:mt-[4px]">
                        Trading
                      </span>
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px]">
                        Security centre
                      </span>
                      <Link href="/dashboard/acadamy" className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px] hover:text-global-4 transition-colors cursor-pointer">
                        Academy   
                      </Link> 
                    </div>
                  </div>
                  {/* Support */}
                  <div className="flex flex-col justify-start items-start w-[24%] ml-[24px] sm:ml-[36px] md:ml-[48px]">
                    <h3 className="text-[10px] sm:text-[11px] md:text-[13px] font-inter font-medium leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify uppercase text-global-15">
                      Support
                    </h3>
                    <div className="flex flex-col gap-[4px] sm:gap-[6px] mt-[8px] sm:mt-[12px] md:mt-[16px]">
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px]">
                        Help Center
                      </span>
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1">
                        FAQs
                      </span>
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px]">
                        Terms & Condition
                      </span>
                      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 bg-global-1 py-[3px] sm:py-[4px] md:py-[6px]">
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>
                {/* Download App */}
                <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-start w-full lg:w-[16%]">
                  <h3 className="text-[10px] sm:text-[11px] md:text-[13px] font-inter font-medium leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify uppercase text-global-15">
                    Download our app
                  </h3>
                  <div className="flex flex-col gap-[5px] sm:gap-[7px] md:gap-[10px] w-full">
                    {/* App Store */}
                    <div className="flex flex-row gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-center w-full bg-global-5 rounded pt-[4px] sm:pt-[6px] md:pt-[8px] pr-[4px] sm:pr-[6px] md:pr-[8px] pb-[4px] sm:pb-[6px] md:pb-[8px] pl-[4px] sm:pl-[6px] md:pl-[8px]">
                      <Image
                        alt="Apple"
                        className="w-[15px] sm:w-[22px] md:w-[30px] h-[15px] sm:h-[22px] md:h-[30px]"
                        height={30}
                        src="/images/img_apple_1.svg"
                        width={30}
                      />
                      <div className="flex flex-col justify-start items-start w-full">
                        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-inter leading-[9px] sm:leading-[10px] md:leading-[12px] text-justify text-global-14">
                          Download now
                        </span>
                        <span className="text-[10px] sm:text-[12px] md:text-[15px] font-inter font-medium leading-[13px] sm:leading-[17px] md:leading-[20px] text-justify text-global-15">
                          App Store
                        </span>
                      </div>
                    </div>
                    {/* Play Store */}
                    <div className="flex flex-row gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-center w-full bg-global-5 rounded pt-[4px] sm:pt-[6px] md:pt-[8px] pr-[4px] sm:pr-[6px] md:pr-[8px] pb-[4px] sm:pb-[6px] md:pb-[8px] pl-[4px] sm:pl-[6px] md:pl-[8px]">
                      <Image
                        alt="Google Play"
                        className="w-[15px] sm:w-[22px] md:w-[30px] h-[15px] sm:h-[22px] md:h-[30px]"
                        height={30}
                        src="/images/img_google_play_5_1.png"
                        width={30}
                      />
                      <div className="flex flex-col justify-start items-start w-full">
                        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-inter leading-[9px] sm:leading-[10px] md:leading-[12px] text-justify text-global-14">
                          Download now
                        </span>
                        <span className="text-[10px] sm:text-[12px] md:text-[15px] font-inter font-medium leading-[13px] sm:leading-[17px] md:leading-[20px] text-justify text-global-15">
                          Play Store
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="w-[90%] h-[1px] bg-global-15 mt-[7px] sm:mt-[10px] md:mt-[14px]" />
            <p className="text-[11px] sm:text-[12px] md:text-[14px] font-inter leading-[13px] sm:leading-[15px] md:leading-[17px] text-justify text-global-12 mt-[14px] sm:mt-[21px] md:mt-[28px]">
              <span className="text-global-12">
                © 2025 - Amaramba. Designed by{" "}
              </span>
              <span className="text-global-15">
                Webnox. All rights reserved
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
