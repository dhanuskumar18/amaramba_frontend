import { VideoCard } from "./video-card"

interface VideoSectionProps {
  title: string
  videos: Array<{
    id: string
    thumbnail: string
    duration: string
    creator: string
    isOnline: boolean
    title: string
    views: string
    timeAgo: string
  }>
}

export function VideoSection({ title, videos }: VideoSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">See more</button>
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              duration={video.duration}
              creator={video.creator}
              isOnline={video.isOnline}
              title={video.title}
              views={video.views}
              timeAgo={video.timeAgo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
