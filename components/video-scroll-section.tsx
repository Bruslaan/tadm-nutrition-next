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
    // @ts-ignore
    target: container
  });
  const firstCard = useRef<HTMLDivElement>(null);
  const secondCard = useRef<HTMLDivElement>(null);
  const thirdCard = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !container.current) return;
    videoRef.current.pause();

    const handleScrollChange = (progress: number) => {
      console.log({ progress });
      const duration = videoRef.current!.duration;
      requestAnimationFrame(() => {
        videoRef.current!.currentTime = progress * duration;
        if (firstCard.current) {
          firstCard.current.style.transition = 'transform 0.3s';
          if (progress > 0.2) {
            firstCard.current.style.transform = 'scale(0.94)';
          } else {
            firstCard.current.style.transform = 'scale(1)';
          }
        }

        if (secondCard.current) {
          secondCard.current.style.transition = 'transform 0.3s';
          if (progress > 0.35) {
            secondCard.current.style.transform = 'scale(0.96)';
          } else {
            secondCard.current.style.transform = 'scale(1)';
          }
        }

        if (thirdCard.current) {
          thirdCard.current.style.transition = 'transform 0.3s';
          if (progress > 0.5) {
            thirdCard.current.style.transform = 'scale(0.98)';
          } else {
            thirdCard.current.style.transform = 'scale(1)';
          }
        }
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
        <h2 className="mb-4 max-w-2xl text-3xl font-bold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl">
          What is Tadm
        </h2>
      </div>
      {/* Video */}
      <div className="sticky top-0 mr-auto h-[100vh] w-full overflow-hidden">
        {/* <FloatingIcon className="right-10 top-[50%] z-10 rotate-45 blur-sm" size={100} /> */}
        <div className="w-[160%] lg:min-h-screen lg:w-[110%]">
          <video
            playsInline
            ref={videoRef}
            className="custom-float object-cover object-center lg:min-h-screen"
            muted
            autoPlay
            loop
          >
            <source
              src="https://res.cloudinary.com/dtvtmykeg/video/upload/v1718573595/tadm_skbkly.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Cards */}
      <div className="absolute top-0 h-full w-full px-5 pt-80 lg:right-0 lg:max-w-[40%]">
        <VideoScrollCard
          ref={firstCard}
          urlTo="/cumin"
          title="Black seed oil"
          color="bg-blue-50 md:top-[10%] top-[30%]"
        />

        <VideoScrollCard
          ref={secondCard}
          urlTo="/algae"
          title="Algae Oil"
          color="bg-green-50 md:top-[12%] top-[32%]"
        />
        <VideoScrollCard
          ref={thirdCard}
          urlTo="/walnut"
          title="Walnut oil"
          color="bg-orange-50 md:top-[14%] top-[34%]"
        />
        <VideoScrollCard
          urlTo="/cannabis"
          title="Hamp Seed Oil"
          color="bg-teal-50 md:top-[16%] top-[36%]"
        />
        <VideoScrollCard title="Vegan Capsule" color="bg-gray-50 md:top-[16%] top-[38%]" />
      </div>
    </section>
  );
};

export default VideoScrollSection;
