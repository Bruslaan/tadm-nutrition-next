'use client';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import VideoScrollCard from './video-scroll-card';

const videoJson = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'What is our product TADM',
  description: 'A video explanation of our product and whats inside',
  thumbnailUrl: 'https://example.com/thumbnail.jpg',
  uploadDate: '2024-09-10',
  contentUrl: 'https://res.cloudinary.com/dtvtmykeg/video/upload/v1718573595/tadm_skbkly.mp4',
  embedUrl: 'https://res.cloudinary.com/dtvtmykeg/video/upload/v1718573595/tadm_skbkly.mp4',
  duration: 'PT2M33S'
};
const VideoScrollSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !container.current) return;
    videoRef.current.pause();

    const handleScrollChange = (progress: number) => {
      const duration = videoRef.current!.duration;
      requestAnimationFrame(() => {
        videoRef.current!.currentTime = progress * duration;
      });
    };

    return scrollYProgress.on('change', handleScrollChange);
  }, [scrollYProgress]);

  return (
    <section
      id="inside-tadm"
      ref={container}
      className="relative min-h-[600vh] bg-white pt-10 lg:min-h-[500vh]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoJson)
        }}
      />
      <div className="mx-auto flex max-w-screen-xl justify-center px-4">
        <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl">
          What is Tadm
        </h1>
      </div>
      {/* Video */}
      <div className="sticky top-0 mr-auto h-[100vh] w-full overflow-hidden">
        {/* <FloatingIcon className="right-10 top-[50%] z-10 rotate-45 blur-sm" size={100} /> */}
        <div className="w-[160%] lg:h-screen lg:w-auto">
          <video
            playsInline
            ref={videoRef}
            className="custom-float object-cover object-center lg:h-screen"
            muted
            autoPlay
            loop
          >
            <source
              src="https://res.cloudinary.com/dtvtmykeg/video/upload/v1718573595/tadm_skbkly.mp4"
              type="video/mp4"
            />
            <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Cards */}
      <div className="absolute top-0 h-full w-full px-5 pt-80 lg:right-0 lg:max-w-[40%]">
        <VideoScrollCard
          urlTo="/cumin"
          title="Black seed oil"
          color="bg-blue-200 md:top-10 top-[30%]"
        />
        <VideoScrollCard
          urlTo="/algae"
          title="Algae Oil"
          color="bg-green-200 md:top-12 top-[32%]"
        />
        <VideoScrollCard
          urlTo="/walnut"
          title="Walnut oil"
          color="bg-orange-200 md:top-14 top-[34%]"
        />
        <VideoScrollCard
          urlTo="/cannabis"
          title="Hamp Seed Oil"
          color="bg-teal-200 md:top-16 top-[36%]"
        />
        <VideoScrollCard title="Vegan Capsule" color="bg-gray-200 md:top-20 top-[38%]" />
      </div>
    </section>
  );
};

export default VideoScrollSection;
