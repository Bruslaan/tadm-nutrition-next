'use client';
import Image from 'next/image';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useRef, useState } from 'react';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
const testimonials: Testimonial[] = [
  {
    quote:
      'Als Geschäftsführer muss ich täglich körperlich und geistig Höchstleistung erbringen. Lange Arbeitstage haben oft an meiner Energie und Konzentration gezehrt – bis ich auf tadm Brain gestoßen bin.\n\nDank der essenziellen Fettsäuren in tadm Brain starte ich voller Energie in den Tag und bleibe auch abends noch fokussiert. Eine Investition in meine Gesundheit, die sich jeden Tag auszahlt!',
    name: 'Mergim Tahiri',
    designation: 'Geschäftsführer der Tahiri Garten- und Landschaftsbau',
    src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    quote:
      'Als Perfektionist mit höchsten Ansprüchen an mich selbst und alles, was ich konsumiere, führe ich eines der führenden Münchner Umzugsunternehmen. Mein Arbeitsstil, meine Denkweise und meine Erwartungen sind stets auf höchste Standards ausgerichtet. Deshalb war für mich klar: Um täglich maximale Leistung zu erbringen, ist eine gezielte Supplementierung in der heutigen Zeit unerlässlich.\n\nIch suchte nach einem Produkt, das ausschließlich in Deutschland hergestellt, qualitativ hochwertig und frei von Schadstoffen ist. Mit tadm habe ich genau das gefunden – und mehr.',
    name: 'Mark Oliver Eichenseer',
    designation: 'Geschäftsführer Eichenseer Umzüge München',
    src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    quote:
      'Als Profisportler auf Weltniveau vertrete ich Deutschland. Um 100 Prozent Leistung abzurufen, braucht mein Körper mehr als hartes Training – eine starke Immunabwehr und volle mentale Klarheit. Mit tadm bleibe ich gesund, fühle mich kraftvoller und fokussierter auf der Matte.\n\nFrüher war es eine Herausforderung, meinen Körper konstant mit essenziellen Fettsäuren zu versorgen. Jetzt geht es einfach: tadm ist immer dabei – handlich, minimalistisch und unverzichtbar auf meinem Weg zu neuen Medaillen. ✈️🏅',
    name: 'Ahmad Dudarov',
    designation: 'Ringer der deutschen Nationalmannschaft',
    src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    quote:
      'Als Geschäftsführer muss ich täglich körperlich und geistig Höchstleistung erbringen. Lange Arbeitstage haben oft an meiner Energie und Konzentration gezehrt – bis ich auf tadm Brain gestoßen bin.\n\nDank der essenziellen Fettsäuren in tadm Brain starte ich voller Energie in den Tag und bleibe auch abends noch fokussiert. Eine Investition in meine Gesundheit, die sich jeden Tag auszahlt!',
    name: 'Mergim Tahiri',
    designation: 'Geschäftsführer der Tahiri Garten- und Landschaftsbau',
    src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    quote:
      'Als Perfektionist mit höchsten Ansprüchen an mich selbst und alles, was ich konsumiere, führe ich eines der führenden Münchner Umzugsunternehmen. Mein Arbeitsstil, meine Denkweise und meine Erwartungen sind stets auf höchste Standards ausgerichtet. Deshalb war für mich klar: Um täglich maximale Leistung zu erbringen, ist eine gezielte Supplementierung in der heutigen Zeit unerlässlich.\n\nIch suchte nach einem Produkt, das ausschließlich in Deutschland hergestellt, qualitativ hochwertig und frei von Schadstoffen ist. Mit tadm habe ich genau das gefunden – und mehr.',
    name: 'Mark Oliver Eichenseer',
    designation: 'Geschäftsführer Eichenseer Umzüge München',
    src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    quote:
      'Als Profisportler auf Weltniveau vertrete ich Deutschland. Um 100 Prozent Leistung abzurufen, braucht mein Körper mehr als hartes Training – eine starke Immunabwehr und volle mentale Klarheit. Mit tadm bleibe ich gesund, fühle mich kraftvoller und fokussierter auf der Matte.\n\nFrüher war es eine Herausforderung, meinen Körper konstant mit essenziellen Fettsäuren zu versorgen. Jetzt geht es einfach: tadm ist immer dabei – handlich, minimalistisch und unverzichtbar auf meinem Weg zu neuen Medaillen. ✈️🏅',
    name: 'Ahmad Dudarov',
    designation: 'Ringer der deutschen Nationalmannschaft',
    src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];
const ExpertsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSlide = (direction: 'next' | 'prev') => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const slides = Array.from(carousel.children);

    let newSlideIndex =
      direction === 'next'
        ? Math.min(currentSlide + 1, slides.length - 1)
        : Math.max(currentSlide - 1, 0);

    const targetSlide = slides[newSlideIndex] as HTMLElement;

    carousel.scrollTo({
      left: targetSlide.offsetLeft - carousel.offsetLeft,
      behavior: 'smooth'
    });

    setCurrentSlide(newSlideIndex);
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-evenly overflow-x-hidden pt-10">
      <div className="mx-auto flex max-w-(--breakpoint-xl) justify-center px-4">
        <h2 className="max-w-2xl text-3xl leading-none font-bold tracking-tight md:text-4xl xl:text-5xl dark:text-white">
          What our Experts think
        </h2>
      </div>

      <div
        ref={carouselRef}
        className="no-scrollbar carousel-slides relative -mb-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pt-2 pb-12"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            id={index.toString()}
            className="relative w-full shrink-0 snap-center snap-always overflow-hidden rounded-lg p-4 md:max-w-lg"
          >
            <div className="flex w-full flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    draggable={false}
                    className="h-14 w-14 rounded-xl object-cover object-center"
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
          disabled={currentSlide === 0}
          className="group/button flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 dark:bg-neutral-800"
        >
          <IconArrowLeft className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
        </button>

        <button
          onClick={() => scrollToSlide('next')}
          disabled={currentSlide === testimonials.length - 1}
          className="group/button flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 dark:bg-neutral-800"
        >
          <IconArrowRight className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
        </button>
      </div>
    </section>
  );
};

export default ExpertsCarousel;
