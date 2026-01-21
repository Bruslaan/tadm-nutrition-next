'use client';

import Image from 'next/image';
import { useDictionary } from '../app/DictProvider';

interface Ingredient {
  name: string;
  latin: string;
  amount: number;
}

interface OmegaFat {
  type: string;
  amount: number;
}

interface NutritionFactsData {
  title: string;
  subtitle: string;
  ingredients: Ingredient[];
  omegaFats: OmegaFat[];
  dailyDose: string;
  perBottle: string;
}

export default function NutritionFactsSection() {
  const { dictionary } = useDictionary();
  const data = (dictionary as any).nutritionFacts as NutritionFactsData;

  if (!data) return null;

  const maxIngredient = Math.max(...data.ingredients.map((i) => i.amount));
  const maxOmega = Math.max(...data.omegaFats.map((o) => o.amount));

  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="text-lg text-gray-600">{data.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-sm">
              <Image
                src="/static/mix.jpg"
                alt="tadm Brain Softgels"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Right: Ingredient Breakdown */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-xl font-semibold">
              {dictionary.lang === 'de' ? 'Inhaltsstoffe' : 'Ingredients'}
            </h3>

            <div className="space-y-4">
              {data.ingredients.map((ingredient) => (
                <div key={ingredient.name}>
                  <div className="mb-1 flex justify-between">
                    <div>
                      <span className="font-medium">{ingredient.name}</span>
                      <span className="ml-2 text-sm text-gray-500">({ingredient.latin})</span>
                    </div>
                    <span className="font-semibold">{ingredient.amount} mg</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-500"
                      style={{ width: `${(ingredient.amount / maxIngredient) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Omega Fatty Acids Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-semibold">
            {dictionary.lang === 'de' ? 'Fettsäuren' : 'Fatty Acids'}
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.omegaFats.map((omega, index) => {
              const colors = [
                'from-blue-400 to-blue-500',
                'from-green-400 to-green-500',
                'from-purple-400 to-purple-500'
              ];
              const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50'];

              return (
                <div
                  key={omega.type}
                  className={`rounded-2xl ${bgColors[index]} p-6 text-center transition-transform hover:scale-105`}
                >
                  <div className="mb-3 text-lg font-medium text-gray-700">{omega.type}</div>
                  <div className="mb-4 text-4xl font-bold">{omega.amount} mg</div>
                  <div className="mx-auto h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${colors[index]} transition-all duration-500`}
                      style={{ width: `${(omega.amount / maxOmega) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily Dose Info */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center text-gray-600 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{data.dailyDose}</span>
          </div>
          <div className="hidden h-4 w-px bg-gray-300 md:block" />
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>{data.perBottle}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
