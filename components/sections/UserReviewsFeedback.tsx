"use client";

import React from "react";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Review data interface
interface ReviewData {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  borderColor: string;
}

// Sample review data
const reviewData: ReviewData[] = [
  {
    id: 1,
    name: "Emily Johnson",
    avatar: "/images/img_renata_santos_1.png",
    rating: 5,
    review:
      "I love how Capable helps me stay in touch with friends and meet new people. The app is user-friendly and effective.",
    borderColor: "#dee5ed",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/images/img_joaquim_bazar_1.png",
    rating: 5,
    review:
      "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app.",
    borderColor: "#b9d7ff",
  },
  {
    id: 3,
    name: "Emma Johnson",
    avatar: "/images/img_cyrus_dos_anjos.png",
    rating: 5,
    review:
      "Capable has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!",
    borderColor: "#dee5ed",
  },
  {
    id: 4,
    name: "Michael Brown",
    avatar: "/images/img_elida_manhenhan.png",
    rating: 5,
    review:
      "With Capable, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier.",
    borderColor: "#dee5ed",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    avatar: "/images/img_fernando_cuna_1.png",
    rating: 5,
    review:
      "Capable has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!",
    borderColor: "#dee5ed",
  },
  {
    id: 6,
    name: "David Lee",
    avatar: "/images/img_h_zimba_photo_1_scaled.png",
    rating: 5,
    review:
      "With Capable, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier.",
    borderColor: "#dee5ed",
  },
  {
    id: 7,
    name: "Lisa Chen",
    avatar: "/images/img_baptista_machava.png",
    rating: 5,
    review:
      "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app.",
    borderColor: "#dee5ed",
  },
  {
    id: 8,
    name: "Alex Rodriguez",
    avatar: "/images/img_crice_foto_1.png",
    rating: 5,
    review:
      "I love how Capable helps me stay in touch with friends and meet new people. The app is user-friendly and effective.",
    borderColor: "#dee5ed",
  },
  {
    id: 9,
    name: "Maria Garcia",
    avatar: "/images/img_image_44.png",
    rating: 5,
    review:
      "With Capable, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier.",
    borderColor: "#dee5ed",
  },
  {
    id: 10,
    name: "James Taylor",
    avatar: "/images/img_image_48.png",
    rating: 5,
    review:
      "Capable has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!",
    borderColor: "#dee5ed",
  },
  {
    id: 11,
    name: "Anna Kim",
    avatar: "/images/img_7133672_323_1.png",
    rating: 5,
    review:
      "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app.",
    borderColor: "#dee5ed",
  },
  {
    id: 12,
    name: "Robert Johnson",
    avatar: "/images/img_124650_1.png",
    rating: 5,
    review:
      "I love how Capable helps me stay in touch with friends and meet new people. The app is user-friendly and effective.",
    borderColor: "#dee5ed",
  },
  {
    id: 13,
    name: "Jennifer Smith",
    avatar: "/images/img_124663_1.png",
    rating: 5,
    review:
      "Amazing platform that connects people authentically. The features are intuitive and the community is wonderful.",
    borderColor: "#dee5ed",
  },
  {
    id: 14,
    name: "Christopher Lee",
    avatar: "/images/img_21493_1.png",
    rating: 5,
    review:
      "Capable has revolutionized how I network and build relationships. Highly recommend for anyone looking to connect.",
    borderColor: "#dee5ed",
  },
  {
    id: 15,
    name: "Amanda Davis",
    avatar: "/images/img_2151957127_1.png",
    rating: 5,
    review:
      "The best social platform I've used. Clean interface, great features, and genuine connections.",
    borderColor: "#dee5ed",
  },
  {
    id: 16,
    name: "Daniel Wilson",
    avatar: "/images/img_35937_1.png",
    rating: 5,
    review:
      "Outstanding user experience and excellent community. Capable has exceeded all my expectations.",
    borderColor: "#dee5ed",
  },
  {
    id: 17,
    name: "Rachel Green",
    avatar: "/images/img_464_1.png",
    rating: 5,
    review:
      "Fantastic platform for building meaningful relationships. The interface is beautiful and user-friendly.",
    borderColor: "#dee5ed",
  },
  {
    id: 18,
    name: "Thomas Anderson",
    avatar: "/images/img_beautiful_archi.png",
    rating: 5,
    review:
      "Capable has transformed my social networking experience. Highly intuitive and effective platform.",
    borderColor: "#dee5ed",
  },
  {
    id: 19,
    name: "Jessica Martinez",
    avatar: "/images/img_renata_santos_1.png",
    rating: 5,
    review:
      "Love the clean design and how easy it is to connect with like-minded people. Excellent platform!",
    borderColor: "#dee5ed",
  },
  {
    id: 20,
    name: "Kevin Thompson",
    avatar: "/images/img_joaquim_bazar_1.png",
    rating: 5,
    review:
      "Outstanding platform that truly delivers on its promise. The community is amazing and features are top-notch.",
    borderColor: "#dee5ed",
  },
];

// Convert review data to the format expected by InfiniteMovingCards
const testimonials = reviewData.map((review) => ({
  quote: review.review,
  name: review.name,
  title: `Rating: ${review.rating}/5`,
  avatar: review.avatar,
}));

const UserReviewsFeedback: React.FC = () => {
  return (
    <div className="w-full mx-auto ">
      {/* Header */}
      <div className="text-center my-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] leading-tight mb-5">
          <span>User </span>
          <span className="text-[#0585db]">Reviews</span>
          <span> and </span>
          <span className="text-[#0585db]">Feedback</span>
        </h1>
        <p className="text-[#666666] text-base leading-6 font-medium max-w-2xl mx-auto">
          Join thousands of satisfied traders who trust us every day to manage
          their trades with confidence.
        </p>
      </div>

      {/* Reviews Container - Two Rows */}
      <div className="flex flex-col ">
        {/* First Row - Moving Right */}
        <div className="h-[350px] overflow-hidden">
          <InfiniteMovingCards
            className="h-full"
            direction="right"
            items={testimonials}
            speed="slow"
          />  
        </div>

        {/* Second Row - Moving Left */}
        <div className="h-[350px] overflow-hidden">
          <InfiniteMovingCards
            className="h-full"
            direction="left"
            items={testimonials}
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default UserReviewsFeedback;
