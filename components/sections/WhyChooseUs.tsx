import { Card, CardBody, CardHeader } from "@heroui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = "",
  image,
}) => {
  return (
    <Card
      className={`p-10 border border-[#b9d7ff] rounded-[40px] bg-white ${className} `}
    >
      {image && className.includes("col-span-2") ? (
        // Side-by-side layout for cards that span 2 columns
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <CardHeader className="pb-0 pt-2 px-0 flex-col items-start my-5 ">
              <h4 className="font-semibold text-[32px] text-[#041e3f] leading-[18px]">
                {title}
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-[20px] leading-[29px] text-[#888888]">
                {description}
              </p>
              <div className="mt-6">
                <div className="w-[89px] h-[50px] rounded-[80px] bg-[#13b4fb] flex items-center justify-center">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </CardBody>
          </div>
          <div className="flex-1">
            <img alt={title} className="w-full h-auto rounded-lg" src={image} />
          </div>
        </div>
      ) : (
        // Original layout for single column cards
        <>
          {image && (
            <div className="mb-4">
              <img
                alt={title}
                className="w-full h-auto rounded-lg"
                src={image}
              />
            </div>
          )}
          <CardHeader className="pb-0 pt-2 px-0 flex-col items-start my-5">
            <h4 className="font-semibold text-[32px] text-[#041e3f] leading-[18px]">
              {title}
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p className="text-[20px] leading-[29px] text-[#888888]">
              {description}
            </p>
            <div className="mt-6">
              <div className="w-[89px] h-[50px] rounded-[80px] bg-[#13b4fb] flex items-center justify-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </CardBody>
        </>
      )}
    </Card>
  );
};

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.",
      className: "row-span-2 p-10 ",
      image: "/images/real1.png",
    },
    {
      title: "Local Expertise",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.",
      className: " ",
    },
    {
      title: "Personal Support",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.",
      className: "",
    },
    {
      title: "Safe & Regulated",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.",
      className: " col-span-2 p-10",
      image: "/images/real2.png",
    },
  ];

  return (
    <section className="py-16 ">
      <div className=" mx-auto">
        <h2 className="text-[50px] font-bold mb-12 text-center">
          <span className="text-black">Why </span>
          <span className="text-[#13b4fb]">choose us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              className={feature.className}
              description={feature.description}
              image={feature.image}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
