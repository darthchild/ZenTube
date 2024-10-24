import React from 'react';
import { PlayCircle, Music2, ChevronRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const PlaylistCard = ({ title, playlistUrl, category }) => {
  return (
    <div className="group relative w-full rounded-xl border-2 border-white bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {category}
          </p>
        </div>
        
        <button
          className="flex items-center justify-center rounded-full p-2 text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <FontAwesomeIcon icon={faCirclePlay} className="h-8 w-8" />
        </button>
      </div>

      <br/>
    </div>
  );
};

export default PlaylistCard;