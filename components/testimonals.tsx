import clsx from 'clsx';
import StarRating from './star-rating';

const reviews = [
  {
    name: 'Sarah',
    username: '@sarah',
    body: 'I was skeptical at first, but after using this for a few weeks, I definitely feel more focused. The fact that it has algae-based Omega-3 and cumin oil makes it a unique combination. I’m happy with the results.',
    img: 'https://avatar.vercel.sh/sarah'
  },
  {
    name: 'David',
    username: '@david',
    body: 'I’ve tried a lot of supplements, but this one really stands out. I feel more mentally clear and less foggy. The algae oil is a nice touch compared to fish oil.',
    img: 'https://avatar.vercel.sh/david'
  },
  {
    name: 'Emma',
    username: '@emma',
    body: 'This brain nutrition product has made a noticeable difference in my concentration levels. The combination of Omega-3 from algae oil and cumin oil works wonders.',
    img: 'https://avatar.vercel.sh/emma'
  },
  {
    name: 'Michael',
    username: '@michael',
    body: 'I love how natural this supplement is. I can feel the difference when I’m working or studying. My focus has definitely improved since I started taking it.',
    img: 'https://avatar.vercel.sh/michael'
  },
  {
    name: 'Lily',
    username: '@lily',
    body: 'This product is amazing! It has improved my cognitive function and I no longer feel sluggish throughout the day. The algae oil is a game changer.',
    img: 'https://avatar.vercel.sh/lily'
  },
  {
    name: 'Ethan',
    username: '@ethan',
    body: 'I didn’t expect such fast results. After just a week, I noticed that I was thinking more clearly and had more energy. The combination of algae oil and cumin oil is perfect. Highly recommend!',
    img: 'https://avatar.vercel.sh/ethan'
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
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={clsx(
        'relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-white">{name}</figcaption>
          <p className="text-lg font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <div className="mt-2 -ml-1">
        <StarRating />
      </div>

      <blockquote className="mt-2 text-lg">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo({ title }: { title: string }) {
  return (
    <section className="min-h-screen w-full pt-10">
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
