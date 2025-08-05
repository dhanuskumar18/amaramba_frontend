import { Search } from "lucide-react"
import { VideoSection } from "@/components/video-section"

export default function AcademyPage() {
  const classificationVideos = [
    {
      id: "1",
      thumbnail: "/images/img_124650_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "2",
      thumbnail: "/images/img_124663_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "3",
      thumbnail: "/images/img_21493_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "4",
      thumbnail: "/images/img_2151957127_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "5",
      thumbnail: "/images/img_35937_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
  ]

  const definitionsVideos = [
    {
      id: "6",
      thumbnail: "/images/img_124650_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "7",
      thumbnail: "/images/img_124663_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "8",
      thumbnail: "/images/img_21493_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "9",
      thumbnail: "/images/img_2151957127_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
    {
      id: "10",
      thumbnail: "/images/img_35937_1.png",
      duration: "7 min",
      creator: "Andy William",
      isOnline: true,
      title: "Lorem Ipsum is simply dummy text",
      views: "53K views",
      timeAgo: "2 weeks ago",
    },
  ]

  return (
    <div className="">
      <div className="">
        {/* Header with title and search */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Academy</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for Stock"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <VideoSection title="Classification of stocks" videos={classificationVideos} />
          <VideoSection title="Definitions and Classifications" videos={definitionsVideos} />
        </div>
      </div>
    </div>
  )
}
