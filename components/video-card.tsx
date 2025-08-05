"use client"

import Image from "next/image"
import { Play } from "lucide-react"

interface VideoCardProps {
  thumbnail: string
  duration: string
  creator: string
  isOnline: boolean
  title: string
  views: string
  timeAgo: string
}

export function VideoCard({ thumbnail, duration, creator, isOnline, title, views, timeAgo }: VideoCardProps) {
  return (
    <div className="flex-shrink-0 w-64 cursor-pointer group">
      <div className="relative mb-3">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={256}
          height={144}
          className="w-full h-36 object-cover rounded-lg"
        />
        
        {/* Duration badge */}
        <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {/* Creator name with online status */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">{creator}</span>
          {isOnline && (
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          )}
        </div>
        
        {/* Video title */}
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">{title}</h3>
        
        {/* Views and time */}
        <p className="text-xs text-gray-500">
          {views} • {timeAgo}
        </p>
      </div>
    </div>
  )
}
