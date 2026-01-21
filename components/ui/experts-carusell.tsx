'use client';
import { IconArrowLeft, IconArrowRight, IconQuote, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const MAX_QUOTE_LENGTH = 120;

const ExpertsCarousel = ({
  title,
  testimonials
}: {
  title: string;
  testimonials: Testimonial[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const scrollToSlide = useCallback(
    (index: number) => {
      if (!carouselRef.current) return;
      const carousel = carouselRef.current;
      const slides = Array.from(carousel.children);
      const targetSlide = slides[index] as HTMLElement;

      if (targetSlide) {
        carousel.scrollTo({
          left: targetSlide.offsetLeft - carousel.offsetLeft,
          behavior: 'smooth'
        });
        setCurrentSlide(index);
      }
    },
    [setCurrentSlide]
  );

  const handleNext = () => {
    const newIndex = currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1;
    scrollToSlide(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
    scrollToSlide(newIndex);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTestimonial(null);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Update current slide on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const slides = Array.from(carousel.children) as HTMLElement[];
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = slides[0]?.offsetWidth || 0;
      const newIndex = Math.round(scrollLeft / (slideWidth + 24));
      if (newIndex !== currentSlide && newIndex >= 0 && newIndex < testimonials.length) {
        setCurrentSlide(newIndex);
      }
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [currentSlide, testimonials.length]);

  const truncateQuote = (quote: string) => {
    if (quote.length <= MAX_QUOTE_LENGTH) return { text: quote, isTruncated: false };
    return { text: quote.slice(0, MAX_QUOTE_LENGTH).trim() + '...', isTruncated: true };
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-100 opacity-50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-100 opacity-50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center lg:mb-16">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-4"
            >
              {testimonials.map((testimonial, index) => {
                const { text, isTruncated } = truncateQuote(testimonial.quote);
                return (
                  <div
                    key={index}
                    className="w-full shrink-0 snap-center sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <button
                      onClick={() => setSelectedTestimonial(testimonial)}
                      className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-white p-6 text-left ring-1 ring-gray-200 transition-all duration-300 hover:ring-orange-300 sm:p-8"
                    >
                      {/* Quote icon */}
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                        <IconQuote className="h-5 w-5" />
                      </div>

                      {/* Quote */}
                      <blockquote className="mb-4 text-sm leading-relaxed text-gray-600">
                        &ldquo;{text}&rdquo;
                        {isTruncated && (
                          <span className="ml-1 font-medium text-orange-500">Read more</span>
                        )}
                      </blockquote>

                      {/* Author */}
                      <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-4">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-orange-100">
                          <Image
                            src={testimonial.src || '/static/wallnut.png'}
                            alt={testimonial.name}
                            fill
                            className="object-cover object-top"
                            sizes="48px"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="truncate text-xs text-gray-500">
                            {testimonial.designation}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 ring-1 ring-gray-200 transition-all hover:bg-orange-500 hover:text-white hover:ring-orange-500"
                aria-label="Previous testimonial"
              >
                <IconArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 bg-orange-500'
                        : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 ring-1 ring-gray-200 transition-all hover:bg-orange-500 hover:text-white hover:ring-orange-500"
                aria-label="Next testimonial"
              >
                <IconArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 ring-1 ring-gray-200 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
              aria-label="Close modal"
            >
              <IconX className="h-4 w-4" />
            </button>

            {/* Author header */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-orange-100">
                <Image
                  src={selectedTestimonial.src || '/static/wallnut.png'}
                  alt={selectedTestimonial.name}
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{selectedTestimonial.name}</h3>
                <p className="text-sm text-gray-500">{selectedTestimonial.designation}</p>
              </div>
            </div>

            {/* Full quote */}
            <div className="rounded-xl bg-orange-50 p-4">
              <IconQuote className="mb-2 h-6 w-6 text-orange-400" />
              <blockquote className="text-base leading-relaxed text-gray-700">
                {selectedTestimonial.quote}
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpertsCarousel;
