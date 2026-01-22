'use client';

import { IconX } from '@tabler/icons-react';
import { useState } from 'react';
import StarRating from './star-rating';

type Review = {
  name: string;
  body: string;
};

const reviews: Review[] = [
  {
    name: 'Maria G.',
    body: "I received tadm Brain as a gift from my sister and I'm absolutely thrilled with this vegan alternative for Omega-3. Living in Norway, I know how important Omega-3 is, but most people here rely on fish oil. tadm Brain is a far better choice. plant based, high quality, and exactly what I was looking for!"
  },
  {
    name: 'Lisa M.',
    body: 'I started taking tadm a few months ago, and I can truly feel the difference. My ability to focus has improved, and I retain information much better. Whether at work or during my studies, I feel mentally sharper and more alert throughout the day.'
  },
  {
    name: 'Eva G.',
    body: 'Seit sechs Monaten nehme ich gemeinsam mit meinen Kindern (7 und 2 Jahre) tadm Brain und merke, wie wir insgesamt widerstandsfähiger gegen Erkältungen und Krankheiten sind. Besonders freut mich, dass meine Kinder es gerne einnehmen – mein Kleiner kaut sogar mit Begeisterung auf den veganen Softgels. Eine einfache und effektive Ergänzung für unsere Gesundheit!'
  },
  {
    name: 'Armin E.',
    body: 'Ich habe tadm für meinen Vater gekauft, da er Schwarzkümmelöl und andere wertvolle Öle wie Omega-3 nicht in flüssiger Form zu sich nehmen kann. Die Softgels sind die perfekte Lösung. Sie sind geschmacksneutral und leicht zu schlucken. Er nimmt sie jetzt täglich ohne Probleme und mit Freude ein. Eine klare Empfehlung für alle, die nach einer einfachen und effektiven Alternative suchen!'
  },
  {
    name: 'Medina E.',
    body: 'Bei Nahrungsergänzungsmitteln achte ich besonders auf das Herstellungsland und die Qualität der Produktion. Für mich ist es essenziell, dass sie nicht nur vegan sind, sondern auch höchsten Qualitätsstandards entsprechen. Bei tadm habe ich genau das gefunden und vor allem gespürt.'
  },
  {
    name: 'Luisa D.',
    body: 'Хочу дать отзыв продукту Tadm. Месяц как начала принимать этот продукт. К своему удивлению заметила,что мне намного лучше. Прошла усталость,сонливость,. Стала бодрой и головная боль прошла. Твёрдо решила буду принимать дальше'
  },
  {
    name: 'Sara K.',
    body: 'Ich habe angefangen Tadm zu nehmen, da ich ständig mit Müdigkeit zu kämpfen hatte. Schon nach der ersten Woche habe ich gemerkt, dass ich mehr Energie und Konzentration im Alltag habe. Ich bin positiv überrascht und werde das Produkt auf jeden Fall weiter nehmen und kann es nur jedem empfehlen.'
  },
  {
    name: 'Andy W.',
    body: 'Ich nehme Tadm seit etwa 2-3 Monaten. Mein Gedächtnisvermögen hat sich deutlich verbessert und kann mir zum Beispiel beim lernen in der Uni viel besser den Stoff merken. Irgendwie fühl ich mich seit der Einnahme auch besser gelaunt.'
  },
  {
    name: 'Marc G.',
    body: 'Ich habe ein Produkt gesucht welches mein Omega 3 bedarf deckt ohne, dass ich zu Fischöl kapseln greifen muss was meist auch geschmacklich schwierig einzunehmen war. Mit den Kapseln von tadm ist neben dem Omega 3 auch das Omega 3 zu 6 Verhältnis optimal was ich durch meine verbesserte Konzentration auch merke.'
  },
  {
    name: 'Nadine P.',
    body: 'Ich bin mit Tadm sehr glücklich. Die Leute in der Arbeit fragen mich was ich da immer einnehme und sind wegen der schönen Flasche sehr neugierig. Ich kann das Produkt jedem empfehlen!'
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const rowsRepeated = [...firstRow, ...firstRow, ...secondRow, ...secondRow];

const MAX_BODY_LENGTH = 100;

const truncateText = (text: string) => {
  if (text.length <= MAX_BODY_LENGTH) return { text, isTruncated: false };
  return { text: text.slice(0, MAX_BODY_LENGTH).trim() + '...', isTruncated: true };
};

const ReviewCard = ({
  review,
  onSelect
}: {
  review: Review;
  onSelect: (review: Review) => void;
}) => {
  const { text, isTruncated } = truncateText(review.body);

  return (
    <button
      onClick={() => onSelect(review)}
      className="w-64 shrink-0 cursor-pointer rounded-2xl bg-white p-5 text-left ring-1 ring-gray-200 transition-all hover:ring-orange-300 md:w-80"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900">{review.name}</span>
        <StarRating />
      </div>
      <blockquote className="text-sm leading-relaxed text-gray-600">
        &ldquo;{text}&rdquo;
        {isTruncated && <span className="ml-1 font-medium text-orange-500">mehr</span>}
      </blockquote>
    </button>
  );
};

export function MarqueeDemo({ title }: { title: string }) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <>
      <section className="overflow-hidden py-16">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
            Kundenstimmen
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex flex-col gap-4">
            {/* Row 1 - scrolls left */}
            <div className="animate-carousel flex gap-4 overflow-x-scroll px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {rowsRepeated.map((review, index) => (
                <ReviewCard key={`row1-${index}`} review={review} onSelect={setSelectedReview} />
              ))}
            </div>
            {/* Row 2 - scrolls right */}
            <div className="animate-carousel_reverse flex gap-4 overflow-x-scroll px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {rowsRepeated.map((review, index) => (
                <ReviewCard key={`row2-${index}`} review={review} onSelect={setSelectedReview} />
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent sm:w-32" />
        </div>
      </section>

      {/* Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 ring-1 ring-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
              aria-label="Close"
            >
              <IconX className="h-4 w-4" />
            </button>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                {selectedReview.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{selectedReview.name}</h3>
                <StarRating />
              </div>
            </div>

            <div className="rounded-xl bg-orange-50 p-4">
              <blockquote className="text-base leading-relaxed text-gray-700">
                &ldquo;{selectedReview.body}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
