'use client';
import Image from 'next/image';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useRef, useState } from 'react';

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const ExpertsCarousel = ({
  title,
  testimonials
}: {
  title: string;
  testimonials: Testimonial[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSlide = (direction: 'next' | 'prev') => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const slides = Array.from(carousel.children);

    // Calculate new slide index with wrap-around logic
    let newSlideIndex;
    if (direction === 'next') {
      // If at the last slide, wrap to the first slide
      newSlideIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    } else {
      // If at the first slide, wrap to the last slide
      newSlideIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    }

    const targetSlide = slides[newSlideIndex] as HTMLElement;

    // For smooth wrapping when going from last to first slide
    if (direction === 'next' && currentSlide === slides.length - 1) {
      // First scroll to the beginning without animation
      carousel.scrollTo({
        left: 0,
        behavior: 'auto'
      });
      // Small timeout to ensure the scroll happened
      setTimeout(() => {
        carousel.scrollTo({
          left: targetSlide.offsetLeft - carousel.offsetLeft,
          behavior: 'smooth'
        });
      }, 10);
    }
    // For smooth wrapping when going from first to last slide
    else if (direction === 'prev' && currentSlide === 0) {
      // First scroll to the end without animation
      carousel.scrollTo({
        left: carousel.scrollWidth,
        behavior: 'auto'
      });
      // Small timeout to ensure the scroll happened
      setTimeout(() => {
        carousel.scrollTo({
          left: targetSlide.offsetLeft - carousel.offsetLeft,
          behavior: 'smooth'
        });
      }, 10);
    }
    // Normal scrolling for non-wrapping cases
    else {
      carousel.scrollTo({
        left: targetSlide.offsetLeft - carousel.offsetLeft,
        behavior: 'smooth'
      });
    }

    setCurrentSlide(newSlideIndex);
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-evenly overflow-x-hidden">
      <div className="mx-auto flex max-w-(--breakpoint-xl) justify-center px-4">
        <h2 className="max-w-2xl text-center text-3xl leading-none font-bold tracking-tight md:text-4xl xl:text-5xl dark:text-white">
          {title}
        </h2>
      </div>

      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div
        ref={carouselRef}
        className="no-scrollbar carousel-slides relative -mb-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pt-2 pb-12"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            id={index.toString()}
            className="relative w-full shrink-0 snap-center snap-always overflow-hidden rounded-xl border bg-white p-4 md:max-w-lg"
          >
            <div className="flex w-full flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src={testimonial.src ? testimonial.src : '/static/wallnut.png'}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    draggable={false}
                    className="aspect-square h-20 w-20 rounded-md object-cover object-top"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>

                <blockquote className="text-dm text-gray-500 dark:text-neutral-500">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-6 md:pt-0">
        <button
          onClick={() => scrollToSlide('prev')}
          className="group/button flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        >
          <IconArrowLeft className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
        </button>

        <button
          onClick={() => scrollToSlide('next')}
          className="group/button flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        >
          <IconArrowRight className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
        </button>
      </div>
    </section>
  );
};

export default ExpertsCarousel;
