import clsx from 'clsx';
import StarRating from './star-rating';

const reviews = [
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
    body: 'Ich habe ein Produkt gesucht welches mein Omega 3 bedarf deckt ohne, dass ich zu Fischöl kapseln greifen muss was meist auch geschmacklich schwierig einzunehmen war. Mit den Kapseln von Tadm ist neben dem Omega 3 auch das Omega 3 zu 6 Verhältnis optimal was ich durch meine verbesserte Konzentration auch merke.'
  },
  {
    name: 'Nadine P.',
    body: 'Ich bin mit Tadm sehr glücklich. Die Leute in der Arbeit fragen mich was ich da immer einnehme und sind wegen der schönen Flasche sehr neugierig. Ich kann das Produkt jedem empfehlen!'
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const firstRowRepeat = [
  ...firstRow,
  ...firstRow,
  ...secondRow,
  ...secondRow,
  ...firstRow,
  ...firstRow,
  ...secondRow,
  ...secondRow
];
const ReviewCard = ({
  name,
  username,
  body
}: {
  name: string;
  username?: string;
  body: string;
}) => {
  return (
    <figure
      className={clsx(
        'relative w-56 cursor-pointer overflow-hidden rounded-xl border p-4 md:w-96',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-white">{name}</figcaption>
          {username && <p className="text-lg font-medium dark:text-white/40">{username}</p>}
        </div>
      </div>
      <div className="mt-2 -ml-1">
        <StarRating />
      </div>

      <blockquote className="md:text-md mt-2 text-xs">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo({ title }: { title: string }) {
  return (
    <section className="w-full pt-10 md:text-xs">
      <div className="mx-auto flex max-w-(--breakpoint-xl) justify-center px-4">
        <h2 className="mb-4 max-w-2xl text-3xl leading-none font-bold tracking-tight md:text-4xl xl:text-5xl dark:text-white">
          {title}
        </h2>
      </div>
      <div className="relative w-full">
        <div className="bg-background relative mt-5 flex w-full flex-col items-center justify-center gap-4 overflow-scroll">
          <div className="flex flex-col items-center justify-center gap-4 py-7">
            <div className="animate-carousel flex gap-4">
              {firstRowRepeat.map((review, index) => (
                <ReviewCard key={'first-row-' + index} {...review} />
              ))}
            </div>
            <div className="animate-carousel_reverse flex gap-4">
              {firstRowRepeat.map((review, index) => (
                <ReviewCard key={'second-row' + index} {...review} />
              ))}
            </div>
          </div>
        </div>
        <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white"></div>
        <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white"></div>
      </div>
    </section>
  );
}
