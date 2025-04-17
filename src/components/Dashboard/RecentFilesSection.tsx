'use client';

import { motion } from 'framer-motion';
import FileCard from './FileCard';

export default function RecentFilesSection() {
  // Sample recent files data
  const recentFiles = [
    {
      id: 1,
      name: 'Geometric Holder',
      thumbnail: '/thumbnails/geometric-holder.jpg', // Placeholder path, actual image would need to be added to public folder
      date: 'June 10, 2023'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium text-white">Recent files</h2>
        <motion.button
          whileHover={{ x: 3 }}
          className="text-sm text-gray-400 hover:text-white flex items-center"
        >
          See all
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {recentFiles.map((file, index) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <FileCard 
              name={file.name} 
              thumbnail={file.thumbnail} 
              date={file.date} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 