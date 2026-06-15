import OpengraphImage from '../../components/opengraph-image';

export const runtime = 'edge';

export default async function Image({ params }: { params: Promise<{ lang: 'en' | 'de' | 'ru' | 'uk' }> }) {
  const { lang } = await params;
  const title =
    lang === 'de'
      ? 'tadm Nutrition - Premium Gehirn-Gesundheit Nahrungsergänzungsmittel'
      : lang === 'ru'
        ? 'tadm Nutrition - Премиальные добавки для здоровья мозга'
        : lang === 'uk'
          ? 'tadm Nutrition - Преміальні добавки для здоров’я мозку'
      : 'tadm Nutrition - Premium Brain Health Supplements';

  return await OpengraphImage({ title });
}
