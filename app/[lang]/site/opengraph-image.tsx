import OpengraphImage from '../../../components/opengraph-image';

export const runtime = 'edge';

export default async function Image({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;
  const title =
    lang === 'de'
      ? 'tadm Nutrition - Premium Gehirn-Gesundheit Nahrungsergänzungsmittel'
      : 'tadm Nutrition - Premium Brain Health Supplements';

  return await OpengraphImage({ title });
}
