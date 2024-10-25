import React, { useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
import playlists from '../PlaylistData.json'

const HomePage = () => {

  const handlePlaylistClick = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    playlists.forEach(playlist => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = playlist.url;
      document.head.appendChild(link);
    });
  }, [playlists]);

  return (

    <div className="min-h-screen bg-zinc-50 px-4 py-8 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl">
        
      <header className="mb-12 text-center">
        <h1 className="flex items-center justify-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          <img 
            src="/yt-white-logo.png" 
            alt="ZenTube Logo" 
            className="mr-2 w-20"
          />
          ZenTube
        </h1>
      </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id}
              onClick={() => handlePlaylistClick(playlist.url)}
              className="cursor-pointer"
            >
              <PlaylistCard
                title={playlist.title}
                playlistUrl={playlist.playlistUrl}
                category={playlist.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
