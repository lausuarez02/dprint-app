'use client';

import { motion } from 'framer-motion';
import AppCard from './AppCard';

export default function ForYouSection() {
  // Sample app data
  const apps = [
    {
      id: 1,
      title: 'Make your logo 3D',
      description: 'Upload your logo and convert it to 3D',
      color: 'bg-green-600',
      icon: '🎨',
      isNew: true
    },
    {
      id: 2,
      title: 'Make your avatar',
      description: 'Build your avatar and learn Worp along the way',
      color: 'bg-yellow-500',
      icon: '👤'
    },
    {
      id: 3,
      title: 'Coffee Cup Game',
      description: 'Design a coffee cup while mastering Worp basics',
      color: 'bg-blue-600',
      icon: '☕'
    },
    {
      id: 4,
      title: 'Clear 3D print is here!',
      description: 'Prints now available in clear & tinted clear options',
      color: 'bg-purple-600',
      icon: '✨'
    },
    {
      id: 5,
      title: 'Stickers got better',
      description: 'Apply materials to stickers Restrict to areas and more.',
      color: 'bg-amber-600',
      icon: '🏷️'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium text-white">For you</h2>
        <motion.button
          whileHover={{ x: 3 }}
          className="text-sm text-gray-400 hover:text-white flex items-center"
        >
          Apps and Games
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <AppCard 
              title={app.title} 
              description={app.description} 
              color={app.color} 
              icon={app.icon} 
              isNew={app.isNew} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 