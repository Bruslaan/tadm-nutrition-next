'use client';
import Link from 'next/link';
import { useDictionary } from '../app/DictProvider';

const CallToActionBanner = () => {
  const { dictionary, lang } = useDictionary();
  return (
    <div className="px-5">
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-center justify-center gap-6 rounded-3xl bg-linear-to-r from-blue-50 to-orange-100 p-10 text-center">
        <h2 className="text-2xl lg:text-5xl">Unlock your ultimate potential with tadm</h2>
        <Link href={`/${lang}/product/tadm-max-pack`}>
          <button
              data-goal="cta_shop_now"
              className="hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mt-5 mr-3 inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              {dictionary.shopNow as string}
            </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionBanner;
