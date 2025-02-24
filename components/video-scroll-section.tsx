'use client';
import { useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useRef } from 'react';
import VideoScrollCard from './video-scroll-card';

type CardConfig = {
  urlTo?: string;
  title: string;
  color: string;
  topPosition: string;
};

const videoJson = {
  /* ... keep existing JSON ... */
};

const VideoScrollSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    // @ts-ignore
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Configure cards in a more maintainable way
  const cardsConfig: CardConfig[] = [
    {
      title: 'Black seed oil',
      color: 'bg-blue-50',
      topPosition: 'md:top-[10%] top-[30%]',
      urlTo: '/cumin'
    },
    {
      title: 'Algae Oil',
      color: 'bg-green-50',
      topPosition: 'md:top-[12%] top-[32%]',
      urlTo: '/algae'
    },
    {
      title: 'Walnut oil',
      color: 'bg-orange-50',
      topPosition: 'md:top-[14%] top-[34%]',
      urlTo: '/walnut'
    },
    {
      title: 'Hamp Seed Oil',
      color: 'bg-teal-50',
      topPosition: 'md:top-[16%] top-[36%]',
      urlTo: '/cannabis'
    },
    { title: 'Vegan Capsule', color: 'bg-gray-50', topPosition: 'md:top-[16%] top-[38%]' }
  ];

  // Smooth video scrubbing
  const updateVideoTime = useCallback((progress: number) => {
    if (!videoRef.current) return;

    const duration = videoRef.current.duration;

    if (!duration) return;
    if (progress > 0.984) {
      const reversedProgress = (progress - 0.984) / 0.1;
      videoRef.current.currentTime = (1 - reversedProgress) * duration;
    } else {
      videoRef.current.currentTime = progress * duration;
    }
  }, []);

  // Optimized card scaling with useTransform
  const cardScale = useTransform(scrollYProgress, [0, 1], [0, 0.2]);
  useTransform(scrollYProgress, (progress) => {
    if (!requestAnimationFrame) {
      return;
    }
    requestAnimationFrame(() => {
      updateVideoTime(progress);
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const scale = cardScale.get();
        const scaleNew = 0.9 - scale + index * 0.04;
        card.style.transform = `scale(${scaleNew > 1 ? 1 : scaleNew})`;
        card.style.willChange = 'transform';
      });
    });
  });

  return (
    <section
      ref={containerRef}
      id="inside-tadm"
      className="relative m-auto min-h-[600vh] bg-white pt-10 lg:min-h-[500vh]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJson) }}
      />

      {/* Header Section */}
      <div className="z-50 mx-auto flex h-full max-w-screen-xl items-baseline overflow-hidden py-5">
        <h2 className="mb-4 mr-3 max-w-2xl text-3xl font-bold leading-none tracking-tight md:text-6xl">
          Inside the
        </h2>
        <Image
          src="/static/logo-hd.webp"
          alt="logo"
          width={200}
          height={200}
          className="[clip-path:inset(-2px)]"
          priority
        />
      </div>

      {/* Video Section */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
        <div className="relative w-[160%] md:-translate-x-36 lg:w-[110%]">
          <video
            ref={videoRef}
            playsInline
            muted
            preload="metadata"
            className="h-full w-full object-cover object-center"
          >
            <source
              src="https://res.cloudinary.com/dtvtmykeg/video/upload/v1718573595/tadm_skbkly.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Cards Section */}
      <div className="absolute right-0 top-0 h-full w-full px-5 pt-80 md:max-w-[40%]">
        {cardsConfig.map((config, index) => (
          <VideoScrollCard
            key={config.title}
            ref={(el: HTMLDivElement | null) => (cardsRef.current[index] = el)}
            urlTo={config.urlTo}
            title={config.title}
            color={`${config.color} ${config.topPosition}`}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoScrollSection;
