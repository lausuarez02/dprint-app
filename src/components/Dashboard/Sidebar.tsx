'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, FolderIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className="p-4 border-b border-b-gray-800 border-r-2 border-r-[#FFFFF] text-white h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-b-gray-800">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
          style={{fontFamily: 'Roond' }}
        >
          DPRINT
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <NavItem icon={<HomeIcon className="w-5 h-5" />} text="Home" href="/dashboard" active/>
          <NavItem icon={<FolderIcon className="w-5 h-5" />} text="Marketplace" href="/marketplace" />
           {/*<NavItem icon={<HeartIcon className="w-5 h-5" />} text="Liked" href="/liked" />
          <NavItem icon={<BookOpenIcon className="w-5 h-5" />} text="Library" href="/library" />
          <NavItem icon={<ArchiveBoxIcon className="w-5 h-5" />} text="Assets" href="/assets" />
          <NavItem icon={<UsersIcon className="w-5 h-5" />} text="Materials" href="/materials" /> */}
        </ul>

        <div className="mt-8 pt-6 border-t border-t-gray-800">
          <ul className="space-y-2">
            <NavItem icon={<ChatBubbleLeftIcon className="w-5 h-5" />} text="Join Discord" href="/discord" />
          </ul>
        </div>
      </nav>

      {/* Create team button */}
      <div className="p-4 mt-auto border-t border-t-gray-800">
        <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center transition-colors">
          <span className="text-sm font-medium">Create a team</span>
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon, text, href, active = false }: { 
  icon: React.ReactNode; 
  text: string; 
  href: string;
  active?: boolean;
}) {
  return (
    <li>
      <Link href={href} className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${active ? 'bg-indigo-700' : 'hover:bg-gray-800'}`}>
        <span className="text-gray-400">{icon}</span>
        <span className={`text-sm ${active ? 'font-medium' : 'font-normal'}`}>{text}</span>
        {active && (
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white ml-auto"
            layoutId="navIndicator"
          />
        )}
      </Link>
    </li>
  );
} 