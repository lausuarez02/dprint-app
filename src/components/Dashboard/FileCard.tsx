'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface FileCardProps {
  name: string;
  thumbnail: string;
  date: string;
}

export default function FileCard({ name, thumbnail, date }: FileCardProps) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer"
    >
      <div className="bg-gray-700 h-40 relative">
        {imageError ? (
          <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
            <svg className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        ) : (
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white text-sm">{name}</h3>
        <p className="text-gray-400 text-xs mt-1">{date}</p>
      </div>
    </motion.div>
  );
} 