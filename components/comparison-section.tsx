'use client';

import Link from 'next/link';
import { useDictionary } from '../app/DictProvider';

interface ComparisonItem {
  feature: string;
  tadm: string;
  tadmStatus: 'good' | 'neutral';
  fishOil: string;
  fishOilStatus: 'bad' | 'neutral';
  standard: string;
  standardStatus: 'bad' | 'neutral';
}

interface ComparisonData {
  title: string;
  subtitle: string;
  tadmLabel: string;
  fishOilLabel: string;
  standardLabel: string;
  items: ComparisonItem[];
  ctaText: string;
}

const StatusIcon = ({ status }: { status: 'good' | 'bad' | 'neutral' }) => {
  if (status === 'good') {
    return (
      <svg className="h-5 w-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (status === 'bad') {
    return (
      <svg className="h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  );
};

export default function ComparisonSection() {
  const { dictionary, lang } = useDictionary();
  const data = (dictionary as any).comparison as ComparisonData;

  if (!data) return null;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{data.subtitle}</p>
        </div>

        {/* Comparison Cards - Mobile: Stacked, Desktop: Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* tadm Brain Card - Highlighted */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-orange-400 bg-gradient-to-b from-orange-50 to-white p-6 shadow-lg">
            <div className="absolute top-0 right-0 rounded-bl-lg bg-orange-400 px-3 py-1 text-xs font-semibold text-white">
              {lang === 'de' ? 'Empfohlen' : 'Recommended'}
            </div>
            <h3 className="mb-6 text-xl font-bold text-gray-900">{data.tadmLabel}</h3>
            <ul className="space-y-4">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <StatusIcon status={item.tadmStatus} />
                  <div>
                    <div className="text-xs font-medium text-gray-500">{item.feature}</div>
                    <div className="text-sm font-medium text-gray-900">{item.tadm}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Fish Oil Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-6 text-xl font-bold text-gray-900">{data.fishOilLabel}</h3>
            <ul className="space-y-4">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <StatusIcon status={item.fishOilStatus} />
                  <div>
                    <div className="text-xs font-medium text-gray-500">{item.feature}</div>
                    <div className="text-sm text-gray-600">{item.fishOil}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Omega Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="mb-6 text-xl font-bold text-gray-900">{data.standardLabel}</h3>
            <ul className="space-y-4">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <StatusIcon status={item.standardStatus} />
                  <div>
                    <div className="text-xs font-medium text-gray-500">{item.feature}</div>
                    <div className="text-sm text-gray-600">{item.standard}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/product/tadm-brain-120-softgels`}
            className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
          >
            {data.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
