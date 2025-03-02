import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export function AnimatedTestimonialsDemo() {
  const testimonials = [
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

  return (
    <section className="min-h-screen w-full pt-10">
      <div className="mx-auto flex max-w-(--breakpoint-xl) justify-center px-4">
        <h2 className="mb-4 max-w-2xl text-3xl leading-none font-bold tracking-tight md:text-4xl xl:text-5xl dark:text-white">
          What our Experts think
        </h2>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
