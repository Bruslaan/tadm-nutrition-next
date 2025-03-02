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

  // Configure cards in a more maintainable way
  const cardsConfig: CardConfig[] = [
    {
      title: 'Black seed oil',
      color: 'bg-blue-50',
      topPosition: 'md:top-[10%] top-[30%]',
      urlTo: '/cumin',
      text: (
        <div className="flex flex-col gap-2">
          <p>
            We use only organic black cumin oil with a high thymoquinone content to maximize its
            powerful benefits for your health. Recent studies highlight its anti-inflammatory
            properties and immune-boosting effects.
          </p>

          <ul className="list-disc pl-4">
            <li>
              <strong>Antibakteriell und antiviral</strong>
            </li>
            <li>
              <strong>Entzündungshemmend</strong>
            </li>
            <li>
              <strong>Reich an essenziellen Fettsäuren</strong>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Algae Oil',
      color: 'bg-green-50',
      topPosition: 'md:top-[12%] top-[32%]',
      urlTo: '/algae',
      text: (
        <div className="flex flex-col gap-2">
          <p>
            Unser Algenöl ist die ursprüngliche, vegane Quelle der lebenswichtigen
            Omega-3-Fettsäuren DHA und EPA. Es stärkt die Zellstrukturen, unterstützt das
            Immunsystem und trägt maßgeblich zu einer gesunden Gehirn- und Augengesundheit bei. Zum
            Wohl von Mensch, Tier und Umwelt wird unser Öl nachhaltig aus kultivierten Mikroalgen
            gewonnen – schadstofffrei und nicht nur eine Alternative, sondern die überlegene Wahl
            gegenüber Fischöl!
          </p>
          <ul className="list-disc pl-4">
            <li>
              <strong>Vegane Omega-3-Quelle (DHA & EPA)</strong>
            </li>
            <li>
              <strong>Fördert Gehirn- und Augengesundheit</strong>
            </li>
            <li>
              <strong>Stärkt das Immunsystem</strong>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Walnut oil',
      color: 'bg-orange-50',
      topPosition: 'md:top-[14%] top-[34%]',
      urlTo: '/walnut',
      text: (
        <div className="flex flex-col gap-2">
          <p>
            Our premium-quality walnut oil is rich in valuable Omega-3 fatty acids and Vitamin E –
            perfectly blended to holistically support your health. With its cholesterol-lowering
            properties, walnut oil significantly contributes to heart health while also promoting
            optimal eye health.
          </p>
          <ul className="list-disc pl-4">
            <li>
              <strong>Supports heart health</strong>
            </li>
            <li>
              <strong>Anti-inflammatory properties</strong>
            </li>
            <li>
              <strong>Promotes brain and eye health</strong>
            </li>
            <li>
              <strong>High in essential Omega-3 fatty acids</strong>
            </li>
            <li>
              <strong>Rich in Vitamin E</strong>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Hamp Seed Oil',
      color: 'bg-teal-50',
      topPosition: 'md:top-[16%] top-[36%]',
      urlTo: '/cannabis',
      text: (
        <div className="flex flex-col gap-2">
          <p>
            We exclusively use hemp oil with an ideal ratio of Omega-3 to Omega-6 fatty acids (3:1)
            and anti-inflammatory gamma-linolenic acid (GLA). In our unique formulation, it
            strengthens skin and immune health while supporting cognitive functions. Thanks to
            resource-efficient cultivation and gentle cold pressing, the valuable nutrients are
            optimally preserved. This makes our hemp oil a sustainable and premium choice for a
            health-conscious lifestyle.
          </p>
          <ul className="list-disc pl-4">
            <li>
              <strong>Rich in Omega-3 and Omega-6 fatty acids</strong>
            </li>
            <li>
              <strong>Anti-inflammatory benefits</strong>
            </li>
            <li>
              <strong>Supports skin and immune health</strong>
            </li>
            <li>
              <strong>Enhances mental clarity and focus</strong>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Vegan Capsule',
      color: 'bg-gray-50',
      topPosition: 'md:top-[16%] top-[38%]',
      text: (
        <div className="flex flex-col gap-2">
          <p>
            Our 100% vegan softgels are manufactured under the highest quality standards in a
            certified facility in Germany. With high bioavailability and a controlled release
            profile, they ensure optimal absorption of essential nutrients – delivering maximum
            effectiveness.
          </p>
          <p>
            To make your health routine as simple as possible, we’ve designed our softcaps to be
            soft and easy to swallow. Odorless and tasteless, they seamlessly fit into your daily
            routine – nothing stands in the way of your success!
          </p>
          <ul className="list-disc pl-4">
            <li>
              <strong>Vegan</strong>
            </li>
            <li>
              <strong>High bioavailability</strong>
            </li>
            <li>
              <strong>Easy to consume</strong>
            </li>
          </ul>
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

      {/* Video Section */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-50 mt-10 flex w-full items-center justify-center">
          <h2 className="mx-auto text-center text-3xl leading-none font-bold md:text-6xl">
            Inside the Tadm
          </h2>
        </div>

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
      <div className="absolute top-0 right-0 h-full w-full px-5 pt-80 md:max-w-[40%]">
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
