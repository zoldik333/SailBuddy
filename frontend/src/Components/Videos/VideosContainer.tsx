import React from 'react';
import ReactPlayer from 'react-player';

interface VideosContainerProps {
  title: string;
  video: string;
}

export default function VideosContainer({ title, video }: VideosContainerProps) {
  //const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-auto gap-8">
      <div className="text-[1.5em] font-bold text-[#1A2B78]">{title}</div>

      <div className="relative w-full max-w-[800px]">
        <ReactPlayer
          url={video}
          controls={true}
          width="100%"
          height="auto"
        />
        {/*
        {!playing && (
          <button
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            onClick={() => setPlaying(true)}
          >
            <img src={"assets/videos/play.png"} alt="" className="w-16 h-16" />
          </button>
        )}
        */}
      </div>
    </div>
  );
}