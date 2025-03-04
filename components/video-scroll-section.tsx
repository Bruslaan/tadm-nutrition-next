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

  const Chip = ({ children }: { children: ReactNode }) => {
    return (
      <div className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-base text-white">
        {children}
      </div>
    );
  };

  const ChipList = ({ children }: { children: ReactNode }) => {
    return <ul className="flex flex-wrap gap-4 pt-4">{children}</ul>;
  };

  // Configure cards in a more maintainable way
  const cardsConfig: CardConfig[] = [
    {
      title: 'Black seed oil',
      color: 'bg-blue-50',
      topPosition: 'md:top-[18%] top-[25%]',
      urlTo: '/cumin',
      text: (
        <div className="flex flex-col gap-3">
          <p>
            We use only organic black cumin oil with a high thymoquinone content to maximize its
            powerful benefits for your health. Recent studies highlight its anti-inflammatory
            properties and immune-boosting effects.
          </p>

          <ul className="flex h-full flex-wrap items-center gap-4 pt-4">
            <li>
              <Chip>Antibakteriell</Chip>
            </li>
            <li>
              <Chip>Antiviral</Chip>
            </li>
            <li>
              <Chip>Entzündungshemmend</Chip>
            </li>
            <li>
              <Chip>Essenziellen Fettsäuren</Chip>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Algae Oil',
      color: 'bg-green-50',
      topPosition: 'md:top-[20%] top-[27%]',
      urlTo: '/algae',
      text: (
        <div className="flex flex-col gap-3">
          <p>
            Unser Algenöl ist die ursprüngliche, vegane Quelle der lebenswichtigen
            Omega-3-Fettsäuren DHA und EPA. Es stärkt die Zellstrukturen, unterstützt das
            Immunsystem und trägt maßgeblich zu einer gesunden Gehirn- und Augengesundheit bei.
          </p>

          <ChipList>
            <li>
              <Chip>Vegane</Chip>
            </li>
            <li>
              <Chip>Omega-3 (DHA & EPA)</Chip>
            </li>
            <li>
              <Chip>Augengesundheit</Chip>
            </li>
            <li>
              <Chip>Gehirn Leistung </Chip>
            </li>
            <li>
              <Chip>Immunsystem</Chip>
            </li>
          </ChipList>
        </div>
      )
    },
    {
      title: 'Walnut oil',
      color: 'bg-orange-50',
      topPosition: 'md:top-[22%] top-[29%]',
      urlTo: '/walnut',
      text: (
        <div className="flex flex-col gap-3">
          <p>
            Our premium-quality walnut oil is rich in valuable Omega-3 fatty acids and Vitamin E –
            perfectly blended to holistically support your health. With its cholesterol-lowering
            properties, walnut oil significantly contributes to heart health while also promoting
            optimal eye health.
          </p>
          <ChipList>
            <li>
              <Chip>Supports heart health</Chip>
            </li>
            <li>
              <Chip>Anti-inflammatory properties</Chip>
            </li>
            <li>
              <Chip>Promotes brain and eye health</Chip>
            </li>
            <li>
              <Chip>High in essential Omega-3 fatty acids</Chip>
            </li>
            <li>
              <Chip>Rich in Vitamin E</Chip>
            </li>
          </ChipList>
        </div>
      )
    },
    {
      title: 'Hamp Seed Oil',
      color: 'bg-teal-50',
      topPosition: 'md:top-[24%] top-[31%]',
      urlTo: '/cannabis',
      text: (
        <div className="flex flex-col gap-3">
          <p>
            We exclusively use hemp oil with an ideal ratio of Omega-3 to Omega-6 fatty acids (3:1)
            and anti-inflammatory gamma-linolenic acid (GLA). In our unique formulation, it
            strengthens skin and immune health while supporting cognitive functions.
          </p>
          <ChipList>
            <li>
              <Chip>Rich in Omega-3 and Omega-6 fatty acids</Chip>
            </li>
            <li>
              <Chip>Anti-inflammatory benefits</Chip>
            </li>
            <li>
              <Chip>Supports skin and immune health</Chip>
            </li>
            <li>
              <Chip>Enhances mental clarity and focus</Chip>
            </li>
          </ChipList>
        </div>
      )
    },
    {
      title: 'Vegan Capsule',
      color: 'bg-gray-50',
      topPosition: 'md:top-[26%] top-[33%]',
      text: (
        <div className="flex flex-col gap-3">
          <p>
            Our 100% vegan softgels are manufactured under the highest quality standards in a
            certified facility in Germany. With high bioavailability and a controlled release
            profile, they ensure optimal absorption of essential nutrients – delivering maximum
            effectiveness.
          </p>
          <p></p>
          <ChipList>
            <li>
              <Chip>Vegan</Chip>
            </li>
            <li>
              <Chip>High bioavailability</Chip>
            </li>
            <li>
              <Chip>Easy to consume</Chip>
            </li>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJson) }}
      />

      <div className="top-0 right-0 z-50 mt-3 flex w-full items-end justify-center md:mt-10 md:hidden md:max-w-[40%]">
        <h2 className="text-center text-3xl leading-none font-bold md:text-6xl">Inside the tadm</h2>
      </div>

      {/* Video Section */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
        <div className="absolute top-0 right-0 z-50 mt-3 hidden w-full items-end justify-center md:mt-10 md:flex md:max-w-[40%]">
          <h2 className="text-center text-3xl leading-none font-bold md:text-4xl lg:text-6xl">
            Inside the tadm
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
      <div className="absolute top-0 right-0 h-full w-full px-1 pt-80 md:max-w-[40%]">
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
