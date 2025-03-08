'use client';
import { useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useCallback, useRef } from 'react';
import VideoScrollCard from './video-scroll-card';

type CardConfig = {
  urlTo?: string;
  title: string;
  color: string;
  topPosition: string;
  text: string | ReactNode;
};
interface Product {
  title: string;
  content: string;
  list: string[];
}

export interface InsideTadm {
  title: string;
  cumin: Product;
  algae_oil: Product;
  hemp_oil: Product;
  walnut_oil: Product;
  softgels: Product;
}

const VideoScrollSection = ({ title, items }: { title: string; items: InsideTadm }) => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    // @ts-ignore
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const Chip = ({ children }: { children: ReactNode }) => {
    return (
      <li className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-base text-white">
        {children}
      </li>
    );
  };

  const ChipList = ({ children }: { children: ReactNode }) => {
    return <ul className="flex flex-wrap gap-4 pt-4">{children}</ul>;
  };

  // Configure cards in a more maintainable way
  const cardsConfig: CardConfig[] = [
    {
      title: items.cumin.title,
      color: 'bg-blue-50',
      topPosition: 'md:top-[18%] top-[25%]',
      urlTo: '/cumin',
      text: (
        <div className="flex flex-col gap-3">
          <p>{items.cumin.content}</p>
          <ChipList>
            {items.cumin.list.map((item, index) => {
              return <Chip key={index}>{item}</Chip>;
            })}
          </ChipList>
        </div>
      )
    },
    {
      title: items.algae_oil.title,
      color: 'bg-green-50',
      topPosition: 'md:top-[20%] top-[27%]',
      urlTo: '/algae',
      text: (
        <div className="flex flex-col gap-3">
          <p>{items.algae_oil.content}</p>
          <ChipList>
            {items.algae_oil.list.map((item, index) => {
              return <Chip key={index}>{item}</Chip>;
            })}
          </ChipList>
        </div>
      )
    },
    {
      title: items.walnut_oil.title,
      color: 'bg-orange-50',
      topPosition: 'md:top-[22%] top-[29%]',
      urlTo: '/walnut',
      text: (
        <div className="flex flex-col gap-3">
          <p>{items.walnut_oil.content}</p>
          <ChipList>
            {items.walnut_oil.list.map((item, index) => {
              return <Chip key={index}>{item}</Chip>;
            })}
          </ChipList>
        </div>
      )
    },
    {
      title: items.hemp_oil.title,
      color: 'bg-teal-50',
      topPosition: 'md:top-[24%] top-[31%]',
      urlTo: '/cannabis',
      text: (
        <div className="flex flex-col gap-3">
          <p>{items.hemp_oil.content}</p>
          <ChipList>
            {items.hemp_oil.list.map((item, index) => {
              return <Chip key={index}>{item}</Chip>;
            })}
          </ChipList>
        </div>
      )
    },
    {
      title: items.softgels.title,
      color: 'bg-gray-50',
      topPosition: 'md:top-[26%] top-[33%]',
      text: (
        <div className="flex flex-col gap-3">
          <p>{items.softgels.content}</p>
          <ChipList>
            {items.softgels.list.map((item, index) => {
              return <Chip key={index}>{item}</Chip>;
            })}
          </ChipList>
        </div>
      )
    }
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
      <div className="top-0 right-0 z-50 mt-3 flex w-full items-end justify-center md:mt-10 md:hidden md:max-w-[40%]">
        <h2 className="text-center text-3xl leading-none font-bold md:text-6xl">{title}</h2>
      </div>

      {/* Video Section */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
        <div className="absolute top-0 right-0 z-50 mt-3 hidden w-full items-end justify-center md:mt-10 md:flex md:max-w-[40%]">
          <h2 className="text-center text-3xl leading-none font-bold md:text-4xl lg:text-6xl">
            {title}
          </h2>
        </div>

        <div className="relative -mt-8 w-[160%] md:-translate-x-36 lg:w-[110%]">
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
      <div className="absolute top-0 right-0 h-full w-full px-1 pt-80 md:max-w-[50%] 2xl:max-w-[35%]">
        {cardsConfig.map((config, index) => (
          <VideoScrollCard
            key={config.title}
            ref={(el: HTMLDivElement | null) => (cardsRef.current[index] = el)}
            urlTo={config.urlTo}
            title={config.title}
            color={`${config.color} ${config.topPosition}`}
            text={config.text}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoScrollSection;
