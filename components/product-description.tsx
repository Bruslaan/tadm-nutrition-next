'use client';

import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';
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

export function ProductDescription() {
  const { dictionary } = useDictionary();
  const data = (dictionary as any).nutritionFacts as NutritionFactsData;
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!data) return null;

  const maxIngredient = Math.max(...data.ingredients.map((i) => i.amount));

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="mt-8 space-y-2">
      {/* Ingredients Accordion */}
      <div className="overflow-hidden rounded-xl bg-orange-50">
        <button
          onClick={() => toggleSection('ingredients')}
          className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-orange-100"
        >
          <span className="font-semibold">
            {dictionary.lang === 'de' ? 'Inhaltsstoffe' : 'Ingredients'}
          </span>
          <IconChevronDown
            className={clsx(
              'h-5 w-5 text-gray-500 transition-transform',
              openSection === 'ingredients' && 'rotate-180'
            )}
          />
        </button>
        <div
          className={clsx(
            'grid transition-all duration-300',
            openSection === 'ingredients' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-3 border-t border-orange-100 px-4 py-4">
              {data.ingredients.map((ingredient) => (
                <div key={ingredient.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <div>
                      <span className="font-medium">{ingredient.name}</span>
                      <span className="ml-1 text-gray-500">({ingredient.latin})</span>
                    </div>
                    <span className="font-semibold">{ingredient.amount} mg</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                      style={{ width: `${(ingredient.amount / maxIngredient) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fatty Acids Accordion */}
      <div className="overflow-hidden rounded-xl bg-orange-50">
        <button
          onClick={() => toggleSection('omega')}
          className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-orange-100"
        >
          <span className="font-semibold">
            {dictionary.lang === 'de' ? 'Fettsäuren' : 'Fatty Acids'}
          </span>
          <IconChevronDown
            className={clsx(
              'h-5 w-5 text-gray-500 transition-transform',
              openSection === 'omega' && 'rotate-180'
            )}
          />
        </button>
        <div
          className={clsx(
            'grid transition-all duration-300',
            openSection === 'omega' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="overflow-hidden">
            <div className="border-t border-orange-100 px-4 py-4">
              <div className="grid grid-cols-3 gap-3">
                {data.omegaFats.map((omega, index) => {
                  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
                  const bgColors = ['bg-blue-100', 'bg-green-100', 'bg-purple-100'];

                  return (
                    <div
                      key={omega.type}
                      className={`rounded-xl ${bgColors[index]} p-3 text-center`}
                    >
                      <div className="text-xs font-medium text-gray-600">{omega.type}</div>
                      <div className="text-lg font-bold">{omega.amount} mg</div>
                      <div className={`mx-auto mt-1 h-1 w-full rounded-full ${colors[index]}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Dose Accordion */}
      <div className="overflow-hidden rounded-xl bg-orange-50">
        <button
          onClick={() => toggleSection('dosage')}
          className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-orange-100"
        >
          <span className="font-semibold">
            {dictionary.lang === 'de' ? 'Dosierung' : 'Dosage'}
          </span>
          <IconChevronDown
            className={clsx(
              'h-5 w-5 text-gray-500 transition-transform',
              openSection === 'dosage' && 'rotate-180'
            )}
          />
        </button>
        <div
          className={clsx(
            'grid transition-all duration-300',
            openSection === 'dosage' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 border-t border-orange-100 px-4 py-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{data.dailyDose}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>
      </div>
    </div>
  );
}
