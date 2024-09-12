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
        <FadeInAnimation withTransform>
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">
            What is Tadm
          </h1>
        </FadeInAnimation>
      </div>
      {/* Video */}
      <div className="sticky top-0 mr-auto h-[100vh] w-full overflow-hidden">
        <div className="w-[160%] lg:w-full">
          <video ref={videoRef} className="w-[200%] object-cover" muted>
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
          <VideoScrollCard />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard />
        </FadeInAnimation>
        <FadeInAnimation>
          <VideoScrollCard />
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default VideoScrollSection;
