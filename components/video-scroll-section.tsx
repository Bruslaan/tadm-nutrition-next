'use client';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import FadeInAnimation from './fade-in-animation';
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
    <section ref={container} className="relative h-[450vh] bg-white pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoJson)
        }}
      />
      <div className="mx-auto flex max-w-screen-xl justify-center px-4">
        <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">
          What is Tadm
        </h1>
      </div>
      {/* Video */}
      <div className="sticky top-0 mr-auto h-[100vh] w-full overflow-hidden">
        {/* <FloatingIcon className="right-10 top-[50%] z-10 rotate-45 blur-sm" size={100} /> */}
        <div className="w-[160%] lg:h-screen lg:w-auto">
          <video ref={videoRef} className="object-cover object-center lg:h-screen" muted autoPlay>
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
      <div className="absolute top-0 h-full w-full px-10 pt-80 lg:right-0 lg:max-w-[40%]">
        <FadeInAnimation>
          <VideoScrollCard title="Black seed oil" color="from-blue-500 to-blue-200" />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard title="Algae Oil" color="from-green-500 to-green-200" />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard title="Walnut oil" color="from-orange-500 to-orange-200" />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard title="Hamp Oil" color="from-teal-500 to-teal-200" />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard title="Vegan" color="from-gray-600 to-gray-200" />
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default VideoScrollSection;
